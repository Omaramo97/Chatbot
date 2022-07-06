import {
  createChatBotMessage,
  createCustomMessage,
  MyCustomAvatar,
} from "react-chatbot-kit";
import CustomMessage from "../Customs/CustomMessage";
import DogPicture from "./Widgets/DogPicture";
import CustomAvatar from "../Customs/CustomAvatar";
import UserAvatar from "../Customs/UserAvatar";

const botName = "Zug Zug";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}`),

    createChatBotMessage("Let me see if this works!", {
      delay: 1000,
    }),

    createCustomMessage("Test", "custom"),
  ],

  customComponents: {
    botAvatar: (props) => <CustomAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "Green",
    },
    chatButton: {
      backgroundColor: "red",
    },
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
