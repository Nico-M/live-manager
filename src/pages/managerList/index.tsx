import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import './index.scss';

class ManagerList extends Component {
  config: Config = {
    navigationBarTitleText: '经纪人排名'
  };

  toTheNextStep=()=>{
      Taro.navigateTo({
          url:'/pages/managerItem/index'
      })
  }

  render() {
    return (
      <View className="manager-list-view">
        <View className="manager-list-title panel-title">经纪人排名</View>
        <View className="manager-content mt-sm">
          <AtList>
            <AtListItem
              title="李怡"
              note="金牌经纪人"
              extraText="详情咨询"
              arrow="right"
              thumb="https://pic1.ajkimg.com/display/xinfang/9218bd19cd3beebaddfe86ad9e2b8aac/80x80c.jpg"
              onClick={this.toTheNextStep}
            />
            <AtListItem
              title="范华庆"
              note="银牌经纪人"
              extraText="详情咨询"
              arrow="right"
              thumb="https://pic1.ajkimg.com/display/xinfang/aeef6f673c58b33bdae676c0c5b9374a/80x80c.jpg"
              onClick={this.toTheNextStep}
            />
            <AtListItem
              title="朱宝珍"
              note="银牌经纪人"
              extraText="详情咨询"
              arrow="right"
              thumb="https://pic1.ajkimg.com/display/xinfang/989fa1c36cfc42ea811df994389dd849/80x80c.jpg"
            />
            <AtListItem
              title="杨岩"
              note="银牌经纪人"
              extraText="详情咨询"
              arrow="right"
              thumb="https://pic1.ajkimg.com/display/xinfang/b63dfd9bf82e410dddf45921de4606cc/80x80c.jpg"
              onClick={this.toTheNextStep}
            />
            <AtListItem
              title="卢丽霞"
              note="模范经纪人"
              extraText="详情咨询"
              arrow="right"
              thumb="https://pic1.ajkimg.com/display/xinfang/146e45dbdd52baedefd66cbc3afa8456/80x80c.jpg"
              onClick={this.toTheNextStep}
            />
            <AtListItem
              title="陈斌"
              note="模范经纪人"
              extraText="详情咨询"
              arrow="right"
              thumb="https://pic1.ajkimg.com/display/xinfang/430648d3988b07a33913904d0265ca9d/80x80c.jpg"
              onClick={this.toTheNextStep}
            />
          </AtList>
        </View>
      </View>
    );
  }
}

export default ManagerList as ComponentClass;
