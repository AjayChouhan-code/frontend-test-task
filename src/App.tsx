import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SEARCH_PAGE } from "./constants/urls";
import SearchPage from "./pages/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={SEARCH_PAGE} element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
