import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Document from "./Document";
import Face from "./Face";

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/document">Document</Link> |{" "}
        <Link to="/face">Face</Link>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/hello-dot-js-kit">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<App />} />
          <Route path="document" element={<Document />} />
          <Route path="face" element={<Face />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
