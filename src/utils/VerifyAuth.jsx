import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const VerifyAuth = () => {
  let history = useHistory();
  const verifyAuth = () => {
    const is_auth = localStorage.getItem("isAuth") || false;
    if (is_auth == false) history.push("/sign-in");
    else history.push("/patient");
  };
  useEffect(() => {
    verifyAuth();
  }, []);
};

export default VerifyAuth;
