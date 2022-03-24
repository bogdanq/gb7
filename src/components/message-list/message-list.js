import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
// import PropTypes from "prop-types";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";

export const MessageList = () => {
  const ref = useRef();
  const { roomId } = useParams();

  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState({
    room1: [
      {
        author: "Bot",
        message: "message 333",
        date: "date",
      },
    ],
  });

  const styles = useStyles();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messageList]);

  const sendMessage = () => {
    if (value) {
      setMessageList({
        ...messageList,
        [roomId]: [
          ...(messageList[roomId] ?? []),
          {
            author: "User",
            message: value,
            date: new Date(),
          },
        ],
      });
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        // @TODO сделать в функции sendMessage
        setMessageList({
          ...messageList,
          [roomId]: [
            ...(messageList[roomId] ?? []),
            {
              author: "Bot",
              message: "Hello from Bot",
              date: new Date(),
            },
          ],
        });
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messageList, roomId]);

  const messages = messageList[roomId] ?? [];

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
