import React from "react";

const Form = props => (
  <form onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="What is your city?"/>
    <button>Watch the weather</button>
    
  </form>
)

export default Form;
