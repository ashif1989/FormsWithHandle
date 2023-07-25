import { useState } from "react";

let Form = () => {
  let [name, setName] = useState("");
  let [value, setValue] = useState(["B.E.", "Bsc", "BCA", "BCom"]);

  let handleSelect = (e) => {
    console.log(e.target.value);
  };

  let handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <label>Name</label>
      <input type="text" value={name} />
      <br />
      <br />
      <label>Age</label>
      <input type="number" />
      <br />
      <br />
      <label>Highest Qualification</label>
      <select onChange={(e) => handleSelect(e)} defaultValue={"BCom"}>
        {value.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </select>
      <br />
      <br />
      <label>Gender: </label>
      <label>Male</label>
      <input
        type="radio"
        name="sex"
        value="Male"
        onChange={(e) => handleChange(e)}
      ></input>
      <label>Female</label>
      <input
        type="radio"
        name="sex"
        value="Female"
        onChange={(e) => handleChange(e)}
      ></input>
      <br />
      <br />
      <label>Skills: </label>
      <label>React</label>
      <input
        type="checkbox"
        name="skills"
        value="React"
        onChange={(e) => handleChange(e)}
      ></input>
      <label>HTML</label>
      <input
        type="checkbox"
        name="skills"
        value="HTML"
        onChange={(e) => handleChange(e)}
      ></input>
      <label>JS</label>
      <input
        type="checkbox"
        name="skills"
        value="JS"
        onChange={(e) => handleChange(e)}
      ></input>
    </form>
  );
};

export default Form;
