import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';


class Portfolio extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom  first="面包屑" />
                <div>第二详情页</div>
            </div>
        )
    }
}

export default Portfolio;