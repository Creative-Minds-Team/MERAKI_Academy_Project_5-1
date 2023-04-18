import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register";
import Login from "./components/Login/Login";
import CreatePost from "./components/CreatePost";
import CreateCraft from "./components/CreateCrafts";
import CreateOrder from "./components/CreateOrder";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> </h1>
      </header>
    <Navbar></Navbar>

    <CreateOrder></CreateOrder>

      <Routes>
      <Route path="/Register" element={<Register />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
