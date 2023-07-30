import { Route, Routes } from "react-router-dom";
import { SignIn } from "../Pages/Auth/SignIn";
import NotFound from "../Pages/404/NotFound";
import { Register } from "../Pages/Auth/Register";
import { Board } from "../Pages/Board";

const RouterProvider = () => {
 
  return (
  <Routes>
      <Route path="/" element={<SignIn/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/board" element={<Board/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  );


}

export default RouterProvider;