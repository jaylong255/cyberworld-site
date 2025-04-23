import Root from "./routes/Root";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page1" element={<div>Page 1</div>} />
        <Route path="/page2" element={<div>Page 2</div>} />
        <Route path="/404" element={<div>404 Page Not Found</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
}

export default App;
