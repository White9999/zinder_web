import React from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';
import SiderCustom from '../SiderCustom';
import HeaderCustom from '../HeaderCustom';
import { Button } from 'antd';
import Img from '../../style/imgs/img05.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Portfolio extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "red" }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "green" }}
          onClick={onClick}
        />
      );
    }

    const { auth = { data: {} }, responsive = { data: {} } } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed:500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
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
              <Slider {...settings}>
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
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;