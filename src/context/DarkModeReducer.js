const DarkModeReducer=(state, action)=>{
    //state is our initial state
    //action will e dispatched
switch (action.type) {//action.type bascially represents our function name
    //which LIGHT, DARK or TOGGLE
    case "LIGHT":return{
darkMode:false
    }
    case "DARK":return{
        darkMode:true
            }
            case "TOGGLE":return{
                darkMode:!state.darkMode
                    }
        
        //break;

    default:
        break;
}
}
export default DarkModeReducer;