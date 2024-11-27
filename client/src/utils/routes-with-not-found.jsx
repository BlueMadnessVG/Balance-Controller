import { Route, Routes } from "react-router-dom";

function RoutesWithNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<> NOT FOUND </>} />
    </Routes>
  );
}
export default RoutesWithNotFound;
