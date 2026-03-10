import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Calendar from "./Pages/Calendar";

function App() {
  const [user, setUser] = useState("Philip");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Dashboard" user={user}>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/calendar"
          element={
            <Layout title="Calendar" user={user}>
              <Calendar />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
