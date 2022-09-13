import { NativeModules, NativeEventEmitter } from 'react-native'
import DeviceInfo from 'react-native-device-info';

interface InterDeviceInfo {
    /** 设备品牌 'Apple'或'Android' */
    DeviceBrand: 'Apple' | 'Android'| string,
    /** 设备型号 */
    DeviceModel: string
}

interface InterSystemInfo {
    systemName:string
}
class Native {
    /** 设备信息 */
    deviceInfo(): InterDeviceInfo {
        // console.log('NativeModules', NativeModules)
        const device: InterDeviceInfo = <any>{};
        device.DeviceBrand = DeviceInfo.getBrand();
        device.DeviceModel = DeviceInfo.getModel();
        return device
    }
    /** 系统信息 */
    systemInfo() {
        let systemName = NativeModules.PlatformConstants.systemName
        const system: InterSystemInfo = <any>{};
        return { systemName }
    }
}
export default new Native()