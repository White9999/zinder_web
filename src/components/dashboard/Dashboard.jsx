import React from 'react';
import { Row, Col, Card, Popconfirm, message, Modal , Button } from 'antd';
function confirm() {
    message.info('Clicked on Yes.');
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
                    <p><span>Selected</span><span>All</span><span>Favorites</span>
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
                                <div className="content-border">
                                    <div className="investment-content-img"></div>
                                    <div></div>
                                </div>
                            </Card>
                        </div>
            
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="content-border">

                                </div>
                            </Card>
                        </div>
                 
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="content-border">

                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="content-border">

                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="content-border">

                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="content-border">

                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;