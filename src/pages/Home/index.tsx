import React, { useEffect, useState } from 'react';
import { View, Button, Text, ScrollView, Platform, StyleSheet, NativeModules, Linking } from 'react-native'
// import { SearchBar } from '@ant-design/react-native'
import { CustomPay } from '../../components/Pay'
import CommonStyles from '../../assets/styles/common';
import styles from './styles';

import Permission from '../../utils/permission_utils';
import { PermissionList } from '../../components/PermissionList';

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
      
    }, [])

    const call = (number) => {
        Linking.openURL('tel:' + number)
    }
    return (
        <View style={CommonStyles.content}>

            {/* <CustomPay></CustomPay> */}
            {/* <SearchBar defaultValue="初始值" placeholder="搜索" /> */}
            <ScrollView >
                <Button title="Go to Guide" onPress={() => navigation.navigate('Guide')} />
                <Button title="Go to Jane's profile" onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />
                <Button title="Go to Login" onPress={() => navigation.navigate('Login', { name: 'Jane' })} />

                <View onTouchStart={() => call('13164174632')}><Text>客服电话</Text></View>

                <PermissionList></PermissionList>
            </ScrollView>
        </View>
    );
};

export default HomeScreen