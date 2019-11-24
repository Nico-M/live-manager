import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';
import { AtFab, AtCard, AtAvatar } from 'taro-ui';

class ManagerItem extends Component {
  config: Config = {
    navigationBarTitleText: '经纪人排名'
  };

  render() {
    return (
      <View className="manager-item-view">
        <View className="panel-title d-flex">
          <Text>李怡</Text>
          <AtAvatar
            circle
            size="small"
            image="https://img.ljcdn.com/usercenter/images/uc_ehr_avatar/842fc2a4-79b8-4e53-8d1c-5a6ae717d0fb.jpg.480x640.jpg"
            className="ml-sm"
          ></AtAvatar>
        </View>
        <View className="at-article">
          <AtCard title="个人简介"  isFull>
            <View className="at-row duty-item">
              <View className="at-col title">服务平台年限</View>
              <View className="at-col desc">3-4年</View>
            </View>
            <View className="at-row duty-item">
              <View className="at-col title">主营板块</View>
              <View className="at-col desc">海珠工业大道南 海珠东晓路 海珠金碧 </View>
            </View>
            <View className="at-row duty-item">
              <View className="at-col title">个人成绩</View>
              <View className="at-col desc">售出房源10套, 签约买房客户4人</View>
            </View>
            <View className="at-row duty-item">
              <View className="at-col title">重点小区</View>
              <View className="at-col desc"> 金碧花园第一金碧 鸣翠花园</View>
            </View>
            <View className="at-row duty-item">
              <View className="at-col title">能力标签</View>
              <View className="at-col desc">销售达人 房东信赖</View>
            </View>
          </AtCard>

          <View className="at-article__content">
            <View className="at-article__section">
              <View className="at-article__p">
                本人入职广州链家三年，海珠南金碧三分店店经理。2017年进入广州链家MVP成员，熟悉周边商圈，业务流程熟练，风险意识高，严谨细心。
              </View>
              <View className="at-article__p">
                喜欢这份职业，能帮助客户找到家，我会用心帮您找到满意的家，您的信任、我的责任。我们的服务是从签单这一刻开始，请您体验。链家蓝豪，很高兴为您服务。祝生活愉快！
              </View>
            </View>
          </View>
        </View>
        <View className="fixed-icon">
          <AtFab size="small">
            <Text className="at-fab__icon at-icon at-icon-video"></Text>
          </AtFab>
        </View>
      </View>
    );
  }
}

export default ManagerItem as ComponentClass;
