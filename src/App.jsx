import React, { useEffect, useRef } from "react";
import "./App.css";

export const App = () => {
  const label = useRef(null);
  const label2 = useRef(null);

  useEffect(() => {
    if (label.current) {
      Array.from(label.current.children).forEach((label) => {
        label.innerHTML = label.innerText
          .split("")
          .map(
            (letter, idx) =>
              `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
          )
          .join("");
      });
    }
  }, []);
  useEffect(() => {
    if (label2.current) {
      Array.from(label2.current.children).forEach((label) => {
        label.innerHTML = label.innerText
          .split("")
          .map(
            (letter, idx) =>
              `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
          )
          .join("");
      });
    }
  }, []);

  return (
    <>
      <body>
        <div className="container">
          <h1>Please Login</h1>
          <form>
            
              <div className="form-control" ref={label}>
                <input type="text" required />
                <label>Email</label>
              </div>
              <div className="form-control" ref={label2}>
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
