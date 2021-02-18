import logo from './logo.svg';
import './App.css';
import Button from './component/Button'
import { Provider } from "react-redux";
import store from "./component/Store";
import Header from "./component/Header";
import Counter from "./component/Counter";
import Home from "./component/Check";
import Uncontrolled from "./component/Uncontrolled";
import Arrow from "./component/Arrow";
function App() {
  console.log("app render")
  return (
    <div className="App">
    
     {/* <Provider store={store}>
      <Header />
      <Button/>
      <Counter/>
    </Provider> */}
    {/* <Home/> */}
    {/* <Uncontrolled/> */}
    <Arrow/>
    </div>
  );
}

export default App;
