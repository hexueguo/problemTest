import { ViewController, obx } from '@ali/recore';
import { Grid, Box } from '@alifd/layout';
import { PageHeader, Card, Button, Icon, Message } from '@ali/deep';

// 示例项目组件，不需要删除即可
import DataIndex from '../../components/data-index';
import DemandChart from '../../components/demand-chart';
import PieChart from '../../components/pie-chart';
import VideoCard from '../../components/video-card';

// 示例数据请求，不需要删除即可
// import demoApi, { TIndexCards, TVideoCards, TDemandData }  from '../../api/demo.api';

export default class PageView extends ViewController {
  static components = {
    PageHeader,
    Card,
    Button,
    Icon,
    Message,
    Grid,
    Box,
    DataIndex,
    DemandChart,
    PieChart,
    VideoCard,
  };

  // @obx.ref indexCards: TIndexCards = [];
  // @obx.ref videoCards: TVideoCards = [];
  // @obx.ref demandData: TDemandData = [];

  async $init() {
    // this.indexCards = await demoApi.getIndexCards('foo', 1);
    // this.videoCards = await demoApi.getVideoCards();
    // this.demandData = await demoApi.getDemandData('foo');
  }
}
