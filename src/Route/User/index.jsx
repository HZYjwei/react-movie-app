import React from 'react';
import LineLink from '../../component/LineLink';
import TabBar from '../../component/TabBar';
import './index.css';

const User = () => {
  return (
    <div className="user">
      <div className="user__top">
        <div className="tOperator">
          <div className="tOperator__icon tOperator__icon--setting"></div>
          <div className="tOperator__icon tOperator__icon--message"></div>
        </div>
        <div className="user__info">
          <div className="user__avator" style={{ backgroundImage: 'url(/source/avator.jpg)' }} />
          <div className="user__detail">
            <div className="user__name">小明小明小明小明小明小明小明小明小明</div>
            <div>
              <span className="user__fellow">关注 100</span>
              <span className="user__fans">被关注 100</span>
            </div>
            <div className="user__level">黑钻</div>
          </div>
        </div>
      </div>

      <div className="user__content">
        <LineLink title="收藏的电影" extra="20" />
        <LineLink title="看过的电影" extra="20" />
      </div>
      <TabBar current="user"/>
    </div>
  );
};

export default User;
