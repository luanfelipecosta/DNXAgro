import {
  check,
  request,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import {Platform, Alert} from 'react-native';

const permissionString =
  Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

export const checkCameraPermission = async () =>
  (await check(permissionString)) === RESULTS.GRANTED;

export const requestCameraPermission = async () => {
  try {
    const result = await request(permissionString);

    if (result === RESULTS.BLOCKED) {
      Alert.alert(
        'Conceder permissões de câmera',
        'Abra as configurações do app e habilite as permissões de câmera',
        [
          {
            text: 'Abrir configurações',
            onPress: openSettings,
          },
          {
            text: 'Mais tarde',
            onPress: () => {},
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
        },
      );

      return false;
    }
    return result;
  } catch (e) {
    alert('Falha ao capturar permissões');
  }
};
