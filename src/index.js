import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/layout/_navbar.scss";
import "./sass/abstract/_containers.scss";
import "./sass/layout/_hero.scss";
import "./sass/layout/_service_title.scss";
import "./sass/layout/_footer.scss";
import "./sass/layout/_apartners.scss";
import "./sass/layout/_assetsCards.scss";
import "./sass/layout/_testimonial.scss";
import "./sass/layout/_global.scss";
import "./sass/layout/_ads.scss";
import "./sass/layout/_community.scss";
import "./sass/base/_variables.scss";
// import "bootstrap-icons";
import App from './entry';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
