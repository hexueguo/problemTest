import { ViewController, navigator, obx } from '@ali/recore';
import { ConfigProvider, Icon, Shell } from '@ali/deep';
import LoginPage from './pages/login/index';

// 应用入口视图，导航和所有页面复用的 UI 在这里处理
export default class App extends ViewController {
  static components = {
    Icon,
    ConfigProvider,
    Shell,
  };

  @obx path = null;
  @obx locale = 'zh-cn';
  @obx.val selectedNavKeys: string[] = [];
  @obx local_ = 'q111';

  // 处理导航需要的当前选中的菜单数据，请根据自己的项目实际情况处理
  $init(props: any) {
    this.path = props.path.substr(1);
    const selectedNavKey = props.path.substr(1);
    this.selectedNavKeys = [selectedNavKey];
    if (!selectedNavKey) {
      this.selectedNavKeys = ['login'];
    }
    // navigator.goto('/login');
    // this.path = props.path.substr(1);
    console.log('object');
    // console.log('LoginPage,', LoginPage);
  }

  // 导航切换后的回调，可以根据回调的数据执行路由操作
  onNavChange(options: any) {
    if (options) {
      navigator.goto(`/${options.selectedKey}`);
    }
  }
}
