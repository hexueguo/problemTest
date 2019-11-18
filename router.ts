// 路由配置，文档：https://yuque.antfin-inc.com/recore/docs/router
import { readdirSync } from 'fs';
import { join, basename } from 'path';

function computeRoutes() {
  // 扫描目录生成路由结构
  const dirs = readdirSync(join(__dirname, './pages'));
  return dirs.map(dir => {
    const name = basename(dir);
    return {
      main: `./${name}`,
      path: `/${name}`,
    };
  });
}

export default {
  baseDir: './pages',
  exact: true, // 全局绝对匹配设置
  dynamic: true, // 启用异步路由，即异步动态载入
  routes: computeRoutes(),
  hooks: './router-hooks',
};
