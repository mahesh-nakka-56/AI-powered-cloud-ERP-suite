import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />
  }

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div
        style={{
          padding: "20px",
          width: "100%",
          backgroundColor: "#f5f5f5"
        }}
      >
        <Navbar />

        <div style={{ marginTop: "20px" }}>
          <Dashboard />
        </div>

      </div>

    </div>
  )
}

export default App