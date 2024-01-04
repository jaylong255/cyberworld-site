import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import Home from "../routes/Home";
import Root from "../routes/Root";
import Contact from "../routes/Contact";



function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
  );
}

export default App;
