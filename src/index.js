import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends React.Component {
  render() {
    return (
      <React.StrictMode>

        <App />
       
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));