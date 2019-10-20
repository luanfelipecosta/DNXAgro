import React from 'react';
import {RNCamera} from 'react-native-camera';
import {CenteredContent, ScanWarning} from './styles';
import {Colors} from '../../constants';
import Button from '../../components/Button';
// import { Container } from './styles';

export default function CodeScanner({onBarCodeScanned, closeCamera}) {
  return (
    <RNCamera
      // ref={cameraRef}
      style={{flex: 1}}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.off}
      barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      onBarCodeRead={onBarCodeScanned}>
      {({camera, status, recordAudioPermissionStatus}) => {
        if (status !== 'READY') return null;
        return (
          <CenteredContent>
            <ScanWarning />
            <Button
              style={{backgroundColor: Colors.Red}}
              text="FECHAR"
              onPress={closeCamera}
            />
          </CenteredContent>
        );
      }}
    </RNCamera>
  );
}
