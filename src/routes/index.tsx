import { Route, Routes } from "react-router-dom";
import { HomePage, RedirectPage } from "../pages";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:urlCode" element={<RedirectPage />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
};
