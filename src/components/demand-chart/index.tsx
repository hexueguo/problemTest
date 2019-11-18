import React, { PureComponent } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

export default class ChargeChart extends PureComponent<any> {
  render() {
    const data = this.props.data || [];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['P0', 'P1', 'P2'],
      key: '优先级',
      value: '平均投入人日',
    });
    return (
      <Chart height={300} data={dv} forceFit padding="auto">
        <Axis name="优先级" />
        <Axis name="平均投入人日" />
        <Legend />
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
        <Geom
          type="interval"
          position="优先级*平均投入人日"
          color={'name'}
          adjust={[
            {
              type: 'dodge',
              marginRatio: 1 / 32,
            },
          ]}
        />
      </Chart>
    );
  }
}
