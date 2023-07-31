
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../Pages/Auth/SignIn";
import NotFound from "../Pages/404/NotFound";
import { Register } from "../Pages/Auth/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../Layouts/Layout";


const RouterProvider = () => {
 
  return (
  <Routes>
      <Route path="/login" element={<SignIn/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/dashboard" element={<ProtectedRoute page={<Layout><Dashboard /></Layout>}/>}/>
      <Route path="/" element={<ProtectedRoute page={<Layout><Dashboard /></Layout>}/>}/>      
      <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  );
}

export default RouterProvider;