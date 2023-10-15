
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Login from "./login";


const Layout = ({children}) => {
  return (
    <div>
        <Sidebar/>
        {children}
    </div>
  );
};

export default Layout;
