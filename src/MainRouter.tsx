import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SignupPage1 from "./page/SignupPage1";
import SignupPage2 from "./page/SignupPage2";
import SignupPage3 from "./page/SignupPage3";
import SignupPage4 from "./page/SignupPage4";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup1" element={<SignupPage1 />} />
        <Route path="/Signup2" element={<SignupPage2 />} />
        <Route path="/Signup3" element={<SignupPage3 />} />
        <Route path="/Signup4" element={<SignupPage4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
