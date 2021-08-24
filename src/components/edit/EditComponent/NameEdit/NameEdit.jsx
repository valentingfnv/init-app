import React from "react";

import TextInput from "../../../microCopmonents/TextInput";

export default function NameEdit({title, editFirstName, editLastName, editPositionName}) {
  let inputFirstName = React.createRef();
  let inputLastName = React.createRef();
  let inputPosition = React.createRef();

  const onChangeFirstName = () => {
    let newName = inputFirstName.current.value;
    editFirstName(newName);
  }
  const onChangeLastName = () => {
    let newName = inputLastName.current.value;
    editLastName(newName);
  }
  const onChangePosition = () => {
    let newName = inputPosition.current.value;
    editPositionName(newName);
  }

  return (
    <div>
      <h4>Enter your name and the desired position</h4>
      <TextInput onChanges={onChangeFirstName} refs={inputFirstName} label="first name" type="text" value={title.firstName} />
      <TextInput onChanges={onChangeLastName} refs={inputLastName} label="last name" type="text" value={title.lastName} />
      <TextInput onChanges={onChangePosition} refs={inputPosition} label="position" type="text" value={title.position} />     
    </div>
  );
}
