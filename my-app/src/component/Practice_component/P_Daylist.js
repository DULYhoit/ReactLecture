import { Link } from "react-router-dom";
import { useState } from "react";

const P_Daylist = () => {
    
    const days = [
        {
          "id": 1,
          "day": 1
        },
        {
          "id": 2,
          "day": 2
        },
        {
          "id": 3,
          "day": 3
        }
      ];
    
    return ( 
     
            <ul className='list_day'>
                {days.map(day => (
                <li key={day.id}>
                <Link to={`/day/${day.day}`}>
                Day {day.day}
                </Link>
                </li>
                ))}
                
            </ul>
       
     );
}
 
export default P_Daylist;