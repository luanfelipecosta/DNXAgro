import {compose, lifecycle, withState, withHandlers} from 'recompose';
import {RESULTS} from 'react-native-permissions';
// import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
// import {withFormik} from 'formik';
// import axios from 'axios';
// import {API_URL} from '../../constants';
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

const withScannedQRCodeState = withState('QRCode', 'saveQRCode', null);

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

const EnhancedScreen = compose(
  withScannedQRCodeState,
  withPermissionState,
  withRequestPermissionHandler,
  withCameraPermissionFlow,
)(Scan);

EnhancedScreen.navigationOptions = {
  header: null,
};

export default EnhancedScreen;
