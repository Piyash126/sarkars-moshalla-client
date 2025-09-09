import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/context/providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3 className="text-3xl">
        <span>Hi, Welcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </h3>
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default UserHome;
