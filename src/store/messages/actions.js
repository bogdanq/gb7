import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  CREATE_MESSAGES_START,
  CREATE_MESSAGES_SUCCESS,
  CREATE_MESSAGES_ERROR,
} from "./types";

export const sendMessage = (roomId, message) => {
  return {
    type: SEND_MESSAGE,
    payload: { roomId, message },
    meta: { delay: 10 },
  };
};

export const deleteMessage = (roomId, messageId) => {
  return { type: DELETE_MESSAGE, payload: { roomId, messageId } };
};

// @TODO сделать удаление сообщений
// @TODO сделать редактирование сообщений

export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSucess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getMessagesError = (e) => ({
  type: GET_MESSAGES_ERROR,
  payload: e,
});

export const sendMessagesStart = () => ({
  type: CREATE_MESSAGES_START,
});

export const sendMessagesSucess = (message, roomId) => ({
  type: CREATE_MESSAGES_SUCCESS,
  payload: { message, roomId },
});

export const sendMessagesError = (e) => ({
  type: CREATE_MESSAGES_ERROR,
  payload: e,
});
