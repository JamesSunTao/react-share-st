import React from 'react'
import store from '../store'
import {changeValueAction,addItemAction ,deleteItemAction,getTodoList} from '../store/actions'
import ReactUI from '../components/ReduxUi'
// import axios from 'axios'

class Redux extends React.Component{
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state = store.getState();
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    componentDidMount(){
        // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{    
        //     const data = res.data
        //     const action = getListAction(data)
        //     store.dispatch(action)
        // })
        const action = getTodoList()
        store.dispatch(action)
    }


    changeItem = (e) =>{
       const action = changeValueAction(e.target.value)
       store.dispatch(action);
    }
    addItem = () =>{
        const action = addItemAction()
        store.dispatch(action);
    }
    storeChange=()=>{
        this.setState(store.getState())
    }
    deleteItem=(index)=>{
        const action = deleteItemAction(index)
        store.dispatch(action);
    }
    render(){
        return (
            <ReactUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeItem={this.changeItem}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
            /> 
        )
    }
}
export default Redux;