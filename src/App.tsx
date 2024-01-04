import Root from "./routes/Root";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";

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
