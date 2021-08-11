import React from "react";

import TextInput from '../../microCopmonents/TextInput'
import MainButton from '../../microCopmonents/MainButton'

export default function NameEdit() {

    
  return (
    <div>
      <TextInput  label="name" type="text" />
      <TextInput  label="post" type="text" />
      <MainButton  label="SAVE" />
    </div>
  );
}
