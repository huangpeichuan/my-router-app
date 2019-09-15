import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
            <div>
                <div>This is Home!</div>
            </div>
            {/* 使用链接组件 */}
            <Link to="/Page1/" activeStyle={{color: 'red'}}  >
                点击跳转到Page1页面
            </Link>
            <Link to="/Page2/" activeClassName="active" >
                <div>点击跳转到Page2页面</div>
            </Link>
            <Link to="/Page3/" style={{color:'blue'}} >
                <div>点击跳转到Page3页面</div>
            </Link>
            </div>
        );
    }
}

export default Home;