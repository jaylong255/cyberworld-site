import { Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Page from "routes/Page";
import Root from "routes/Root";
import Article from "./Article";
import { useThemeProps } from "@mui/material";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article" Component={Article} />
      </Route>
    </Routes>
  );
}

export default App;
