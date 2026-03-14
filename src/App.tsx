import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgotPassword";
import Verification from "./Pages/verification";
import SetPassword from "./Pages/SetPassword";
import Enrollment from "./Pages/Enrollment";
import Auth from "./api/Auth";

function App() {
  const [user] = useState("Philip");
  return (
    <Auth>
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
            path="/Enrollments"
            element={
              <Layout title="Enrollment" user={user}>
                <Enrollment />
              </Layout>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-password" element={<Verification />} />
          <Route path="/set-password" element={<SetPassword />} />
        </Routes>
      </BrowserRouter>
    </Auth>
  );
}

export default App;
