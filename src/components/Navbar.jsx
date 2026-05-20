function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "15px",
        boxShadow: "0px 0px 10px lightgray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px"
      }}
    >
      <h2>Amdox ERP Dashboard</h2>

      <div>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid gray"
          }}
        />

        <button
          style={{
            marginLeft: "10px",
            padding: "8px 15px",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Profile
        </button>
      </div>
    </div>
  )
}

export default Navbar