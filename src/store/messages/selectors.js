export const messagesSelector = (roomId) => (state) => {
  return state.messages.messages[roomId] ?? [];
};

export const lastMessageSelector = (roomId) => (state) => {
  const messages = state.messages.messages[roomId] ?? [];

  return messages[messages.length - 1];
};
