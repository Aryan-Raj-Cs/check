import {useSelector} from "react-redux";

function Counter() {
    console.log("counter render")
    
  const state = useSelector((state)=>{
      return state;
  })
  console.log(state)
    return (
      <div>
       {state.counter}
      </div>
    );
  }
  
  export default Counter;
  