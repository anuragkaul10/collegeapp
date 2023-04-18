import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ImproveSkills() {
  let navigate = useNavigate();
  let user = localStorage.getItem("user");
  let logout = () => {
    localStorage.removeItem("user");
    alert("you have been logged out");
    navigate("/signup");
  };

  const location = useLocation();
  //
  //
  //
  const list = ["Learn new recepies", "Experiment with food", "Write your own recepies", "Know nutrition facts", "Get cooking tips", "Get ranked"];
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/images/gallery/img7.jpeg" alt="no image" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn">
          {user ? (
            <Link to="/signup" onClick={logout} className={location.pathname === "/signup" ? "active" : ""} style={{ color: "white" }}>
              Logout
            </Link>
          ) : (
            <>
              <Link to="/signup" className={location.pathname === "/signup" ? "active" : ""} style={{ color: "white" }}>
                SignUp now
              </Link>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
