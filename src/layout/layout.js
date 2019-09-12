import React from 'react';
// import {Layout,Icon,Menu} from 'antd';
import {Layout,Icon} from 'antd';
import LeftMenu from './menu';
const {Header,Content,Footer,Sider} = Layout;
// const { SubMenu } = Menu;

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
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    {/* 左侧导航栏 */}
                    <LeftMenu />
                    {/* <div className="logo" /> */}
                        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span className="nav-text">nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span className="nav-text">nav 3</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="bar-chart" />
                                <span className="nav-text">nav 4</span>
                            </Menu.Item>
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
                        </Menu> */}
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
                        content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
            </Layout>
        );
    }
}
export default Layouts;