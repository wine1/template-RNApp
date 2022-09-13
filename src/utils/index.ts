'use strict'
import { Dimensions } from 'react-native'
const deviceW = Math.min(414, Dimensions.get('window').width)
const basePx = 750

/** 尺寸适配 */
export default function rpx(px: number) {
    return (px * deviceW) / basePx
}
