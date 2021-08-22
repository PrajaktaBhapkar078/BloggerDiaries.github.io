import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../help/botavtar";
import Options from "../../components/Options/Options"
import Quiz from "../../components/Quiz/Quiz";

const config = {
  botName: "blogger bot",
  lang: "no",
  customComponents: {

    botAvatar: (props) => <BotAvatar {...props} />,


  },
  
  initialMessages: [
    createChatBotMessage(`Hello!! How may I help you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "Registration",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Click here to view Registration Process",
            answer:
              " 1.Create Your Username \n 2.Enter Your Email-Id    3.Create your password as per given criteria \n 4. Re-Enter passwor5.click on Register Button.",
            id: 1,
          },
         
        ],
      },
    },

    {
      widgetName: "writePost",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Click here to view Blog Writing Process:",
            answer:
              " 1.Add title for your blog  \n 2.Write content.3.You can add image 4.choose category of your blog\n 5.click on Publish button.",
            id: 1,
          },
          
        ],
      },
    },
    {
      widgetName: "login",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Click here to view Login Process",
            answer:
              "1.Enter username 2.Enter password.3.Click on Login Button",
            id: 1,
          },
          
        ],
      },
    },
  ],
};

export default config;
