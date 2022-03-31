import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
// import { createStore } from "./my-redux";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
  })
);
