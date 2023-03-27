import { useState } from "react";
import { categorias } from "../../routes/productos";
import Drawer from "@mui/material/Drawer";


const SideBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const drawerWidth = 240;

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <div className="sidebar-drawer">

          <h1 className="sidebar-titulo"><i className="bi bi-card-list"></i> Categorias</h1>
          <hr />
          <div className="sidebar-categorias">
            {categorias.map( categoria => (
              <div key={categoria.id} className="sidebar-categoria_lista">
                <h2>{categoria.nombre}</h2>
              </div>
            ))}
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
                // anchor="left"
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
 
export default SideBar;