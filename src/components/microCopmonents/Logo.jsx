import React from "react";


// Inline CSS style
let logo = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '2px'
}

let logoIt = {
    backgroundColor: 'var(--main-bgc)',
    color: 'var(--second-color)',
    padding: '10px',
    borderRadius: '2px'
}

export default function Logo() {
  return (
    <div style={logo}>
      <div>
        <h1>In</h1>
      </div>
      <div style={logoIt}>
        <h1>IT</h1>
      </div>
    </div>
  );
}
