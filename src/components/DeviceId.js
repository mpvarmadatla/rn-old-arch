import React,{useState} from 'react';

import {Text,NativeModules,SafeAreaView,Button} from 'react-native';
const DeviceId = () =>{
  const {DeviceIdCustomMethod} = NativeModules;
  
  const [id, setId] = useState('Press the button to get The ID');

  const getId = () => {
      DeviceIdCustomMethod.getPhoneID()
      .then((res) => {
        setId('ID: ' + res);
        
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return <SafeAreaView >
  <Text >{id}</Text>
  <Button title="Get Id" onPress={getId} />
</SafeAreaView>
}

export default DeviceId