const cnt={counter:0}

const Reducers =(state=cnt,action)=>{
    switch(action.type){
        case "INCREASE":
            return {
                ...state,
                counter:action.payload
            }



        default:
           return state;
    }

}

export default Reducers