import React, { PureComponent } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, Guide } from 'bizcharts';
import DataSet from '@antv/data-set';

export default class ChargeChart extends PureComponent<any> {
  render() {
    const { DataView } = DataSet;
    const { Html } = Guide;
    const data = [
      {
        item: '项目一',
        count: 45,
      },
      {
        item: '项目二',
        count: 25,
      },
      {
        item: '项目三',
        count: 30,
      },
    ];
    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    });
    const cols = {
      percent: {
        formatter: (val: any) => {
          return val * 100 + '%';
        },
      },
    };
    return (
      <div>
        <Chart height={300} data={dv} scale={cols} padding="auto" forceFit>
          <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
          <Axis name="percent" />
          <Legend />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              'item*percent',
              (item, percent) => {
                return {
                  name: item,
                  value: percent * 100 + '%',
                };
              },
            ]}
            style={{
              lineWidth: 1,
              stroke: '#fff',
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return `${item.point.item}: ${val}`;
              }}
            />
          </Geom>
        </Chart>
      </div>
    );
  }
}
