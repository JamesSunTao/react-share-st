import { message } from 'antd';
import { CHANGE_VALUE , ADD_ITEM , DEL_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputValue : '',
    list:[
        
    ]
}
export default (state = defaultState,action)=>{  //就是一个方法函数

    if(action.type === CHANGE_VALUE){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState       
    }
    if(action.type === ADD_ITEM){    
        if (state.inputValue) {
            state.list.unshift(state.inputValue)  //push新的内容到列表中去
            state.inputValue = ''
        }else{
            message.error('This is an error message');
        }     
    }
    if(action.type === DEL_ITEM){   
        let newState = JSON.parse(JSON.stringify(state))        
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState 
    }

    if(action.type === GET_LIST){   
        let newState = JSON.parse(JSON.stringify(state))        
        newState.list = action.data.data.list;  //push新的内容到列表中去
        return newState 
    }
    return state
}