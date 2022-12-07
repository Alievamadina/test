import "./App.css";
import Test from "./components/Test";
import TestItem from "./components/Question";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Save from "./components/Save";
import "./components/Test.css";


function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />}></Route>
          <Route path="test" element={<Save />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
