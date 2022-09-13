import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button, NativeModules, NativeEventEmitter } from 'react-native'
import BleManager from "react-native-ble-manager";
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const ContentScreen = ({ navigation, route }) => {

  useEffect(() => {
  }, [])

  const openBuleTooth = async () => {
    try {
      const result = await BleManager.start({ showAlert: true });
      console.log('result====', JSON.stringify(result))
      if (!result) {
        BleManager.checkState();
      } else {
        console.error('蓝牙初始化失败，请检查相关设置再重试')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return <ScrollView>
    <View>
      <Text>blueTooth</Text>
      <Button onPress={openBuleTooth} title="打开蓝牙"></Button>
    </View>
  </ScrollView>
};

export default ContentScreen