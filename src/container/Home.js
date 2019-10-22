import React from 'react'
import { Card } from 'antd'
import {Link ,Route,Switch} from 'react-router-dom'
import Home1 from '../components/Home1'
import Home2 from '../components/Home2'
import store from '../store'

class Home extends React.Component{
    constructor(props){
         super(props)
         console.log(store.getState())
    }

    render(){
        return (
            <Card title="home页面">
                <h1>首页</h1>
                <div className="home-warp">
                   欢迎进入主页面{this.props.match.path}
                </div>
                <ul>
                   <li>
                       <Link  to="/">home1</Link>
                   </li>
                   <li>
                       <Link  to="/home/home2">home2</Link>
                   </li>
                </ul> 
               <div>
                    <Route path='/' exact component={Home1}/>
                    <Route path='/home1' exact component={Home1}/>                  
                    <Route path='/home/home2' component={Home2}/>  
               </div>
            </Card>
           
        )
    }
}

export default Home;