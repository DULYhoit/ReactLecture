
import { Link } from 'react-router-dom';
import useFetch from './../hooks/useFetch';


const DayList = () => {
   const days = useFetch('http://localhost:3001/days');

  


    return (

        <ul className='list_day'>
            {days.map(day_ => (
                <li key={day_.id}>
                    <Link to={`/day/${day_.day}`}>
                        Day {day_.day}
                    </Link>
                </li>

            ))}
        </ul>


    );


}

export default DayList;