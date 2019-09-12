import React from 'react';
import {Menu,Icon} from 'antd';
// import {BrowserRouter as Router,Link} from 'react-router-dom';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;

class LeftMenu extends React.Component {

    render() {
        return (
            // <Router>
            <div>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']} >
                    <Menu.Item key="1">
                        <Link to="/Page1/"  >
                            <Icon type="user" />
                            <span className="nav-text">nav 1</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/Page2/"  >
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/Page3/"  >
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="bar-chart" />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                    <SubMenu  key="sub1" title={
                        <span>
                            <Icon type="mail" />
                            <span>Navigation One</span>
                        </span>
                    }>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="5">
                        <Icon type="cloud-o" />
                        <span className="nav-text">nav 5</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="appstore-o" />
                        <span className="nav-text">nav 6</span>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Icon type="team" />
                        <span className="nav-text">nav 7</span>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Icon type="shop" />
                        <span className="nav-text">nav 8</span>
                    </Menu.Item>
                </Menu>
            </div>
            // </Router>
        );
    }
}
export default LeftMenu;