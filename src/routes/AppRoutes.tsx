import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RedirectPage } from "../pages/RedirectPage";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:shortUrl" element={<RedirectPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
