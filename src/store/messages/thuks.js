import { nanoid } from "nanoid";

import {
  sendMessage,
  getMessagesStart,
  getMessagesSucess,
  getMessagesError,
  sendMessagesStart,
  sendMessagesSucess,
  sendMessagesError,
} from "./actions";

export const sendMessageWithBot = (roomId, message) => (dispatch, getState) => {
  dispatch(sendMessage(roomId, message));

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, {
          author: "Bot",
          message: "hello from bot thunk",
        })
      );
    }, 700);
  }
};

export const getMessages = () => async (dispatch, _, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessagesApi();

    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSucess(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
};

export const createMessageFb =
  (roomId, message) => async (dispatch, _, api) => {
    try {
      dispatch(sendMessagesStart());

      const nextMessage = {
        ...message,
        date: new Date().getTime(),
        id: nanoid(),
      };

      await api.createMessageApi(nextMessage, roomId);

      dispatch(sendMessagesSucess(nextMessage, roomId));
    } catch (e) {
      dispatch(sendMessagesError(e));
    }
  };
