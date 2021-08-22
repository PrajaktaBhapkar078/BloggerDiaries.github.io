class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  handleInvalid = () => {
    const message = this.createChatBotMessage("Please Enter Valid Query!!");
    this.addMessageToState(message);
  };
  handleRegistration = () => {
    const message = this.createChatBotMessage(
      "Here are required steps :",
      {
        widget: "Registration",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  handleWrite = () => {
    const message = this.createChatBotMessage(
      "Here are required steps :",
      {
        widget: "writePost",
      }
    );

    this.addMessageToState(message);
  };
  handleLogin = () => {
    const message = this.createChatBotMessage(
      "Here are  required steps :",
      {
        widget: "login",
      }
    );

    this.addMessageToState(message);
  };

}

export default ActionProvider;