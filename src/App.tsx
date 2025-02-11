import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import { AuthProvider } from "./context/AuthProvider";
import Customer from "./routes/Customer";
import Users from "./routes/Users";
import Shipment from "./routes/Shipment";
import NewUser from "./routes/NewUser";
import Layout from "./layout/Layout";
import Delete from "./routes/Delete";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="shipments" element={<Shipment />}></Route>
              <Route path="customers" element={<Customer />}></Route>
              <Route path="users" element={<Users />}></Route>
              <Route path="newuser" element={<NewUser />}></Route>
            </Route>
            <Route path="/userdelete" element={<Delete />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
