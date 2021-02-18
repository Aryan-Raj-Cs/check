import {useSelector} from "react-redux"
function Header() {
    console.log("header render")
    // const state=useSelector((state)=>state)
  return (
    <div className="App">
    <h1>Header</h1>
    </div>
  );
}

export default Header;
