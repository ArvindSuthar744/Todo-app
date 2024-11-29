import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddUser from "./AddUser";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import View from "./View";
import Edit from "./Edit";

// npm i react-router-dom
// npm i bootstrap react-bootstrap
// npm i -g json-server  (anyname.json)
// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
// json-server --watch anyname.json --port 5000

function App() {
  return (
    <>
      <div className="app">
        <h1>Routing and JSON</h1>

        {/* <a href="xyz.php?xyz=1">View</a> */}

        <BrowserRouter>
          <Link to="/" className="btn btn-info">Home</Link>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddUser />}></Route>
            <Route path="/view/:viewId" element={<View />}></Route>
            <Route path="/edit/:editId" element={<Edit />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
