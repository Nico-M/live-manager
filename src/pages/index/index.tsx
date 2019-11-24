import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';
import { AtCard } from 'taro-ui';

// type PageStateProps = {
//   counter: {
//     num: number
//   }
// }

// type PageDispatchProps = {
//   add: () => void
//   dec: () => void
//   asyncAdd: () => any
// }

// type PageOwnProps = {}

// type PageState = {}

// type IProps = PageStateProps & PageDispatchProps & PageOwnProps

// interface Index {
//   props: IProps;
// }

class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };
  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick=()=>{
    Taro.navigateTo({
      url:'/pages/managerList/index'
    })
  }

  render() {
    return (
      <View className="home-container">
        <View className="compnay-rank-title panel-title">中介公司排名</View>
        <AtCard
          className="company-card-list"
          note="小Tips"
          extra="人气值 #1"
          title="链家，连接每个家的故事"
          thumb="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/fd1d273dc8cf4ea9d30ddfcf634e6913_121_121.jpg"
          onClick={this.handleClick}
        >
          链家网集房源信息搜索、产品研发、大数据处理、服务标准建立为一体的以数据驱动的全价值链房产服务平台
        </AtCard>
        <AtCard
          className="company-card-list"
          note="小Tips"
          extra="人气值 #2"
          title="安居客"
          thumb="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/11cc42a53f91b9d0fafc3039293f1e3c_121_121.jpg"
        >
          上安居客，看全房源！楼盘全、房源全、中介全，全面涵盖
        </AtCard>
        <AtCard
          className="company-card-list"
          note="小Tips"
          extra="人气值 #3"
          title="房天下"
          thumb="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/669a7b5bac5b549b1cfe3ef9410eadef_121_121.jpg"
        >
          房天下(FANG.COM)是房地产家居行业的专业网络平台,美国纽约交易所上市公司，覆盖全国642个城市，业务涉及新房、二手房、租房、家居、金融等，一直带动新房、二手房、租房、家居、房地产研究等行业的互联网创新,在PC及移动领域均处于前列。房天下,买房卖房大平台！
        </AtCard>
      </View>
    );
  }
}

export default Index as ComponentClass;
