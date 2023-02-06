import { useState } from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Skills from "../../Components/Skills/Skills";
import Title from "../../Components/Title/Title";
import Work from "../../Components/Work/Work";
import "./Index.scss";

export default function Index() {
  const [content, setContent] = useState(1);

  console.log(content);

  return (
    <main className="main-structure">
      <div className="left-content">
        <Title />
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/timjeanmart/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-text">LinkedIn</span>
            <div className="linkedin"></div>
          </a>
          <a
            href="https://github.com/Tim-jn"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-text">GitHub</span>
            <div className="github"></div>
          </a>
        </div>
        <nav>
          <ul className="sidebar-links">
            <li>
              <button
                className={
                  content === 1 ? "sidebar-link active" : "sidebar-link"
                }
                onClick={() => setContent(1)}
              >
                à propos
              </button>
            </li>
            <li>
              <button
                className={
                  content === 2 ? "sidebar-link active" : "sidebar-link"
                }
                onClick={() => setContent(2)}
              >
                compétences
              </button>
            </li>
            <li>
              <button
                className={
                  content === 3 ? "sidebar-link active" : "sidebar-link"
                }
                onClick={() => setContent(3)}
              >
                derniers projets
              </button>
            </li>
            <li>
              <button
                className={
                  content === 4 ? "sidebar-link active" : "sidebar-link"
                }
                onClick={() => setContent(4)}
              >
                contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-content">
        <section className="content">
          {content === 1 ? (
            <About />
          ) : content === 2 ? (
            <Skills />
          ) : content === 3 ? (
            <Work />
          ) : content === 4 ? (
            <Contact />
          ) : (
            ""
          )}
        </section>
      </div>
    </main>
  );
}
