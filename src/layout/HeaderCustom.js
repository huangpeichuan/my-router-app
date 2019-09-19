import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge } from 'antd';
import avater from '../style/img/A1.jpg';
import screenfull from 'screenfull';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class HeaderCustom extends Component {

    screenFull1 = () => {console.info(screenfull);
        if (screenfull.isEnabled) {
            screenfull.toggle();
            // document.documentElement.requestFullscreen();
        }

    };

    menuClick = e => {
        console.log(e);
        e.key === 'logout' && this.logout();
    };

    render() {

        return (
            <Header  className="custom-theme header" >
                <Menu theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    onClick={this.menuClick}
                >
                    <Menu.Item key="full" onClick={this.screenFull} >
                        <Icon type="arrows-alt" title="全屏" onClick={this.screenFull1} style={{ fontSize: '18px'}}  />
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Badge count={11} overflowCount={20} >
                            <Icon type="notification" title="通知" style={{ fontSize: '20px'}} />
                        </Badge>
                    </Menu.Item>

                    <SubMenu title={<span className="avatar"><img src={avater} alt="头像" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="用户中心">
                            {/* <Menu.Item key="setting:1">你好 - {this.props.user.userName}</Menu.Item> */}
                            <Menu.Item key="setting:1">你好 - 系统管理员</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                            <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:4">系统设置</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}

export default HeaderCustom;