import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Root = () => {
    return (
        <div className="h-[calc(100vh-92px)]">
         <Header></Header>
         <Outlet></Outlet>
        <div className="min-h-[calc(100vh-264px)]"></div>
        
         <Footer></Footer>

        </div>
    );
};

export default Root;