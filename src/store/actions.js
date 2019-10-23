import {CHANGE_VALUE, ADD_ITEM , DEL_ITEM ,GET_LIST}  from './actionTypes'
import axios from 'axios'

export const changeValueAction = (value)=>({
    type:CHANGE_VALUE,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DEL_ITEM,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}