function Login({ setIsLoggedIn }) {

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          width: "350px",
          boxShadow: "0px 0px 10px lightgray"
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          ERP Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Login
        </button>

      </div>
    </div>
  )
}

export default Login