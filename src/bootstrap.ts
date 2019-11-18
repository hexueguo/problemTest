import { runApp, createI18n } from '@ali/recore';

// 国际化文案注入，文档：https://yuque.antfin-inc.com/recore/docs/i18ns
const i18n = createI18n('recore-demo', 'zh_CN');

// 渲染设备信息获取，供页面响应需要
const device = navigator.userAgent.includes('Mobile') ? 'phone' : 'desktop';

// 应用启动，文档：https://yuque.antfin-inc.com/recore/docs/bootstrap
runApp({
  history: {
    mode: 'browser',
    basename: process.env.NODE_ENV === 'production' ? '/' : (window as any).g_config.routerBaseName,
  },
  globalComponents: {},
  globalUtils: {
    i18n,
    device,
    responsive: (a: any, b: any) => {
      return device === 'desktop' ? a : b;
    },
  },
});
