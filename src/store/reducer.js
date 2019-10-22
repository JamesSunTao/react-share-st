const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action)=>{  //就是一个方法函数

    if(action.type === 'changeValue'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState       
    }
    if(action.type === 'addItem'){   
        debugger
        state.list.push(state.inputValue)  //push新的内容到列表中去
        state.inputValue = ''
  
    }
    return state
}