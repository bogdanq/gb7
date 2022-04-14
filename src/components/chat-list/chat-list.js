import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { List, Button } from "@mui/material";
import { Chat } from "./chat";
import {
  createConversationFB,
  deleteConversation,
  conversationsSelector,
} from "../../store/conversations";

export function ChatList() {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { conversations, pending } = useSelector(conversationsSelector);

  const create = () => {
    const name = prompt("Введите название комнаты");
    const isValidName = !conversations.includes(name);

    if (!!name && isValidName) {
      dispatch(createConversationFB(name));
    } else {
      alert("Не правильное название");
    }
  };

  const deleteCb = (conversation) => {
    dispatch(deleteConversation(conversation));
    navigate("/chat");
  };

  // @TODO сделат верстку
  if (pending) {
    return <h1>pending ...</h1>;
  }

  return (
    <List component="nav">
      <Button color="info" onClick={create}>
        create room
      </Button>

      {/* @TODO  переверстать */}
      {conversations.map((chat, index) => (
        <div style={{ display: "flex" }} key={index}>
          <Button color="info" onClick={() => deleteCb(chat)}>
            x
          </Button>
          <Link to={`/chat/${chat}`}>
            <Chat title={chat} selected={roomId === chat} />
          </Link>
        </div>
      ))}
    </List>
  );
}
