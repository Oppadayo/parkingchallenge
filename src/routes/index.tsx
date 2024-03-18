import { History } from "../components/History";
import { Main } from "../components/Main";
import { Route, Routes } from "react-router-dom";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/history/:plate" element={<History />} />
    </Routes>
  );
}
