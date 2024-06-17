import React from "react";
import PropTypes from "prop-types";

// hago el destructuring ya en la funcion**
const Result = ({ value }) => 
<div className="result">
    {value}
</div>;

//** */ SE VALIDA el tipo de variable que le paso contra el esperado
Result.propTypes = {
  //value debe ser string y debe existir
  value: PropTypes.string.isRequired,
};
//Se pone valor por defecto
Result.defaultProps = {
  value: "0",
};

export default Result;
