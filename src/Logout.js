import React from "react";
import { useHistory } from "react-router-dom";

// import redux
import { useDispatch } from "react-redux";
import { userLogout } from "./Redux/Actions/user.action";

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutSuccess = () => {
    dispatch(userLogout(history));

    alert("logout");
  };
  return (
    <div>
      <p>
        hsjgjahsgasjhas gjhGAJA jbaskjasbakj
        <br />
        <br /> <br /> <br /> <br />
      </p>
      <p>
        hsjgjahsgasjhas gjhGAJA jbaskjasbakj
        <br />
        <br /> <br /> <br /> <br />
      </p>
      <button onClick={() => logoutSuccess()}>LOGOUT</button>
    </div>
  );
}

export default Logout;
