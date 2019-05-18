import React from 'react';
import { Row, Col, Card, Popconfirm, message, Button, Pagination, Icon } from 'antd';
import { Link } from 'react-router-dom'
import Img from '../../style/imgs/img05.jpg'
function confirm() {
  message.info('Clicked on Yes.');
}
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}
class Dashboard extends React.Component {
  render() {
    const text = (
      <div>asdsad</div>
    )
    return (
      <div className="gutter-example button-demo">
        {/* 暂时为默认显示页 */}
        <div>
          <p><span className="title-spanA">Selected</span><span className="title-span">All</span><span className="title-span">Favorites</span>
            <Popconfirm
              icon={null}
              className="filter-button"
              placement="bottomRight"
              title={text}
              onConfirm={confirm}
              cancelText="Clear"
              okText="Apply"
            >
              <Button>filter</Button>
            </Popconfirm></p>
        </div>
        <Row gutter={10}>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Link to="/portfolio">
                  <div className="content-border">
                    <div className="investment-content-img">
                      <img className="home-img" src={Img} alt="img" />
                    </div>
                    <div className="lick-icon">
                      <Icon type="heart" />
                    </div>
                    <div className="bottom-content">
                      <p className="h2-title">+5.25%<span className="span-title">yield</span></p>
                      <p className="title-content2">12 months · 85% LTV</p>
                      <p className="content-title">Loft Style Condo in San Francisco</p>
                      <div className="content-map">
                        <div className="map-center">
                          <img className="map-img" src={Img} alt="map" />
                          <ul className="map-ul">
                            <li className="li-1">338 Spear St Unit 31A</li>
                            <li className="li-2">San Francisco, CA 94105</li>
                          </ul>
                        </div>
                        <Icon className="go-icon" type="right" />
                      </div>
                      <div className="mannay-div">
                        <span>$500,000 total</span>
                        <span>$350,000 available</span>
                      </div>
                    </div>
                    <div className="bottom-div">
                      <div className="bottom"></div>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Link to="/portfolio">
                  <div className="content-border">
                    <div className="investment-content-img">
                      <img className="home-img" src={Img} alt="img" />
                    </div>
                    <div className="lick-icon">
                      <Icon type="heart" />
                    </div>
                    <div className="bottom-content">
                      <p className="h2-title">+5.25%<span className="span-title">yield</span></p>
                      <p className="title-content2">12 months · 85% LTV</p>
                      <p className="content-title">Loft Style Condo in San Francisco</p>
                      <div className="content-map">
                        <div className="map-center">
                          <img className="map-img" src={Img} alt="map" />
                          <ul className="map-ul">
                            <li className="li-1">338 Spear St Unit 31A</li>
                            <li className="li-2">San Francisco, CA 94105</li>
                          </ul>
                        </div>
                        <Icon className="go-icon" type="right" />
                      </div>
                      <div className="mannay-div">
                        <span>$500,000 total</span>
                        <span>$350,000 available</span>
                      </div>
                    </div>
                    <div className="bottom-div">
                      <div className="bottom"></div>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Link to="/portfolio">
                  <div className="content-border">
                    <div className="investment-content-img">
                      <img className="home-img" src={Img} alt="img" />
                    </div>
                    <div className="lick-icon">
                      <Icon type="heart" />
                    </div>
                    <div className="bottom-content">
                      <p className="h2-title">+5.25%<span className="span-title">yield</span></p>
                      <p className="title-content2">12 months · 85% LTV</p>
                      <p className="content-title">Loft Style Condo in San Francisco</p>
                      <div className="content-map">
                        <div className="map-center">
                          <img className="map-img" src={Img} alt="map" />
                          <ul className="map-ul">
                            <li className="li-1">338 Spear St Unit 31A</li>
                            <li className="li-2">San Francisco, CA 94105</li>
                          </ul>
                        </div>
                        <Icon className="go-icon" type="right" />
                      </div>
                      <div className="mannay-div">
                        <span>$500,000 total</span>
                        <span>$350,000 available</span>
                      </div>
                    </div>
                    <div className="bottom-div">
                      <div className="bottom"></div>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Link to="/portfolio">
                  <div className="content-border">
                    <div className="investment-content-img">
                      <img className="home-img" src={Img} alt="img" />
                    </div>
                    <div className="lick-icon">
                      <Icon type="heart" />
                    </div>
                    <div className="bottom-content">
                      <p className="h2-title">+5.25%<span className="span-title">yield</span></p>
                      <p className="title-content2">12 months · 85% LTV</p>
                      <p className="content-title">Loft Style Condo in San Francisco</p>
                      <div className="content-map">
                        <div className="map-center">
                          <img className="map-img" src={Img} alt="map" />
                          <ul className="map-ul">
                            <li className="li-1">338 Spear St Unit 31A</li>
                            <li className="li-2">San Francisco, CA 94105</li>
                          </ul>
                        </div>
                        <Icon className="go-icon" type="right" />
                      </div>
                      <div className="mannay-div">
                        <span>$500,000 total</span>
                        <span>$350,000 available</span>
                      </div>
                    </div>
                    <div className="bottom-div">
                      <div className="bottom"></div>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Link to="/portfolio">
                  <div className="content-border">
                    <div className="investment-content-img">
                      <img className="home-img" src={Img} alt="img" />
                    </div>
                    <div className="lick-icon">
                      <Icon type="heart" />
                    </div>
                    <div className="bottom-content">
                      <p className="h2-title">+5.25%<span className="span-title">yield</span></p>
                      <p className="title-content2">12 months · 85% LTV</p>
                      <p className="content-title">Loft Style Condo in San Francisco</p>
                      <div className="content-map">
                        <div className="map-center">
                          <img className="map-img" src={Img} alt="map" />
                          <ul className="map-ul">
                            <li className="li-1">338 Spear St Unit 31A</li>
                            <li className="li-2">San Francisco, CA 94105</li>
                          </ul>
                        </div>
                        <Icon className="go-icon" type="right" />
                      </div>
                      <div className="mannay-div">
                        <span>$500,000 total</span>
                        <span>$350,000 available</span>
                      </div>
                    </div>
                    <div className="bottom-div">
                      <div className="bottom"></div>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Link to="/portfolio">
                  <div className="content-border">
                    <div className="investment-content-img">
                      <img className="home-img" src={Img} alt="img" />
                    </div>
                    <div className="lick-icon">
                      <Icon type="heart" />
                    </div>
                    <div className="bottom-content">
                      <p className="h2-title">+5.25%<span className="span-title">yield</span></p>
                      <p className="title-content2">12 months · 85% LTV</p>
                      <p className="content-title">Loft Style Condo in San Francisco</p>
                      <div className="content-map">
                        <div className="map-center">
                          <img className="map-img" src={Img} alt="map" />
                          <ul className="map-ul">
                            <li className="li-1">338 Spear St Unit 31A</li>
                            <li className="li-2">San Francisco, CA 94105</li>
                          </ul>
                        </div>
                        <Icon className="go-icon" type="right" />
                      </div>
                      <div className="mannay-div">
                        <span>$500,000 total</span>
                        <span>$350,000 available</span>
                      </div>
                    </div>
                    <div className="bottom-div">
                      <div className="bottom"></div>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          </Col>
        </Row>
        {/* <Pagination className="Pagination-body" showQuickJumper defaultCurrent={1} total={500} onChange={onChange}/> */}
      </div>
    )
  }
}

export default Dashboard;