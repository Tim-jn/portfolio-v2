import { data } from "../../Data/Work";
import "./Work.scss";

export default function Work() {
  return (
    <div className="work-section">
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
      <a
        href="https://github.com/tim-jn"
        target="_blank"
        className="more-work"
        rel="noreferrer"
      >
        Plus d'informations sur les projets
      </a>
    </div>
  );
}
