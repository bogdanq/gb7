import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Input, InputAdornment } from "@mui/material";
// import PropTypes from "prop-types";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";
import { sendMessageWithBot, messagesSelector } from "../../store/messages";
import { usePrevios } from "../../hooks/use-previos";

export const MessageList = () => {
  const ref = useRef();
  const { roomId } = useParams();
  const dispatch = useDispatch();

  const selector = useMemo(() => messagesSelector(roomId), [roomId]);

  const messages = useSelector(selector, shallowEqual);

  const [value, setValue] = useState("");

  const styles = useStyles();

  const previosMessagesLength = usePrevios(messages.length);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(
          sendMessageWithBot(roomId, { author: author || "Bot", message })
        );

        setValue("");
      }
    },
    [roomId, dispatch]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (
      messages.length > previosMessagesLength &&
      lastMessage.author === "User"
    ) {
      timerId = setTimeout(() => {
        send("Hello from Bot", "Bot");
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages, roomId, send, previosMessagesLength]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.id} roomId={roomId} />
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
            {value && (
              <Send className={styles.icon} onClick={() => send(value)} />
            )}
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

// const mapStateToProps = (state) => {
//   return {
//     messages: state.messages.messages,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: (params) => dispatch(sendMessage(params)),
//   };
// };

// const Component = connect(mapStateToProps, mapDispatchToProps)(MessageList);
