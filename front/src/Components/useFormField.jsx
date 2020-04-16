import React from "react";

function useFormField(initialState) {
  const [fields, setValues] = React.useState(initialState);
  return (
    fields,
    function (event) {
      setValues({ ...fields, [event.target.id]: event.target.value });
    }
  );
}

export default useFormField;
