import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import { AuthProvider } from "./context/AuthProvider";
import Customer from "./routes/Customer";
import Users from "./routes/Users";
import Shipment from "./routes/Shipment";
import NewUser from "./routes/NewUser";
import Layout from "./leyout/Layout";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Layout />}>
              <Route path="/dashboard/shipments" element={<Shipment />}></Route>
              <Route path="/dashboard/customers" element={<Customer />}></Route>
              <Route path="/dashboard/users" element={<Users />}></Route>
              <Route path="/dashboard/newuser" element={<NewUser />}></Route>
              <Route index element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
