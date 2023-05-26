import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element ={<Home/>}/>
          <Route path="/:id" element ={<Detail/>}/>
          <Route path ="/add" element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
