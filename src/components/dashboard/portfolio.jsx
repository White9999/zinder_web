import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imgs from '../../style/imgs/content-left.jpg'
import { Link } from 'react-router-dom'

class Portfolio extends React.Component {

  render() {
    return (
      <div className="gutter-example button-demo portfolio-body">
        <div className="portfolio-bg">
          <h2 className="portfolio-h2">My Investment</h2>
          <p className="portfolio-title-1">ACTIVE</p>
          <div className="portfolio-cnt">
            <Link to="/opportunities">
              <div className="portfolio-cnt-list">
                <img className="portfolio-cnt-1" src={Imgs} alt="" />
                <div className="portfolio-cnt-2">
                  <p className="portfolio-cnt1-title"><span>$19,400</span><span>2.00%APR</span></p>
                  <p className="portfolio-cnt1-p">102 South Street #302,</p>
                  <p className="portfolio-cnt1-p2" >NY 14850</p>
                  <p className="portfolio-cnt1-p3">Fully invested <span>11.00%LTV</span></p>
                </div>
              </div>
            </Link>
            <Link to="/opportunities">
              <div className="portfolio-cnt-list">
                <img className="portfolio-cnt-1" src={Imgs} alt="" />
                <div className="portfolio-cnt-2">
                  <p className="portfolio-cnt1-title"><span>$4,000</span><span>3.50%APR</span></p>
                  <p className="portfolio-cnt1-p">102 South Street #302,</p>
                  <p className="portfolio-cnt1-p2" >NY 14850</p>
                  <p className="portfolio-cnt1-p3">Fully invested <span>20.00%LTV</span></p>
                </div>
              </div>
            </Link>
          </div>
          <p className="portfolio-title-2">WAITLSTED</p>
          <div className="portfolio-cnt">
            <Link to="/opportunities">
              <div className="portfolio-cnt-list">
                <img className="portfolio-cnt-1" src={Imgs} alt="" />
                <div className="portfolio-cnt-2">
                  <p className="portfolio-cnt1-title"><span>$14,000</span><span>3.50%APR</span></p>
                  <p className="portfolio-cnt1-p">102 South Street #302,</p>
                  <p className="portfolio-cnt1-p2" >NY 14850</p>
                  <p className="portfolio-cnt1-p3">Fully invested <span>20.00%LTV</span></p>
                </div>
              </div>
            </Link>
          </div>
          <h2 className="portfolio-h2-2">Analytics</h2>
          <div className="portfolio-cont-2">
            <div className="portfolio-conts-2">
              <h3 className="portfolio-conts-title">Expected Monthly Investment Income</h3>
              <h2 className="portfolio-conts-title-h2">$32.72</h2>
              <p><span className="portfolio-cnt2-span">$18.55</span> paid out so far this month</p>
            </div>
            <div className="portfolio-conts-3">
              <div><h2>$99.70m</h2><p>Total Portfolio</p></div>
              <div><h2>$19.90m</h2><p>Total Invested</p></div>
            </div>
          </div>
          <h2 className="portfolio-h2-2">Investments</h2>
          <div className="portfolio-cnt3">
            <ul className="portfolio-cnt3-ul">
              <li className="portfolio-cnt3-ul-li">
                Total Value<div className="portfolio-cnt3-ul-li-cnt">$19.90k<p className="portfolio-cnt3-ul-li-cnt-p">+$19.90k</p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Total Earnings This Month<div className="portfolio-cnt3-ul-li-cnt">$18.55<p className="portfolio-cnt3-ul-li-cnt-p">0.093%</p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Avg Size<div className="portfolio-cnt3-ul-li-cnt">$19.90k<p className="portfolio-cnt3-ul-li-cnt-p"></p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Total Earnings This Year<div className="portfolio-cnt3-ul-li-cnt">$132.45<p className="portfolio-cnt3-ul-li-cnt-p">0.666%</p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Avg Yield<div className="portfolio-cnt3-ul-li-cnt">2.000%<p className="portfolio-cnt3-ul-li-cnt-p"></p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Future Earning Portential<div className="portfolio-cnt3-ul-li-cnt">$2,278.10<p className="portfolio-cnt3-ul-li-cnt-p"></p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Weighted Avg<div className="portfolio-cnt3-ul-li-cnt">2.000%<p className="portfolio-cnt3-ul-li-cnt-p"></p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Median Commitment Time Left<div className="portfolio-cnt3-ul-li-cnt">69 Months<p className="portfolio-cnt3-ul-li-cnt-p"></p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Total Earnings Today<div className="portfolio-cnt3-ul-li-cnt">$1.09<p className="portfolio-cnt3-ul-li-cnt-p">0.005%</p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Earliest Liquidity Event<div className="portfolio-cnt3-ul-li-cnt">68 Months<p className="portfolio-cnt3-ul-li-cnt-p"></p></div>
              </li>
              <li className="portfolio-cnt3-ul-li">
                Total Earnings This Month<div className="portfolio-cnt3-ul-li-cnt">$18.55<p className="portfolio-cnt3-ul-li-cnt-p">0.093%</p></div>
              </li>
            </ul>
          </div>
          <h2 className="portfolio-h2-2">Cash</h2>
          <ul className="portfolio-cont4-ul">
            <li className="portfolio-cont4-ul-li">
              <div>Cash Balance<p className="portfolio-cont4-ul-li-ct-p">$97.25m <span className="portfolio-cont4-ul-li-ct-p-span">+$1.09</span></p></div>
              <div className="portfolio-cont4-ul-li-ct-right">Locked Cash<p className="portfolio-cont4-ul-li-ct-p">$2.43m <span className="portfolio-cont4-ul-li-ct-p-span"></span></p></div>
            </li>
            <li className="portfolio-cont4-ul-li">
              <div>Margin Balance<p className="portfolio-cont4-ul-li-ct-p">N/A<span className="portfolio-cont4-ul-li-ct-p-span"></span></p></div>
              <div className="portfolio-cont4-ul-li-ct-right">Total Cash<p className="portfolio-cont4-ul-li-ct-p">$99.68m <span className="portfolio-cont4-ul-li-ct-p-span">+$1.09</span></p></div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Portfolio;