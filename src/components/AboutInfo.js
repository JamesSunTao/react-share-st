import React from 'react'
import {Card} from 'antd'

class AboutInfo extends React.Component{

    render(){
        return (
            <Card title="AboutInfo页面">
                <div className="home-warp">
                    <ul>
                        <li>传参方式：query</li>
                        <li>动态参数：{this.props.location.query.aboutId}</li>                       
                    </ul>     
                </div>
            </Card>
        )
    }
}
export default AboutInfo;