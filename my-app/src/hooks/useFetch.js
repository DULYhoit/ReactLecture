import { useEffect,useState } from "react";
//useFetch에서 사용할 url을 매개변수 받아서 사용
const useFetch = (url) => {
    //어떠한 데이터가 들어와도 모양은 똑같이 내보낼수잇게 공용 State를 생성
    const [data,setData] = useState([]);
    useEffect(() => {
        //1.비동기 통신 fetch()
    
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data);
        })
    }, [url]);
    return data;
}
 
export default useFetch;