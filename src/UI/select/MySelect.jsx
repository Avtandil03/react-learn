import React from 'react';
import Classes from "./MySelect.module.css"

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select 
     className={Classes.mySelect}
     value={value}
     onChange={e=>onChange(e.target.value)}
     >
      <option disabled value="">{defaultValue}</option>
      {options.map(option => 
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
  );
};

export default MySelect;