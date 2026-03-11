import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Calendar from "./Pages/Calendar";
import Instructors from "./Pages/Instructors";

function App() {
  const [user, setUser] = useState("Philip");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Dashboard"
          element={
            <Layout title="Dashboard" user={user}>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/Calendar"
          element={
            <Layout title="Calendar" user={user}>
              <Calendar />
            </Layout>
          }
        />
        <Route
          path="/Instructors"
          element={
            <Layout title="Instructors" user={user}>
              <Instructors />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
