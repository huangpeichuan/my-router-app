import React from 'react';
import {Layout,Icon,Menu} from 'antd';
// import {Layout,Icon} from 'antd';
// import LeftMenu from './menu';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from '../Home';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
const {Header,Content,Footer,Sider} = Layout;
const { SubMenu } = Menu;

//使用路由需要注意：Link组件和route组件必须被同一个Router包含
class Layouts extends React.Component {
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render() {
        return (
            <Router>
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    {/* 左侧导航栏 */}
                    {/* <Router>
                        <LeftMenu />
                    </Router> */}
                    {/* <Router> */}
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
                    {/* </Router> */}
                </Sider>
                {/* 内容和头部 */}
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggleCollapsed}
                        />
                        {/* <Button type="primary" onClick={this.toggleCollapsed}
                         style={{ marginBottom: 16,marginLeft:'18%' }}>
                            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </Button> */}
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        {/* <Router> */}
                            <div>
                                <Route path="/" component={Home} />
                                <Route path="/Page1/" component={Page1} />
                                <Route path="/Page2/" component={Page2} />
                                <Route path="/Page3/" component={Page3} />
                            </div>
                        {/* </Router> */}
                    ...
                    <br />
                    Really
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    long
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    ...
                    <br />
                    </div>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
            </Layout>
                    </Router>
        );
    }
}
export default Layouts;