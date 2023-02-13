import React, { useEffect, useRef } from "react";
import "./App.css";

export const App = () => {
  const labels = useRef(null);
  const labels2 = useRef(null);

  const wave = (focusLabel) => {
    Array.from(focusLabel.current.children).forEach((label) => {
      label.innerHTML = label.innerText.split("").map(
        (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        ).join("");
    });
  };

  useEffect(() => {
    if (labels.current) {
      wave(labels);
    }

    if (labels2.current) {
      wave(labels2);
    }
  }, [labels, labels2]);

  return (
    <>
      <body>
        <div className="container">
          <h1>Please Login</h1>
          <form>
            <div className="form-control" ref={labels}>
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className="form-control" ref={labels2}>
              <input type="password" required />
              <label>Password</label>
            </div>

            <button className="btn">Login</button>
            <p className="text">
              Don't have an account? <a href="#">Register</a>{" "}
            </p>
          </form>
        </div>
      </body>
    </>
  );
};

export default App;
