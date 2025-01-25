
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated  ? children : <Navigate to ='/login'>

  </Navigate> ;
};

export default PrivateRoute;
