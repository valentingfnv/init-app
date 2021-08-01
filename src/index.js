import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let mainSkillsItem = [
  {id:1 , name:'JavaScript'},
  {id:2 , name:'Python'},
  {id:3 , name:'HTML'},
  {id:4 , name:'CSS'}
  
]

let secondSkillsItem = [
  {id:1 , name:'React.JS'},
  {id:2 , name:'Django'},
  {id:3 , name:'LESS, SCSS'},
  {id:4 , name:'GIT'}
]

let contactsItem = [
  {id:1, name:'phone', value:'89287634105' },
  {id:2, name:'mail', value:'valentingfnv@yandex.ru' },
  {id:3, name:'telegram', value:'@valentingfnv' }
]

ReactDOM.render(
  <React.StrictMode>
    <App mainSkillsItem={mainSkillsItem} secondSkillsItem={secondSkillsItem} contactsItem={contactsItem}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
