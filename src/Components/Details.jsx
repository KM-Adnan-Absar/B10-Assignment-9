import { useContext } from "react";
import { AuthContext } from "./AuthProviders";

const Details = () => {
const {user} =  useContext(AuthContext)

    return (
        <div>
         {
            user && <>
              <h2>I have many Details</h2>
            </>
         }
        </div>
    );
};

export default Details;