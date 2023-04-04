import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollLink from "../helpers/ScrollLink";
import Drawer from "@mui/material/Drawer";

import "./style/sideBarP.css";

const SideBarP = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const drawerWidth = 240;

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <div className="sidebar-drawer">
      
          <div className="sidebar-perfil">
            <Link
                to={`/ursula/1232`}
                className="sidebar-perfil-link"
                onClick={ScrollLink}
            >
                <h3 className="sidebar-perfil_lista"><i className="bi bi-house-door-fill"></i> Inicio</h3>
            </Link>
            <Link
                to={`/`}
                className="sidebar-perfil-link"
                onClick={ScrollLink}
            >
                <h3 className="sidebar-perfil_lista"><i className="bi bi-shop-window"></i>Compra</h3>
            </Link>
            
            
          </div>

        </div>
      );

    return (
        <div className="header-SideBar">
            <button
                style={{background: 'transparent', border: 'none', fontSize:'1.8rem'}}
                onClick={handleDrawerToggle}
            >
                <i className="bi bi-list"></i>
            </button>
     
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                      boxSizing: "border-box"
                    }
                  }}
                >
                {drawer}
                </Drawer>
        </div>
      );
}
 
export default SideBarP;