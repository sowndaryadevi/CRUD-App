import React from "react";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Read from "./Components/Read";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useNavigate } from "react-router-dom";
function App() {

  return (
    <div className="main">
    <h2>CRUD Operation</h2> 
   
      <Routes>
        <Route exact path="/create" element={<Create />}/>
        <Route exact path="/update" element={<Update/>}/>
        <Route exact path="/read" element={<Read/>}/>
      </Routes>
    
    </div>
  );

}

export default App;
