import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
const { Header } = Layout;

class HeaderCustom extends Component {

    render() {
        return (
            <Header className="custom-theme header" style={{background:"#f0f2f5"}} >
            <h2 style={{paddingLeft:"20px",fontWeight:"bold"}}>Investment</h2>
            </Header>
        )
    }
}

export default withRouter(connectAlita(['responsive'])(HeaderCustom));
