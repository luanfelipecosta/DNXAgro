import {compose, lifecycle, withState, withHandlers} from 'recompose';
import {RESULTS} from 'react-native-permissions';
import {Alert} from 'react-native';
import {withFormik} from 'formik';
import axios from 'axios';
import Scan from './Scan';
import {
  checkCameraPermission,
  requestCameraPermission,
} from '../../utils/PermissionHandler';

// like a "storage" > state name | setter func name | inital value
const withPermissionState = withState(
  'hasCameraPermissions',
  'setCameraPermissions',
  false,
);

const withSelectedOperation = withState('operation', 'setOperation', false);

const withCameraOpenState = withState('cameraOpen', 'toggleCamera', null);

const withQRCodeState = withState('QRCode', 'setQRCode', null);

const withRequestPermissionHandler = withHandlers({
  requestPermission: ({setCameraPermissions}) => async () => {
    const requestedPermission = await requestCameraPermission();
    if (requestedPermission === RESULTS.GRANTED) {
      setCameraPermissions(true);
    }
  },
});

const withCameraPermissionFlow = lifecycle({
  async componentDidMount() {
    const {setCameraPermissions, requestPermission} = this.props;

    try {
      // verifica se o user JÁ tem as permissões
      const initiallyHasCameraPermissions = await checkCameraPermission();
      if (initiallyHasCameraPermissions) {
        setCameraPermissions(true);
        return;
      }
      // se não tem, faz o request
      await requestPermission();
    } catch (e) {
      console.log('⚠️ Failed to request permissions.');
    }

    // has no permissions
  },
});

const withScannerHandler = withHandlers({
  onBarCodeScanned: props => ({data}) => {
    const {toggleCamera, setQRCode} = props;
    // cameraOpen
    toggleCamera(false);
    const isValid = String(data).indexOf('cx-') === 0;

    if (!isValid) {
      alert('QR Code inválido.');
      return;
    }

    const [pre, id] = data.split('cx-');
    setQRCode(id);
  },
  exit: ({navigation: {navigate}}) => () => {
    Alert.alert('Sair', 'Deseja mesmo sair?', [
      {
        onPress: () => navigate('Login'),
        text: 'Sair',
      },
      {
        onPress: () => {},
        text: 'Cancelar',
        style: 'destructive',
      },
    ]);
  },
});

const withCollectHandlers = withFormik({
  handleSubmit: async (values, formikBag) => {
    const {
      props: {
        QRCode,
        operation,
        navigation: {
          navigate,
          state: {
            params: {
              data: {urlAspirar, urlColetar, token, usuario},
            },
          },
        },
      },
      setSubmitting,
      setFieldValue,
    } = formikBag;

    setSubmitting(true);
    const url = operation === 'aspirar' ? urlAspirar : urlColetar;

    try {
      const res = await axios.put(`${url}/?id=${QRCode}`, {
        usuario,
        token,
        id: QRCode,
        valor: operation === 'coletar' ? values.valor : undefined,
      });

      alert('Operação conclúida com sucesso!');
    } catch (error) {
      const {
        response: {status},
      } = error;

      if (status === 401) {
        navigate('Login');
        alert('Sessão expirada, faça login novamente.');
        return;
      }
      alert(
        `Falha ao ${operation} o item "CX-${QRCode}". Tente novamente mais tarde, se o erro persistir contate um administrador `,
      );
    }
    setSubmitting(false);
    setFieldValue('valor', undefined);
  },
});

const EnhancedScreen = compose(
  withCameraOpenState,
  withSelectedOperation,
  withQRCodeState,
  withPermissionState,
  withRequestPermissionHandler,
  withCameraPermissionFlow,
  withScannerHandler,
  withCollectHandlers,
)(Scan);

EnhancedScreen.navigationOptions = {
  header: null,
};

export default EnhancedScreen;
