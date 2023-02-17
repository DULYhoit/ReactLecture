import { useParams } from "react-router-dom";
import P_Word from "./P_Word";

const P_Day = () => {
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
      const day = useParams().day;
      
      
    return ( 
        <table>
            <h2>Day {day}</h2>
            <tbody>
                <P_Word day={day}></P_Word>
                

            </tbody>
        </table>
     );
}
 
export default P_Day;