import React from 'react';
// import {Layout,Icon,Menu} from 'antd';
import {Layout} from 'antd';
import LeftMenu from './menu';
import HeaderCustom from './HeaderCustom';
import DocumentTitle from 'react-document-title';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from '../Home';
import Page1 from '../Page1';
import Page2 from '../Page2';
// import Page3 from '../Page3';
import Gallery from '../ui/Gallery';
const {Content,Footer,Sider} = Layout;
// const { SubMenu } = Menu;

//使用路由需要注意：Link组件和route组件必须被同一个Router包含
class Layouts extends React.Component {
    // state = {
    //     collapsed: false,
    // };
    // toggleCollapsed = () => {
    //     this.setState({
    //       collapsed: !this.state.collapsed,
    //     });
    //   };

    render() {
        return (
        <Router>
            <DocumentTitle>   
            <Layout style={{height:'100%'}}>
                <Sider style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    // background:'#313653',
                }}>
                {/* 左侧菜单 */}
                <LeftMenu  />
                </Sider>
                {/* 内容和头部 */}
                <Layout style={{ marginLeft: 200 }}>
                    <HeaderCustom />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, textAlign: 'center' }}>
                        {/* <Router> */}
                            <div>
                                <Route path="/" component={Home} />
                                <Route path="/Page1/" component={Page1} />
                                <Route path="/Page2/" component={Page2} />
                                <Route path="/Gallery/" component={Gallery} />
                            </div>
                        {/* </Router> */}
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
            </DocumentTitle>
        </Router>
        );
    }
}
export default Layouts;