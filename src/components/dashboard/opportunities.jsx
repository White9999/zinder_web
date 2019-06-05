import React from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';
// import SiderCustom from '../SiderCustom';
import HeaderCustom from '../HeaderCustom';
import { Button, Icon, Slider, Menu, Dropdown, Modal } from 'antd';
import Img from '../../style/imgs/img05.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderS from "react-slick";
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

class Opportunities extends React.Component {
  state = {
    collapsed: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('main'));
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
    var myCharte = echarts.init(document.getElementById('maine'));
    myCharte.setOption({
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
        data: ['1988', '1993', '1998', '2003', '2008']
      },
      yAxis: {
        position: 'right',
        type: "value",
        axisLabel: {
          formatter: '{value}%'
        }
      },
      grid: {
        right: 45
      },
      series: [{
        color: "#ddd7bbfc",
        data: [50, 80, 90, 100, 200],
        type: 'line',
        areaStyle: {},
        lineStyle: {
          normal: {
            color: "#c59213",
          }
        }
      },
      {
        data: [40, 90, 80, 70, 220],
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
    var myChartf = echarts.init(document.getElementById('mainf'));
    myChartf.setOption({
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
        data: ['1998', '2003', '2008', '2013', '2018']
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
        data: [50, 60, 90, 100, 120],
        type: 'line',
        areaStyle: {},
        lineStyle: {
          normal: {
            color: "#c59213",
          }
        }
      },
      {
        data: [50, 51, 60, 70, 90],
        type: 'line',
        areaStyle: {},
        lineStyle: {
          normal: {
            color: "blue",
          }
        }
      },
      {
        data: [40, 52, 55, 58, 60],
        type: 'line',
        areaStyle: {},
        lineStyle: {
          normal: {
            color: "origin",
          }
        }
      }
      ]
    });
  }
  render() {
    // function onClick(e){
    //   e.stopPropagation();
    // }
    function SamplePrevArrow(props) {
      const { style, onClick } = props;
      return (
        <Icon
          type="left"
          style={{ ...style, display: "block",position: "absolute", top: "37%", left: "20px", zIndex: "1000", fontSize: "30px", color: "white" }}
          onClick={onClick}
        />
      );
    }

    function SampleNextArrow(props) {
      const { style, onClick } = props;
      return (
        <Icon
          type="right"
          style={{ ...style, display: "block", position: "absolute", top: "37%", right: "20px", zIndex: "1000", fontSize: "30px", color: "white" }}
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
          <a>1st menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <a>2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    const astyle = {padding :1 , height:"100px"}
    return (
      <div className="gutter-example button-demo portfolio-body">
        {/* <SiderCustom className="portfolio-left-list" collapsed={this.state.collapsed} /> */}
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
              <div type="primary" onClick={this.showModal}>
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
              <Modal
                title=""
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
                style={astyle}
                width="700px"
                className="modalq"
              >
                <SliderS 
                {...settings}>
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
              </Modal>
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
                    <p><span className="left-y"></span>Home Equity</p>
                    <p><span className="right-y"></span>Tellus Loan @ 8.50%</p>
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

            <div className="content4">
              <h2 className="content3-echart-h2" style={{ marginTop: 20 }}>Home</h2>
              <div className="content-title-a">
                <p className="content3-echart-p1" style={{ marginTop: 40 }}>Home Stats</p>
                <p className="content3-echart-p1" style={{ marginTop: 40 }}>Home Stats</p>
              </div>
              <div className="content4-lists">
                <div className="content4-list">
                  <div className="content4-cnt-a">
                    <ul className="content4-ul">
                      <li>Value<span>$2,000,000</span></li>
                      <li>Lot Size<span>-</span></li>
                      <li>Beds<span>2</span></li>
                    </ul>
                  </div>
                  <div className="content4-cnt-b">
                    <ul className="content4-ul">
                      <li>$/SqFt<span>$1,646</span></li>
                      <li>SqFt<span>1,275</span></li>
                      <li>Baths<span>2</span></li>
                    </ul>
                  </div>
                </div>
                <div className="content4-listb">
                  <ul className="content4-downlod-ul">
                    <li><img src={require('../../style/imgs/pdf.png')} alt='pdfIcon' className="downIcon" />Appraisal 9-29-17<a href={require('../../style/imgs/downLoadIcon.png')} download><img className="downLoadIcon" src={require('../../style/imgs/downLoadIcon.png')} alt="downLoadIcon" /></a></li>
                    <li><img src={require('../../style/imgs/pdf.png')} alt='pdfIcon' className="downIcon" />Project Overview and SoW<a href={require('../../style/imgs/downLoadIcon.png')} download><img className="downLoadIcon" src={require('../../style/imgs/downLoadIcon.png')} alt="downLoadIcon" /></a></li>
                    <li><img src={require('../../style/imgs/pdf.png')} alt='pdfIcon' className="downIcon" />Property Proﬁle<a href={require('../../style/imgs/downLoadIcon.png')} download><img className="downLoadIcon" src={require('../../style/imgs/downLoadIcon.png')} alt="downLoadIcon" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content5">
              <h2 className="content3-echart-h2" style={{ marginTop: 20 }}>Borrower</h2>
              <div className="content-title-a">
                <p className="content3-echart-p1" style={{ marginTop: 40 }}>Profile</p>
                <p className="content3-echart-p1" style={{ marginTop: 40 }}>Documents</p>
              </div>
              <div className="content5-lists">
                <div className="content5-lists-left">
                  <ul className="content5-list-ul">
                    <li>Age
                      <p>52</p>
                    </li>
                    <li>Income
                      <p>105k</p>
                    </li>
                    <li>Income Type
                      <p>1099</p>
                    </li>
                    <li>Assets
                      <p>$300k</p>
                    </li>
                    <li>Credit Score
                      <p>670</p>
                    </li>
                    <li>Education
                      <p>-</p>
                    </li>
                    <li>Marital Status
                      <p>-</p>
                    </li>
                    <li>Debt
                      <p>$500k</p>
                    </li>
                  </ul>
                </div>
                <div className="content5-lists-right">
                  <ul className="content5-lists-right-ul">
                    <li>
                      Credit Report
                    <span>Tellus Verified<Icon type="check-circle" theme="filled" className="check-circle" /></span>
                    </li>
                    <li>
                      Recent Paystubs
                    <span>Not Verified<Icon type="close-circle" theme="filled" className="close-circle" /></span>
                    </li>
                    <li>
                      Recent Bank Statement
                    <span>Not Verified<Icon type="close-circle" theme="filled" className="close-circle" /></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content4">
              <h2 className="content3-echart-h2" style={{ marginTop: 20 }}>Neighborhood</h2>
              <p className="content3-echart-p1" style={{ marginTop: 40 }}>San Francisco, 94105</p>
              <div>
                {/* <Map google={this.props.google} zoom={14} style={{width:'400px',height:"200px"}}></Map> */}
                <img className="gooleMap" src={require('../../style/imgs/map.jpg')} alt="map" />
              </div>

              <div className="content6-lists">
                <div className="content-title-a">
                  <p className="content3-echart-p1" style={{ marginTop: 40 }}>Housing</p>
                  <p className="content3-echart-p1" style={{ marginTop: 40 }}>Jobs</p>
                </div>

                <div className="content6-cnt">
                  <div className="content6-cnt-left">
                    <p className="right-content-title">Average Appreciation</p>
                    <div id="maine" style={{ width: 400, height: 250, left: -35 }}></div>
                    <p className="content6-p">
                      <span className="content3-span-left"></span>US Average Home Index
                  </p>
                    <p className="content6-p">
                      <span className="content3-span-right" style={{ margin: "0", marginRight: "15px" }}></span>San Francisco Average Home Index
                  </p>
                    <ul className="content6-ul">
                      <li>Median Age
                      <span>74</span>
                      </li>
                      <li>Median Price
                      <span>$1,563,200</span>
                      </li>
                      <li>Appreciation in 12 months
                      <span>7.8%</span>
                      </li>
                      <li>Appreciation in 5 years
                      <span>40.4%</span>
                      </li>
                      <li>Appreciation in 10 years
                      <span>49.3%</span>
                      </li>
                      <li>Property Tax Rate
                      <span>0.681%</span>
                      </li>
                      <li>Homes Owned
                       <span>43.1%</span>
                      </li>
                      <li>Vacancy Rate
                      <span>8.3%</span>
                      </li>
                      <li>Homes Rented
                      <span>48.7%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content6-cnt-right">
                    <div id="mainf" style={{ width: 400, height: 250, left: -35 }}></div>
                    <p className="content6-p">
                      <span className="content6-span-a"></span>Per Capita Personal Income in San Francisco
                  </p>
                    <p className="content6-p">
                      <span className="content6-span-b"></span>Per Capita Personal Income in California
                  </p>
                    <p className="content6-p">
                      <span className="content6-span-c"></span>Per Capita Personal Income in United States
                  </p>
                    <ul className="content6-ul">
                      <li>Income per Capita
                        <span>$85,212</span>
                      </li>
                      <li>Household Income
                        <span>$122,970</span>
                      </li>
                      <li>Unemployment
                        <span>3.5%</span>
                      </li>
                      <li>Job Growth
                        <span>3.85%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content8">
            <h2 className="right-content8-h2">Explore more opportunities</h2>
            <div className="content8-cnt">
              <div className="information">
                <img src={require('../../style/imgs/content-left.jpg')} className="content8-Img" alt="contentLift" />
                <div className="content8-right">
                  <p className="content8-p1">5.25%<span className="content8-span">yield</span></p>
                  <p className="content8-p2">12 months · 85% LTV</p>
                  <p className="content8-p3">338 Spear St Unit 31A</p>
                  <p className="content8-p4">San Francisco, CA 94105</p>
                  <p className="content8-p5">$500,000 total · $350,000 available</p>
                  <div className="portfolio-bottom-div2"><div className="portfolio-bottom"></div></div>
                </div>
              </div>
              <div className="information">
                <img src={require('../../style/imgs/content-left.jpg')} className="content8-Img" alt="contentLift" />
                <div className="content8-right">
                  <p className="content8-p1">5.25%<span className="content8-span">yield</span></p>
                  <p className="content8-p2">12 months · 85% LTV</p>
                  <p className="content8-p3">338 Spear St Unit 31A</p>
                  <p className="content8-p4">San Francisco, CA 94105</p>
                  <p className="content8-p5">$500,000 total · $350,000 available</p>
                  <div className="portfolio-bottom-div2"><div className="portfolio-bottom"></div></div>
                </div>
              </div>
              <div className="information">
                <img src={require('../../style/imgs/content-left.jpg')} className="content8-Img" alt="contentLift" />
                <div className="content8-right">
                  <p className="content8-p1">5.25%<span className="content8-span">yield</span></p>
                  <p className="content8-p2">12 months · 85% LTV</p>
                  <p className="content8-p3">338 Spear St Unit 31A</p>
                  <p className="content8-p4">San Francisco, CA 94105</p>
                  <p className="content8-p5">$500,000 total · $350,000 available</p>
                  <div className="portfolio-bottom-div2"><div className="portfolio-bottom"></div></div>
                </div>
              </div>
              <div className="information">
                <img src={require('../../style/imgs/content-left.jpg')} className="content8-Img" alt="contentLift" />
                <div className="content8-right">
                  <p className="content8-p1">5.25%<span className="content8-span">yield</span></p>
                  <p className="content8-p2">12 months · 85% LTV</p>
                  <p className="content8-p3">338 Spear St Unit 31A</p>
                  <p className="content8-p4">San Francisco, CA 94105</p>
                  <p className="content8-p5">$500,000 total · $350,000 available</p>
                  <div className="portfolio-bottom-div2"><div className="portfolio-bottom"></div></div>
                </div>
              </div>
              <div className="information">
                <img src={require('../../style/imgs/content-left.jpg')} className="content8-Img" alt="contentLift" />
                <div className="content8-right">
                  <p className="content8-p1">5.25%<span className="content8-span">yield</span></p>
                  <p className="content8-p2">12 months · 85% LTV</p>
                  <p className="content8-p3">338 Spear St Unit 31A</p>
                  <p className="content8-p4">San Francisco, CA 94105</p>
                  <p className="content8-p5">$500,000 total · $350,000 available</p>
                  <div className="portfolio-bottom-div2"><div className="portfolio-bottom"></div></div>
                </div>
              </div>
              <div className="information">
                <img src={require('../../style/imgs/content-left.jpg')} className="content8-Img" alt="contentLift" />
                <div className="content8-right">
                  <p className="content8-p1">5.25%<span className="content8-span">yield</span></p>
                  <p className="content8-p2">12 months · 85% LTV</p>
                  <p className="content8-p3">338 Spear St Unit 31A</p>
                  <p className="content8-p4">San Francisco, CA 94105</p>
                  <p className="content8-p5">$500,000 total · $350,000 available</p>
                  <div className="portfolio-bottom-div2"><div className="portfolio-bottom"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export default GoogleApiWrapper({
//   // apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
// })(Opportunities)

export default Opportunities;