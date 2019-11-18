import { navigator } from '@ali/recore';

function doYouHavePrivate(defined: any, match: any) {
  // console.log('defined', defined);
  // console.log('match', match);
  // if (match.path === '/login') {
  //   return true;
  // }
  return false;
}

export default {
  async beforeRoute(defined: any, match: any) {
    const ok = await doYouHavePrivate(defined, match);
    console.log('ok', ok);
    if (!ok) {
      // 跳转到 login 页
      return '/login';
    }
    // 鉴权成功
    return true;
  },
};
