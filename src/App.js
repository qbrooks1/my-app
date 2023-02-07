import React from "react";
import './App.css';
import axios from "axios";

const baseURL = "https://frontend-take-home.fetchrewards.com/form";

function App() {
  const [form, setForm] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setForm(response.data)
    })
  }, []);

  // console.log(form)
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
            <select className="input"></select>
          </label>
          <label className="label"> State
            <select className="input"></select>
          </label>
          <button type="submit" className="submitButton">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
