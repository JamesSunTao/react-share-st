import React from 'react'
import {Card} from 'antd'
import {Link ,Route,Switch} from 'react-router-dom'
import Info from '../components/Info'

class About1 extends React.Component{

    render(){
        return (
            <Card title="Home1页面">
                <div className="home-warp">
                   欢迎进入About1页面
                </div>  
            </Card>
        )
    }
}

export default About1;