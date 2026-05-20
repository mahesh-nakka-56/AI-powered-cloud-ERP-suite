function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "20px"
      }}
    >
      <h2>Amdox ERP</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>

        <li style={{ marginTop: "20px" }}>
          <button style={{ width: "100%" }}>
            Dashboard
          </button>
        </li>

        <li style={{ marginTop: "20px" }}>
          <button style={{ width: "100%" }}>
            Employees
          </button>
        </li>

        <li style={{ marginTop: "20px" }}>
          <button style={{ width: "100%" }}>
            Inventory
          </button>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar