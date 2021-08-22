import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Register",
      handler: props.actionProvider.handleRegistration,
      id: 1,
    },
   
      {
        text: "Login",
        handler: props.actionProvider.handleLogin,
        id: 2,
      },
    { text: "Write a Blog",
     handler:props.actionProvider.handleWrite,
      id: 3
     },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;