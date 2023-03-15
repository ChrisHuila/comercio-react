import {Link} from 'react-router-dom';
import ScrollLink from './ScrollLink';

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
 
export default Logo;