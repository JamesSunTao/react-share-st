import React from 'react'
import {Card} from 'antd'
import {Link ,Route,Switch} from 'react-router-dom'
import AboutInfo from '../components/AboutInfo'

class About extends React.Component{

    render(){
        return (
            <Card title="about页面">
                <h1>首页</h1>
                <div className="home-warp">
                欢迎进入About页面
                </div>
                <ul>
                   <li>
                       <Link  to={{pathname:'/aboutInfo',query:{aboutId:'112334'}}}>about1</Link>
                   </li>
                   <li>
                      <Link   to={{pathname:'/aboutInfo',query:{aboutId:'22223334'}}}>about2</Link>
                   </li>
                </ul> 
               <div>
                  <Route path="/aboutInfo" component={AboutInfo}></Route>
               </div>
            </Card>
        )
    }
}

export default About;