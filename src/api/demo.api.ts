/*************************************************************/
/***********    api-loader 请求声明和配置文件    ****************/
/***********  这是一个数据请求对接的示例，仅供参考  ****************/
/***********  业务真实需要的请求请另行新建配置文件  ****************/
/*************************************************************/

/**
 * 由 api-loader 加载识别 *.api.ts 的文件
 * 使用文档: https://yuque.antfin-inc.com/recore/docs/api-loader
 */

import { TIndexCards, TVideoCards, TDemandData } from './demo.type';

/**
 * 用电量接口请求组
 * @kind ajax
 * @host https://mocks.alibaba-inc.com
 * @baseUrl /mock/limitless/demo
 * @header {}
 */
declare class DemoApi {
  /**
   * 查询指标看板数据
   * @url /indexCards.json
   * @method get
   * @param foo 测试参数1
   * @param bar 测试参数2
   */
  getIndexCards(foo: string, bar: number): Promise<TIndexCards>;

  /**
   * 查询直播回放数据
   * @url /videoCards.json
   * @method get
   */
  getVideoCards(): Promise<TVideoCards>;

  /**
   * 查询需求投入分析数据，线上还没有这个服务，打开本地 mock
   * @url /demandData.json
   * @method get
   * @mock 1
   * @param foo 测试参数1
   */
  getDemandData(foo: string): Promise<TDemandData>;
}

/** 将该 class 命名为DemoApiMock, 可使用自定义的 mock 数据 */
class DemoApiMock {
  getDemandData() {
    return [
      {
        name: '战役需求',
        P0: 18.9,
        P1: 28.8,
        P2: 39.3,
      },
      {
        name: '项目需求',
        P0: 12.4,
        P1: 23.2,
        P2: 34.5,
      },
      {
        name: '日常需求',
        P0: 8.5,
        P1: 18.2,
        P2: 25.5,
      },
    ];
  }
}

export { TIndexCards, TVideoCards, TDemandData };
export default new DemoApi();
