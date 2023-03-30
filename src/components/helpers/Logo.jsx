import {Link} from 'react-router-dom';
import ScrollLink from './ScrollLink';
import PropTypes from "prop-types";

const Logo = ({estilo}) => {
    return ( 
        <Link 
        to={'/'} 
        style={{textDecoration: 'none'}} 
        onClick={ScrollLink}
        >
            <h1 className={`heading-font no-margin ${estilo}`}><span>E</span>l Comerciante</h1>
        </Link>
     );
}
Logo.propTypes = {
    estilo: PropTypes.string
}
export default Logo;