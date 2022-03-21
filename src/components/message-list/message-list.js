import { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
// import PropTypes from "prop-types";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";

export const MessageList = () => {
  const ref = useRef();

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    {
      author: "Bot",
      message: "message 333",
      date: "date",
    },
  ]);

  const styles = useStyles();

  // useEffect(() => {
  //   console.log("ref", ref);
  // }, []);

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        {
          author: "User",
          message: value,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessages.author === "User") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: "Bot",
            message: "hello from bot",
            date: new Date().toLocaleDateString(),
          },
        ]);
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.date} />
        ))}
      </div>

      <Input
        placeholder="Введите сообщение ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        className={styles.input}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            {value && <Send className={styles.icon} onClick={sendMessage} />}
          </InputAdornment>
        }
      />
    </>
  );
};

// MessageList.propTypes = {
//   test1: PropTypes.string.isRequired,
//   test2: PropTypes.bool.isRequired,
//   test3: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//   }).isRequired,
// };
