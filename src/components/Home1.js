import React from 'react'
import {Card} from 'antd'
import {Link ,Route,Switch} from 'react-router-dom'
import Info from '../components/Info'

class Home1 extends React.Component{

    render(){
        return (
            <Card title="Home1页面">
                <div className="home-warp">
                欢迎进入Home1页面
                    <Link to="/info/test-id">嵌套路由1</Link> <br/>
                    <Link to="/info/456">嵌套路由2</Link>
                </div>
                <Route path="/info/:infoId" component={Info}></Route>
            </Card>
        )
    }
}

export default Home1;