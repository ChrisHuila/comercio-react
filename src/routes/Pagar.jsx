import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ArticuloPagar from "../components/pagar/ArticuloPagar";
import useCarrito from "../hooks/useCarrito";

const Pagar = () => {

 // Utiliza el hook useCarrito
    const {carrito} = useCarrito();
    return (
        <Fragment>
            {console.log(carrito)} 
            <Header />
            <div className="pagar container">
                <div className="pagar-contenedor sombra-dark ">
                    <h2>Gracias por tu Compra</h2>
                    {carrito.map(articulo => (
                        <ArticuloPagar
                            key={articulo.id}
                            articulo={articulo}
                        />
                    ))}
                    <hr />
                    <h3>Total: <span>numero</span> </h3>
                </div>

            </div>

            <Footer />
        </Fragment>
    );
}
 
export default Pagar;