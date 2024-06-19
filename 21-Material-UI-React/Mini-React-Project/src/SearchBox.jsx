import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox() {
    const API_URL = "http://api.weatherapi.com/v1/current.json?key=5a538533abaa421394e140114241203&q=${city}"
    let [city, setCity]  = useState("");

    let handleChange = (event) => {
        setCity(event.target.value);
  
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
    }

    return (
      <div>
        <h3>Search for the Weather</h3>
        <form onSubmit={handleSubmit} >
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            placeholder="City Name"
            required
            value={city}
            onChange={handleChange}
          />
          <br /> <br />
          <Button variant="contained" type="submit">Send</Button>
        </form>
      </div>
    );

  return (
    <div>
      <h3>Search for the Weather</h3>
      <form >
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          placeholder="City Name"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">Send</Button>
      </form>
    </div>
  );
}
