import { data } from "../../Data/Work";
import "./Work.scss";

export default function Work() {
  return (
    <div>
      {data.map(({ id, name, date, live, source }) => {
        return (
          <li className="work-item">
            <p>{date}</p>
            <a href={live} target="_blank" rel="noreferrer">
              {name}
            </a>
          </li>
        );
      })}
    </div>
  );
}
