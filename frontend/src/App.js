import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
