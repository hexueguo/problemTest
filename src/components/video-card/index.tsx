import React, { PureComponent } from 'react';
import { Icon } from '@alifd/next';
import './style.scss';

type ComponentProps = {
  title: string;
  cover: string;
  updatedDate: string;
  viewCount: number;
  favCount: number;
};

export default class VideoCard extends PureComponent<ComponentProps> {
  render() {
    const { title, cover, updatedDate, viewCount, favCount } = this.props;

    return (
      <div className="video-card">
        <div className="updated-date">
          <Icon type="player-start" size="small" />
          {updatedDate}
        </div>
        <div className="video-cover" style={{ backgroundImage: `url(${cover})` }}>
          <span>{title}</span>
        </div>
        <div className="extra-info">
          <div className="view-count">
            <Icon type="visible" size="small" />
            {viewCount}
          </div>
          <div className="fav-count">
            <Icon type="favorite-filling" size="small" />
            {favCount}
          </div>
        </div>
      </div>
    );
  }
}
