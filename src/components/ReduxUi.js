import React, { Component } from 'react'
import {Card ,Input ,Button ,List} from 'antd'


// 无状态组件
const ReduxUI = (props) =>{
    return (<Card title="Redux页面">
                <div style={{margin:'10px'}}>
                    <div>
                        <Input placeholder="请输入内容"
                        value = {props.inputValue}
                        style={{ width:'250px', marginRight:'10px'}} 
                        onChange = {props.changeItem}
                        
                        />
                        <Button type="primary" onClick={props.addItem}>增加</Button>
                    </div>
                    <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={props.list}                            
                        renderItem={(item,index)=>(<List.Item
                            actions={[<a key="list-loadmore-edit" onClick = {()=>{props.deleteItem(index)}}>delete</a>]}>
                            
                            {item}
                            
                            </List.Item>)}
                    />    
                </div>
                </div>
            </Card>);
    
}

// class ReduxUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (<Card title="Redux页面">
//                     <div style={{margin:'10px'}}>
//                         <div>
//                             <Input placeholder="请输入内容"
//                             value = {this.props.inputValue}
//                             style={{ width:'250px', marginRight:'10px'}} 
//                             onChange = {this.props.changeItem}
                            
//                             />
//                             <Button type="primary" onClick={this.props.addItem}>增加</Button>
//                         </div>
//                         <div style={{margin:'10px',width:'300px'}}>
//                         <List
//                             bordered
//                             dataSource={this.props.list}                            
//                             renderItem={(item,index)=>(<List.Item
//                                 actions={[<a key="list-loadmore-edit" onClick = {()=>{this.props.deleteItem(index)}}>delete</a>]}>
                                
//                                 {item}
                                
//                                 </List.Item>)}
//                         />    
//                     </div>
//                     </div>
//                 </Card>);
//     }
// }
 
export default ReduxUI;