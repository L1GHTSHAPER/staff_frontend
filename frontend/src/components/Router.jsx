import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import { Registration } from "./screens/Registration/index.jsx";
import { Login } from "./screens/Login/index.jsx";
import TicketDetail from "./screens/TicketDetail/TicketDetail.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Registration />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<TicketDetail />} path="/ticket/:id" />

        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
