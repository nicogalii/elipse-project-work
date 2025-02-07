import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Customer from "./routes/Customers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
