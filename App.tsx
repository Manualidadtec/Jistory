import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Literature from "./pages/Literature";
import Organization from "./pages/Organization";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/literature" element={<Literature />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
