import {
  getConversationsStart,
  getConversationsSucess,
  getConversationsError,
  createConversationStart,
  createConversationError,
  createConversationSucess,
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

export const createConversationFB =
  (conversation) => async (dispatch, _, api) => {
    try {
      dispatch(createConversationStart());
      await api.createConversationApi(conversation);

      dispatch(createConversationSucess(conversation));
    } catch (e) {
      dispatch(createConversationError(e));
    }
  };
