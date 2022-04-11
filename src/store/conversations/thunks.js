import {
  getConversationsStart,
  getConversationsSucess,
  getConversationsError,
} from "./actions";

export const getConversations = () => async (dispatch, _, api) => {
  const conversations = [];

  try {
    dispatch(getConversationsStart());

    const snapshot = await api.getConversationApi();

    snapshot.forEach((snap) => {
      conversations.push(snap.val());
    });

    dispatch(getConversationsSucess(conversations));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};
