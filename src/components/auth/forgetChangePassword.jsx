import axios from "axios";
import { useNavigate, useParams } from "react-router";

const ForgetChangePassword = () => {
    const id = useParams();
    console.log(id);
    const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(id?.id);
    try{
        console.log(id);
        const password = e.target.password.value;
        const response = await axios.post(`http://localhost:3000/password/reset-password/${id?.id}`,{
            password
        })
        console.log(response);
        console.log("New password:", password);
        alert("Password changed successfully!");
        e.target.reset();
        navigate('/user/login');
    }
    catch(err){
        console.log(err);
    }
    
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2 className="text-center m-10">Change Password</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* <div style={{ marginBottom: "15px" }}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            minLength={6}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div> */}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ForgetChangePassword;
