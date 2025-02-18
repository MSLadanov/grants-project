import "./global.scss";
import { Routes, Route, Navigate } from "react-router";
import Grants from "./pages/Grants/Grants";
import GrantPage from "./pages/GrantPage/GrantPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="grants" element={<Grants />}>
          <Route path=":grantId" element={<GrantPage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="grants" replace={true} />} />
      </Routes>
    </>
  );
}

export default App;
