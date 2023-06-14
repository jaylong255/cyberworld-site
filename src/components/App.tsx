import { Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Root from "routes/Root";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
