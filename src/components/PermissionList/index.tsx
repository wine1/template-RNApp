import React, { useEffect } from 'react';
import { Text, NativeModules, ScrollView } from 'react-native'
import native from '../../utils/native_utils';
import { View, List } from '@ant-design/react-native';
import Permission from '../../utils/permission_utils';
import { TypeName } from '../../utils/permission_utils';

export const PermissionList = () => {

  useEffect(() => {
  }, [])

  /**
   * 
   */
  const getPermission = (name:TypeName) => {
    Permission.checkPermission(name)
    Permission.requestPermission(name)
  }

  return <View>
    <List renderHeader={'权限列表'}>
      {/* <List.Item onPress={() => getPermission('BLUETOOTH_PERIPHERAL')} >蓝牙外设：BluetoothPeripheral</List.Item> */}
      <List.Item onPress={() => getPermission('MICROPHONE')} >电话：Microphone</List.Item>
      <List.Item onPress={() => getPermission('CAMERA')} >相机：Camera</List.Item>
      {/* <List.Item onPress={() => getPermission('PHOTO_LIBRARY')} >相册：PhotoLibrary</List.Item> */}
    </List>
  </View>
};
