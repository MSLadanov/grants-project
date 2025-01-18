import "./App.css";
import { Routes, Route } from "react-router";
import Grants from "./pages/Grants/Grants";
import GrantPage from "./pages/GrantPage/GrantPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="grants" element={<Grants />}>
          <Route path=":grantId" element={<GrantPage />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
