import { set, child, ref, get } from "firebase/database";
import { database } from "./firibase";

// @TODO  поместить в санк (withExtraArgument)
export const createConversationApi = (title) => {
  return set(child(ref(database), `conversations/${title}`), title);
};

export const getConversationApi = () => {
  return get(child(ref(database), `conversations`));
};
