
import './App.css';
import App1 from "./component/App1";
import User from "./component/User";
import Homecontainer from "./container/Homecontainer";

function App() {
  return (
    <>
    <p><span class="realistic-marker-highlight">pass data one component to another and get data with props</span></p>
      <App1/>
      <User data = {{name : "Swati Rathore" ,age: 23}}/>
      <p>Desgin for add to cart</p>
      <Homecontainer/>  
    </>
  );
}

export default App;
