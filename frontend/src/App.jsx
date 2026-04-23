import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:name" element={<CompanyDetail />} />
    </Routes>
  );
}

export default App;