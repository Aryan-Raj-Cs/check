import { useDispatch ,useSelector} from "react-redux";
function Button() {
  console.log("button  render")
  const state=useSelector((state)=>state)
  const dispatch = useDispatch()
  const click=()=>{
      console.log("clicked")
      dispatch({type:"INCREASE",payload:state.counter+1})
  }

  return (
    <div className="Button">
     <button onClick={click}>click</button>
    </div>
  );
}

export default Button;
