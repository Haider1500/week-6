import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      Hi there from Dashboard page
      <div>
        <button onClick={() => navigate("/")}>landing</button>
      </div>
    </div>
  );
}

export default Dashboard;
