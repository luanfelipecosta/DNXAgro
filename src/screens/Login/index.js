import {compose, lifecycle} from 'recompose';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {withFormik} from 'formik';
import axios from 'axios';
import {API_URL} from '../../constants';
import Login from './Login';

// before component show up it will fetch if there's saved user in async storage
const withCachedUser = lifecycle({
  async componentDidMount() {
    try {
      const savedUser = await AsyncStorage.getItem('@loginform:usuario');

      if (savedUser && savedUser !== '') {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({savedUser});
      }
    } catch (error) {
      console.log(`failed to get asyncstorage @loginform:usuario \n ${error}`);
    }
  },
});

// function that actually hits the API
const LoginService = async values =>
  await axios.post(`${API_URL}/login`, values);

const withFormController = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({savedUser}) => ({
    usuario: savedUser,
  }),
  handleSubmit: async (values, formikBag) => {
    const {
      props: {
        navigation: {navigate},
      },
      setSubmitting,
      setFieldValue,
    } = formikBag;

    setSubmitting(true);

    try {
      // login success
      const {data} = await LoginService(values);
      await AsyncStorage.setItem('@loginform:usuario', values.usuario);
      navigate('Scan', {
        data: {
          ...data,
          usuario: values.usuario,
        },
      });
    } catch (e) {
      // login failed
      const {
        response: {status},
      } = e;

      Alert.alert(
        'Login inválido',
        status === 401
          ? 'Credenciais inválidas, verifique usuário e senha.'
          : 'Erro interno, contacte o administrador',
        null,
        {cancelable: true},
      );
      console.log(e);
    }
    setSubmitting(false);
    setFieldValue('senha', undefined, true);
  },
});

const EnhancedLogin = compose(
  withCachedUser,
  withFormController,
)(Login);

EnhancedLogin.navigationOptions = {
  header: null,
};

export default EnhancedLogin;
