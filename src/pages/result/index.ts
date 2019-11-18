import { ViewController, obx } from '@ali/recore';
import {
  Button,
  Illustration,
} from '@ali/deep';

export default class PageView extends ViewController {
  static components = {
    Button,
    Illustration,
  };

  @obx.val currentType = 'unkownError';

  typeTitles = {
    unkownError: '未知错误',
    serverError: '服务端错误',
    notFound: '404',
    permissionDenied: '无权限',
    empty: '暂无数据',
    completed: '已完成',
    transferred: '已转交',
  };

  changeType(type: string) {
    this.currentType = type;
  }
}
