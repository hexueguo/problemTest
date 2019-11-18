import React, { PureComponent } from 'react';
import { Icon } from '@alifd/next';
import './style.scss';

type ComponentProps = {
  title: string;
  number: number;
  unit?: string;
  subTitle: string;
  trend: 'up' | 'down';
  trendNumber: string;
};

export default class DataIndex extends PureComponent<ComponentProps> {
  render() {
    const { title, number, unit, subTitle, trend, trendNumber } = this.props;

    return (
      <div className="data-index">
        <h6>{title}</h6>
        <h3>
          {number}
          <span className="unit" x-if={!!unit}>
            {unit}
          </span>
        </h3>
        <p>
          {subTitle}{' '}
          <span className={trend}>
            {trendNumber} <Icon type={`triangle-${trend}`} />
          </span>
        </p>
      </div>
    );
  }
}
