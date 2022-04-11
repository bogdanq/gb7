import {
  CREATE_CONVERSATION,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  conversations: [],
  pending: false,
  error: null,
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation !== action.payload
        ),
      };
    case GET_CONVERSATIONS_START:
      return { ...state, pending: true, error: null };
    case GET_CONVERSATIONS_SUCCESS:
      return { ...state, pending: false, conversations: action.payload };
    case GET_CONVERSATIONS_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};
