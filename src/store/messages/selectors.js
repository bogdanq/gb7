export const messagesSelector = (roomId) => (state) => {
  console.log("MessageList: messages");
  return state.messages.messages[roomId] ?? [];
};
