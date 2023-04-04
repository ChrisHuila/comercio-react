 import NavLogin from "../auth/NavLogin";
import SideBarP from "./SideBarP";
const PerfilHeader = ({nombre}) => {
    return (
        <header className="perfil-header">
            <div className="perfil-header-container container">
                <SideBarP />
                <div className="perfil-header-cuenta">
                    <div className="perfil-header-usuario">
                        <h3 className="perfil-nombre">{nombre}</h3>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg" alt="perfil-img" />
                    </div>
                    <NavLogin />
                </div>
            </div>
        </header>
      );
}
 
export default PerfilHeader;