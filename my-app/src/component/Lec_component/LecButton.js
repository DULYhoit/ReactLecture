import { Link, Route } from "react-router-dom";

const LecButton = () => {
  return (
    <div>
      <ul className="list_day">
        <li>
          <Link to={"/Event"}>Event</Link>
        </li>
        <li>
          <Link to={"/State"}>State</Link>
        </li>
        <li>
          <Link to={"/Event"}>추가예정</Link>
        </li>
      </ul>
    </div>
  );
};

export default LecButton;
