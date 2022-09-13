//
//  AlipayMoudle.m
//  rn68
//
//  Created by 田京京 on 2022/9/2.
//

#import <Foundation/Foundation.h>
#import "AlipayModule.h"
#import <AlipaySDK/AlipaySDK.h>

   @implementation AlipayModule

   RCT_EXPORT_METHOD(pay:(NSString *)orderInfo
    resolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject)
{
    //应用注册scheme,在AliSDKDemo-Info.plist定义URL types
    NSString *appScheme = @"yourschemenvalue";
     [[AlipaySDK defaultService] payOrder:orderInfo fromScheme:appScheme callback:^(NSDictionary *resultDic) {
    resolve(resultDic);
  }];
 }
RCT_EXPORT_MODULE(Alipay);
@end
