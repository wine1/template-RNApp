import React, { useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native'
import { List } from '@ant-design/react-native'
const Item = List.Item

const MineScreen = ({ navigation, route }) => {

  useEffect(() => {
  }, [])
  return <View>
    <ScrollView>
      <List renderHeader={'带缩略图'}>
        <Item disabled extra="箭头向右" arrow="horizontal"  onPress={() => navigation.navigate('Login')} >
          标题文字
        </Item>
        <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
          thumb
        </Item>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb
        </Item>
        <Item
          extra={
            <Image
              source={{
                uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
              }}
              style={{ width: 29, height: 29 }}
            />
          }
          arrow="horizontal">
          extra为Image
        </Item>
      </List>
    </ScrollView>
  </View>
};

export default MineScreen