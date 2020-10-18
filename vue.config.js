module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'moe.littlesound.taiko-hit-switch-helper',
        productName: 'TaikoHitSwitchHelper', // 项目名，也是生成的安装文件名，即aDemo.exe
        copyright: 'Copyright © 2020', // 版权信息
        directories: {
          output: './dist'// 输出文件路径
        },
        win: { // win相关配置
          icon: './public/logo.ico', // 图标，当前图标在根目录下，注意这里有两个坑
          target: [
            {
              target: 'nsis', // 利用nsis制作安装程序
              arch: [
                'x64'// 64位
              ]
            }
          ]
        },
        nsis: {
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: './public/logo.ico', // 安装图标
          uninstallerIcon: './public/logo.ico', // 卸载图标
          installerHeaderIcon: './public/logo.ico', // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: 'APP' // 图标名称
        }
      }
    }
  }
}
