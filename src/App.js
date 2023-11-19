import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} exact />
        <Route path="/chatting" Component={Chatpage} />
      </Routes>
    </div>
  );
}

export default App;
