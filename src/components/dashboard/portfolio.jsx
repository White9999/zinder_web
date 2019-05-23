import React from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';
import SiderCustom from '../SiderCustom';
import HeaderCustom from '../HeaderCustom';
import { Button, Icon, Slider, Menu, Dropdown } from 'antd';
import Img from '../../style/imgs/img05.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderS from "react-slick";
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
class Portfolio extends React.Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: ["别开枪"]
      },
      yAxis: {},
      series: [{
        name: '子弹数',
        type: 'bar',
        data: [5]
      }]
    });

    var myCharts = echarts.init(document.getElementById('mains'));
    myCharts.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Yr 0', 'Yr 2', 'Yr 4', 'Yr 6', 'Yr 8', 'Yr 10']
      },
      yAxis: {
        position: 'right',
        type: "value",
        axisLabel: {
          formatter: '${value}k'
        }
      },
      grid: {
        right: 45
      },
      series: [{
        color: "#dad5ac",
        data: [400, 150, 200, 380, 400, 600, 700],
        type: 'line',
        areaStyle: {},
        lineStyle: {
          normal: {
            color: "#a613c5",
          }
        }
      },
      {
        data: [200, 200, 200, 200, 200, 200, 200],
        type: 'line',
        areaStyle: {},
        lineStyle: {
          normal: {
            color: "blue",
          }
        }
      }
      ]
    });


    var myChartd = echarts.init(document.getElementById('maind'));
    myChartd.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2008', '2013', '2018', '2023', '2028']
      },
      yAxis: {
        position: 'right',
        type: "value",
        axisLabel: {
          formatter: '${value}k'
        }
      },
      grid: {
        right: 45
      },
      series: [{
        color: "#ddd7bbfc",
        data: [400, 150, 200, 380, 400, 600, 700],
        type: 'line',
        areaStyle: {},
        lineStyle: {
          normal: {
            color: "#c59213",
          }
        }
      },
      {
        data: [200, 200, 200, 200, 200, 200, 200],
        type: 'line',
        areaStyle: {},
        lineStyle: {
          normal: {
            color: "blue",
          }
        }
      }
      ]
    });

  }
  render() {
    function SamplePrevArrow(props) {
      const { style, onClick } = props;
      return (
        <Icon
          type="left"
          style={{ ...style, display: "block", position: "absolute", top: "41%", left: "20px", zIndex: "10000", fontSize: "20px", color: "white" }}
          onClick={onClick}
        />
      );
    }

    function SampleNextArrow(props) {
      const { style, onClick } = props;
      return (
        <Icon
          type="right"
          style={{ ...style, display: "block", position: "absolute", top: "41%", right: "20px", zIndex: "10000", fontSize: "20px", color: "white" }}
          onClick={onClick}
        />
      );
    }

    const { auth = { data: {} }, responsive = { data: {} } } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );

    return (
      <div className="gutter-example button-demo portfolio-body">
        <SiderCustom className="portfolio-left-list" collapsed={this.state.collapsed} />
        <div>
          <HeaderCustom className="portfolio-title" toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} />
          <div className="bread-crumbs">
            <BreadcrumbCustom first="Explore Opportunities" />
          </div>
          <div className="right-content">

            <div className="right-content-left">
              <h2 className="right-content-h2">338 Spear St Unit 31A</h2>
              <p className="right-content-title">San Francisco, CA 94105</p>
              <div className="months">
                <p className="right-months-p1">5.25%</p>
                <p className="right-months-p2">85%LTV 12 MONTHS</p>
              </div>
              <div className="portfolio-mannay-div">
                <span>$500,000 total</span>
                <span>$350,000 available</span>
              </div>
              <div className="portfolio-bottom-div">
                <div className="portfolio-bottom"></div>
              </div>
              <h3 className="new-title">New</h3>
              <p className="new-content">Be the first one to invest in this property</p>
              <Button type="primary" className="invest-button">Invest</Button>
            </div>
            <div className="right-content-right">
              <SliderS {...settings}>
                <div>
                  <img src={Img} />
                </div>
                <div>
                  <img src={Img} />
                </div>
                <div>
                  <img src={Img} />
                </div>
                <div>
                  <img src={Img} />
                </div>
              </SliderS>
            </div>
          </div>
          <div className="content-2-body">
            <div className="content2-display">
              <div className="content-2-scroll">
                <p className="content-2-scroll-title">Investment calcular</p>
                <h2 className="content-2-scroll-money">$95,000</h2>
                <Slider defaultValue={30} className="slider" tooltipVisible={false} />
              </div>
              <div className="content-2">
                <div className="content-2-list">$50,575
                <p>total return</p>
                </div>
                <div className="content-2-list">6.25%
                <p>annual intereat rate</p>
                </div>
                <div className="content-2-list">Fix to Flip
                <p>loan purpose</p>
                </div>
                <div className="content-2-list">
                  $4,214.58
                  <p>monthly return</p>
                </div>
                <div className="content-2-list">
                  12 Months
                  <p>duration</p>
                </div>
                <div className="content-2-list">
                  12 Months
                  <p>guaranteed term</p>
                </div>
              </div>
            </div>
            <div className="content3-echart">
              <div className="content3-left">
                <h2 className="content3-echart-h2">Investment</h2>
                <p className="content3-echart-p1">Capital Stack</p>
                <div id="main" style={{ width: 100, height: 300 }}></div>
                <div className="content3-echart-cnt">
                  <div className="content3-ec-cnt">
                    <p className="content3-echart-cnt-p1">Source</p>
                    <p><div className="left-y"></div>Home Equity</p>
                    <p><div className="right-y"></div>Tellus Loan @ 8.50%</p>
                    <p>Total Value</p>
                  </div>
                  <div className="content3-echart-cnt2">
                    <p className="content3-echart-cnt2p">% of Total</p>
                    <p className="content3-echart-cnt2p">Amount</p>
                    <p className="content3-echart-cnt2p">15%</p>
                    <p className="content3-echart-cnt2p">$300k</p>
                    <p className="content3-echart-cnt2p">85%</p>
                    <p className="content3-echart-cnt2p">$1.7m</p>
                    <p className="content3-echart-cnt2p">100%</p>
                    <p className="content3-echart-cnt2p">$2.0m</p>
                  </div>
                </div>
                <p className="content3-echart-p1">Historical Value</p>
                <h2 className="content-2-scroll-money blk">$422,000</h2>
                <p className="right-content-title">Current home value</p>
                <div id="maind" style={{ width: 400, height: 250, left: -35 }}></div>
                <div className="content3-p-s">
                  <div className="content3-span-left"></div>Zilly Loan Value
                  <div className="content3-span-right"></div>Home Value
                  </div>
              </div>
              <div className="content3-right">
                <p className="content3-echart-p1">Equity Cushion</p>
                <h2 className="content-2-scroll-money blk">$175,000</h2>
                <p className="right-content-title">Equity</p>
                <p>Downside Simulation</p>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" href="#">
                    2008 Recession&nbsp;&nbsp;
                   <Icon type="down" />
                  </a>
                </Dropdown>
                <p className="content3-right-p">if the 2008 recession happend today, this is what your equity cushion would look like:</p>
                <div id="mains" style={{ width: 400, height: 250, left: -40 }}></div>
                <div className="content3-as">
                  <div className="content3-p-s">
                    <div className="content3-span-left"></div>Zilly Loan Value
                  <div className="blue-a"></div>End of Zilly Loan
                  </div>
                  <div className="content3-list-ims"></div>2008 Recession Simulation
                  <br />
                  <div className="content3-list-4"></div>Time to Recover
                  <div className="content3-p-s">
                    <div className="content3-list-im"></div>Equity Cushion
                  <div className="content3-list-im2"></div>Underwater
                  </div>
                </div>
                <p className="content3-right-p2">During the 2008 recession, the average price decline for a condo in Los Angeles was:
                </p>
                <ul className="content3-ul">
                  <li>Recession Decline<span>31.3%</span></li>
                  <li>Decline Period<span>1.5 Years</span></li>
                  <li>Recovery Period<span>6 Years</span></li>
                  <li>Total Recovery<span>7.5 Years</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;