import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Video from "./pages/Video";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="video">
            <Route path=":id" element={<Video />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
