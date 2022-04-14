import {
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_ERROR,
  CREATE_CONVERSATION_START,
  CREATE_CONVERSATION_SUCCESS,
  CREATE_CONVERSATION_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

export const deleteConversation = (conversation) => {
  return { type: DELETE_CONVERSATION, payload: conversation };
};

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS_START,
});

export const getConversationsSucess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations,
});

export const getConversationsError = (e) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: e,
});

export const createConversationStart = () => ({
  type: CREATE_CONVERSATION_START,
});

export const createConversationSucess = (conversation) => ({
  type: CREATE_CONVERSATION_SUCCESS,
  payload: conversation,
});

export const createConversationError = (e) => ({
  type: CREATE_CONVERSATION_ERROR,
  payload: e,
});
