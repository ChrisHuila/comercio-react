import { useParams } from "react-router-dom";

const Perfil = () => {
  const {usuario, id}  = useParams();
    return (
        <p>{usuario}</p>
      );
}
 
export default Perfil;