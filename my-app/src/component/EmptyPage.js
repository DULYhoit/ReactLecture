import { Link } from 'react-router-dom';

const EmptyPage = () => {
    return ( 
        <>
        <h1>잘못된접근입니다</h1>
        <Link to="/">돌아가기</Link>
        </>
     );
}
 
export default EmptyPage;