import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
const data = [
  {
    month: "Jan",
    employees: 40
  },
  {
    month: "Feb",
    employees: 60
  },
  {
    month: "Mar",
    employees: 90
  },
  {
    month: "Apr",
    employees: 120
  }
];
function Dashboard() {
  return (
    <div>

      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            backgroundColor: "#0d6efd",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px"
          }}
        >
          <h3>Total Employees</h3>
          <h1>150</h1>
        </div>

        <div
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px"
          }}
        >
          <h3>Total Projects</h3>
          <h1>25</h1>
        </div>

        <div
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px"
          }}
        >
          <h3>Revenue</h3>
          <h1>$50K</h1>
        </div>

      </div>

      <div
        style={{
          marginTop: "40px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px lightgray"
        }}
      >

        <h2>Employee Details</h2>

        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse"
          }}
        >

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>Nishchal Agarwal </td>
              <td>Project lead</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Mahesh </td>
              <td>Frontend Developer</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Pallavi</td>
              <td>UI/UX Designer</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Abhishek</td>
              <td>Backend Developer</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Kavinesh</td>
              <td>Database Engineer</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>6</td>
              <td>Bhargav</td>
              <td>Cloud & DevOps</td>
              <td>Active</td>
            </tr>

          </tbody>

        </table>
<div
  style={{
    marginTop: "40px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px lightgray"
  }}
>

  <h2>Employee Growth Chart</h2>

  <BarChart
    width={500}
    height={300}
    data={data}
  >
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="employees" fill="#0d6efd" />
  </BarChart>

</div>
      </div>

    </div>
  )
}

export default Dashboard