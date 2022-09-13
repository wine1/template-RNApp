import React, { useEffect, useState } from 'react';
import { View, Button, Text, ScrollView, Platform, StyleSheet, NativeModules } from 'react-native'
import { AMapSdk, MapView, MapType } from "react-native-amap3d";
import { PermissionsAndroid } from "react-native";
import { init, Geolocation } from "react-native-amap-geolocation";
// import { SearchBar } from '@ant-design/react-native'
import { CustomPay } from '../../components/Pay'
import CommonStyles from '../../assets/styles/common';
import styles from './styles';
import { InterCoords } from './index.interface'


const PageMapScreen = ({ navigation }) => {

    const [coords, setCoords] = useState<InterCoords>({})
    // 显示地图
    useEffect(() => {
        console.log(111, NativeModules)
        console.log('AMapSdk', AMapSdk)
        AMapSdk.init(
            Platform.select({
                android: "",
                ios: "75fb7b8559e4c57b425dec7bec56a0b7",
            })
        );
    }, [])

    // 获取定位
    useEffect(() => {
        init({
            ios: "75fb7b8559e4c57b425dec7bec56a0b7",
            android: ""
        });
        Geolocation.getCurrentPosition(({ coords }) => {
            // console.log('coords', coords);
            setCoords(coords)
        });
    }, [])

    return (
        <View style={CommonStyles.content}>
            <ScrollView>
                <Button title="Go to Guide" onPress={() => navigation.navigate('Guide')} />
                <Button title="Go to Jane's profile" onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />
                <Button title="Go to Login" onPress={() => navigation.navigate('Login', { name: 'Jane' })} />
                <Text>地图</Text>
                <MapView style={styles.map}
                    mapType={MapType.Satellite}
                    initialCameraPosition={{
                        target: {
                            latitude: coords?.latitude || 30.213417426215276,
                            longitude: coords?.longitude || 120.21981553819444
                        },
                        zoom: 8,
                    }}
                    onLoad={() => console.log("onLoad")}
                    onPress={({ nativeEvent }) => console.log(nativeEvent)}
                    onCameraIdle={({ nativeEvent }) => console.log(nativeEvent)}
                />
            </ScrollView>
        </View>
    );
};

export default PageMapScreen