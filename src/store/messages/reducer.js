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
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  messages: {},
  pending: false,
  error: null,

  pendingSendMessage: false,
  errorSendMessage: null,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    case DELETE_CONVERSATION:
      // delete state.messages[action.payload]

      return {
        ...state,
        messages: Object.entries(state.messages).reduce(
          (messages, [key, value]) => {
            if (key === action.payload) {
              return messages;
            }

            messages[key] = value;

            return messages;
          },
          {}
        ),
      };

    case GET_MESSAGES_START:
      return { ...state, pending: true, error: null };
    case GET_MESSAGES_SUCCESS:
      return { ...state, pending: false, messages: action.payload };
    case GET_MESSAGES_ERROR:
      return { ...state, pending: false, error: action.payload };

    case CREATE_MESSAGES_START:
      return { ...state, pendingSendMessage: true, errorSendMessage: null };
    case SEND_MESSAGE:
    case CREATE_MESSAGES_SUCCESS:
      return {
        ...state,
        pendingSendMessage: false,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            action.payload.message,
          ],
        },
      };

    case CREATE_MESSAGES_ERROR:
      return {
        ...state,
        pendingSendMessage: false,
        errorSendMessage: action.payload,
      };
    default:
      return state;
  }
};
