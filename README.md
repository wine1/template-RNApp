
开发设备 macOS 第一次启动项目
 `brew install node` node版本v14及以上
 `brew install watchman`

目标设备 ios
    应用市场安装xcode
    `brew install cocoapods` || `sudo gem install cocoapods`

    启动项目
    `npm i`
    `cd ios && pod install`
    `npm run ios`

目标设备 android
    安装 Android Studio
    `brew tap homebrew/cask-versions`
    `brew install --cask zulu11`
    配置 ANDROID_SDK_ROOT 环境变量 后文有详细的安卓配置文档
    具体参考官方文档

    启动项目
    `npm i`
    `npm run android`

    报错信息
    error Failed to install the app. Make sure you have an Android emulator running or a device connected.
    Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081
    解决方案
    `cd android && rm -rf .gradle && cd .. && npm run run-android`

    打包项目
    `npm run build-android`  生成的apk文件在Android/app/build/output/apk 

参考node版本 14.19.3 

参考文档 
https://reactnative.cn/docs/environment-setup


详细的安卓配置文档

# 环境变量配置
## 安装依赖
必须安装的依赖有：Node@14.19.3、JDK@11.0.16.1、Android Studio

命令安装方式

```
brew install node
brew install watchman(非必需)
```
> 注意：node版本必须在14以上，使用上面推荐版本即可，也不要使用cnpm，这会使你的package不能正常识别

----- 

> 注意：在上述步骤结束后，官方推荐使用**淘宝源**,在该项目是**不推荐的**，但是你可以安装`nrm`来管理你的镜像，该项目均使用`npm`，请勿使用`yran`进行安装，这可以避免不必要的错误。

#### JDK配置
从官网安装`JDK@11.0.16.1`然后执行以下代码：

```
brew tap homebrew/cask-versions
brew install --cask zulu11
```
这两个也是必须安装的👆<br/>

配置JDK

    sudo vim .bash_profile

```
# 将下面内容复制到文件内：
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.16.1.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH:.
```
然后输入`javac --version`查看是否配置成功

## Android开发环境
1. 安装Android Studio
下载Android Studio后在安装界面选择`Custom`选项,确保有以下选项：
- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`
> 可能是灰色的，不过没事，后面可以单独安装，先Next，然后就是欢迎界面了
2. 安装Android SDK
> SDK Manager 还可以在 Android Studio 的"Preferences"菜单中找到。具体路径是Appearance & Behavior → System Settings → Android SDK。

在`SDK Manager`中选择`SDK PlatForms`,然后勾选"Show Package Details"。展开Android 12 (S)选项，确保勾选了下面这些组件：

    Android SDK Platform 31
    Intel x86 Atom_64 System Image（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）

然后点击"SDK Tools"选项卡，同样勾中右下角的"Show Package Details"。展开"Android SDK Build-Tools"选项，确保选中了 React Native 所必须的31.0.0版本。你可以同时安装多个其他版本。

点击"Apply"来下载和安装选中的这些组件。

3. 配置 ANDROID_SDK_ROOT 环境变量
如果`shell`是`zsh`，则配置文件为`~/.zshrc`，如果是 `bash` 则为`~/.bash_profile`（可以使用echo $0命令查看你所使用的 shell。）：
```
# 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/tools
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```
使用source $HOME/.zshrc命令来使环境变量设置立即生效（否则重启后才生效）。可以使用echo $ANDROID_SDK_ROOT检查此变量是否已正确设置。

然后在项目根目录下执行`npm run android`项目就可以启动了