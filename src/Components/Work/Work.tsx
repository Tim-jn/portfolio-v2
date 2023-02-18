import { data } from "../../Data/Work";
import "./Work.scss";

type Props = {
  title: string;
};

export default function Work({ title }: Props) {
  return (
    <div className="work-section">
      <div className="section-title">{title}</div>
      {data.map(({ id, name, date, live }) => {
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
