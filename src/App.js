import React from "react";
import './App.css';

function App() {
  // function get() {
  //   axios.get("https://frontend-take-home.fetchrewards.com/form").then(({data}) => {
  //     setText(JSON.stringify(data));
  //   });
  // }

  // function post() {
  //   axios.post("https://frontend-take-home.fetchrewards.com/form").then(({}) => {
  //     setText(JSON.stringify(data));
  //   })
  // }

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <form className="form">
          <label className="label"> Full Name
            <input type="text" name="name" className="input"/>
          </label>
          <label className="label"> Email
            <input type="text" className="input"/>
          </label>
          <label className="label"> Password
            <input type={values.showPassword ? "text" : "password"} className="input"/>
          </label>
          <label className="label"> Occupation
            <input type="text" className="input"/>
          </label>
          <label className="label"> State
            <input type="text" className="input"/>
          </label>
          <button type="submit" className="submitButton">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
