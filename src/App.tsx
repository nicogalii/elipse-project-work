import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import { AuthProvider } from "./context/AuthProvider";
import Customer from "./routes/Customer";
import Users from "./routes/Users";


function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/dashboard/customers" element={<Customer/>}></Route>
          <Route path="/dashboard/users" element={<Users/>}></Route>
          <Route path="/dashboard/" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
