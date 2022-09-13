import {
  NativeModules,
} from 'react-native';
import { check, request, openSettings, PERMISSIONS, RESULTS, Rationale } from 'react-native-permissions';
import Native from './native_utils'

// 权限配置参考文档

export type TypeName = 'CAMERA' | 'MICROPHONE'



/**
 *  原生权限
 */
class Permission {

  constructor() {
  }

  matchName(name: string) {
    let DeviceBrand = Native.deviceInfo().DeviceBrand
    let permissionName = PERMISSIONS[`${DeviceBrand === 'Android' ? 'ANDROID' : 'IOS'}`]
    let res: any = ''
    switch (name) {
      case 'CAMERA':
        res = permissionName.CAMERA
        break
      case 'MICROPHONE':
        res = DeviceBrand === 'Android' ? PERMISSIONS.ANDROID.CALL_PHONE : PERMISSIONS.IOS.MICROPHONE
      case 'CALENDARS':
        res = DeviceBrand === 'Android' ? PERMISSIONS.ANDROID.READ_CALENDAR : PERMISSIONS.IOS.CALENDARS
        break
    }

    return res
  }


  /**
   * 检测是否开启了权限
   * @param name 权限名
   */
  checkPermission = (name: TypeName) => {
    let permissionName = this.matchName(name)
    check(permissionName)
      .then((result) => {
        console.log('checkPermission', result)
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(name,':This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            console.log(name,':The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.LIMITED:
            console.log(name,':The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log(name,':The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log(name,':The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch((error) => {
        console.error(error)
      });
  }

  /**
   * 请求权限
   * @param name 权限名
   */
  requestPermission = (name: TypeName) => {
    type Rationale = {
      title: string;
      message: string;
      buttonPositive?: string;
      buttonNegative?: string;
      buttonNeutral?: string;
    };
    //  request(permission: string, rationale?: Rationale): Promise<PermissionStatus>;
    let rationale: Rationale = {
      title: '',
      message: '',
      buttonPositive:'',
      buttonNegative: '',
      buttonNeutral: '',
    }
    let permissionName = this.matchName(name)
    request(permissionName, rationale).then((result) => {
      console.log(result)
      // this.openPermission()
    });
  }

  /**
   * 打开设置
   */
  openPermission = () => {
    openSettings().catch(() => console.warn('cannot open settings'));
  }



}

export default new Permission()