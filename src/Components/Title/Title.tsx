import "./Title.scss";
import { useMediaQuery } from "react-responsive";

export default function Title() {
  const isSmallerScreen = useMediaQuery({ query: "(min-width: 569px)" });
  return (
    <header>
      {isSmallerScreen ? (
        <h1 className="title">Tim Jeanmart</h1>
      ) : (
        <>
          <h1 className="title title-mobile">Tim</h1>
          <h1 className="title title-mobile">Jeanmart</h1>
        </>
      )}
      <h2 className="subtitle">Développeur web</h2>
    </header>
  );
}
