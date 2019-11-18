/*************************************************************/
/***********     api-loader ts 类型声明文件     ****************/
/***********  这是一个类型声明文件的示例，仅供参考  ****************/
/***********  业务真实需要的请求请另行新建配置文件  ****************/
/*************************************************************/

export type TIndexCards = Array<{
  title: string;
  number: number;
  unit?: string;
  subTitle: string;
  trend: 'up' | 'down';
  trendNumber: string;
}>;

export type TVideoCards = Array<{
  title: string;
  cover: string;
  updatedDate: string;
  viewCount: number;
  favCount: number;
}>;

export type TDemandData = Array<{
  name: string;
  P0: number;
  P1: number;
  P2: number;
}>;
