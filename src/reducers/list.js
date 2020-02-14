const listReducer= (state=[{val:"Auxenta"},{val:7},{val:"Ashan"}],action)=>{
    switch(action.type){
        case "ADD_USER":
            return state.concat([{val:action.text}]);
        default:
            return state;    

    }
}