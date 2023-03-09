import {Link} from 'react-router-dom';

const Logo = ({estilo}) => {
    return ( 
        <Link to={'/'} style={{textDecoration: 'none'}} >
            <h1 className={`heading-font no-margin ${estilo}`}><span>E</span>l Comerciante</h1>
        </Link>
     );
}
 
export default Logo;