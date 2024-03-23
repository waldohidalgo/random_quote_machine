import React from "react";
import styles from "./Quote.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import Typewriter from "typewriter-effect";
import { BsTwitterX } from "react-icons/bs";

import { generarColor, consultaAPI } from "./functions";

export default function Quote() {
  const [color, setColor] = React.useState("");
  const [data, setData] = React.useState({ cita: "", autor: "" });
  const typewriterRef = React.useRef(null);

  React.useEffect(() => {
    setColor(generarColor());
    consultaAPI(setData);
  }, []);

  React.useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const handleColorChange = () => {
    setColor(generarColor());
    consultaAPI(setData);
  };
  return (
    <>
      <section className={styles.cita} id="quote-box">
        <div>
          {data.cita.length != 0 ? (
            <>
              <div
                id="text"
                className={styles.cita_contenido}
                style={{ color: color }}
              >
                <div className={styles.typewriter_contenedor}>
                  <Typewriter
                    options={{
                      strings: "❛❛ " + data.cita + " ❜❜",
                      autoStart: true,
                      delay: 50,
                      loop: false,
                      deleteSpeed: 0,
                    }}
                  />
                </div>
              </div>
              <p
                id="author"
                className={styles.cita_autor}
                style={{ color: color }}
              >
                <BsPersonCircle style={{ marginBottom: -2 }} />
                {"  "}
                {data.autor}
              </p>
            </>
          ) : (
            <div className={styles["contenedor_loader"]}>
              <div className={styles.loadertext}></div>
              <div className={styles.loader}></div>
            </div>
          )}
        </div>

        <button
          className={styles.boton_new_quote}
          style={{ backgroundColor: color }}
          onClick={handleColorChange}
          title="Show New Quote"
          id="new-quote"
        >
          {`New Quote  `} <GrUpdate style={{ marginBottom: -3 }} />
        </button>
        <button
          className={styles.twitter_button}
          style={{ backgroundColor: color }}
          title="Share quote in X (ex Twitter)"
        >
          <a
            id="tweet-quote"
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text=${
              '"' + data.cita + '"' + ". Author: " + data.autor
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX /> Tweet
          </a>
        </button>
      </section>
    </>
  );
}
