import React from "react";
import { Input } from 'reactstrap';
import '../Form.css';

function FormName(props) {
  let handleChange = (e) => {
    let name = e.target.value;
    props.newName(name);
  };

  return (
    <div>
      <h2>Restaurant Name</h2>
      <Input
        type="text"
        placeholder="Restaurant Name"
        onChange={handleChange}
        name="search"
      />
    </div>
  );
}

export default FormName;
