import { Link } from 'react-router-dom';
import dummy from '../db/data.json'

const DayList = () => {
    
    

    return <ul className='list_day'>
        {dummy.days.map(day_ =>(
            <li key={day_.id}>
                <Link to={`/day/${day_.day}`} onClick={()=>{
                    
                }}>
                Day {day_.day}
                </Link>
                </li>

        ))}
       
       
    </ul>;
}
 
export default DayList;