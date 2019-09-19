import React from 'react';

class Page4 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            myText:'',
        }
    }
    //获取数据
    getData() {
        fetch('http://localhost:8081/',{
            method:'get'
        }).then(res=>res.text()).then(data => {
            console.log(data);
            this.setState({myText:data});
        })

        //有问题
        // fetch('http://localhost:8081/')
        // .then(function(response) {
        //     return response.text();//.json();
        // })
        // .then(function(myJson) {
        //     this.setState({myText:myJson});
            
        // });
    }


    // 组件渲染前执行
    componentWillMount() {
        this.getData();
    }

    render(){
        return(
            <div>
                <h1>{this.state.myText}</h1>
            </div>
        );
    }
}

export default Page4;
