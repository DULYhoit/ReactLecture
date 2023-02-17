import { Link } from "react-router-dom";

const P_Header = () => {
    return ( 
        <div className="header">
            <Link to={'/'}>
            <h1>영단어 연습장</h1>
            </Link>
        </div>
     );
}
 
export default P_Header;