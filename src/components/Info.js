import React from 'react'
import {Card} from 'antd'

class Info extends React.Component{

    render(){
        return (
            <Card title="Info页面">
                <div className="home-warp">
                欢迎进入Info页面  动态参数：{this.props.match.params.infoId}
                </div>
            </Card>
        )
    }
}
export default Info;