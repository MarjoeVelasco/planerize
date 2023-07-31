import Nav from "../Components/Navigation/Nav";
import SimpleSidebar from "../Components/Navigation/SimpleSideBar";
import GridWithCards from "../Components/cards/GridWithCards";
import Workspaces from "../Pages/Dashboard/Workspaces";


function Layout () {

  return (
    <div>

      <SimpleSidebar>
      <Nav></Nav>
      <div>
       <Workspaces></Workspaces>
      </div>
      </SimpleSidebar>
    </div>
  );
}

export default Layout;