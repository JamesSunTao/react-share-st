import React from 'react'
import {Card ,Input ,Button ,List} from 'antd'
import store from '../store'



class Redux extends React.Component{
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state = store.getState();
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    changeItem = (e) =>{
       let action = {
           type:'changeValue',  
           value:e.target.value         
       }
       store.dispatch(action);
    }
    addItem = () =>{
        let action = {
            type:'addItem',                   
        }
        store.dispatch(action);
    }
    storeChange=()=>{
        this.setState(store.getState())
    }

    render(){
        return (
            <Card title="Redux页面">
                <div style={{margin:'10px'}}>
                    <div>
                        <Input placeholder={this.state.inputValue} 
                        value = {this.state.inputValue}
                        style={{ width:'250px', marginRight:'10px'}} 
                        onChange = {this.changeItem}
                        
                        />
                        <Button type="primary" onClick={this.addItem}>增加</Button>
                    </div>
                    <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>
                </div>
            </Card>
        )
    }
}
export default Redux;