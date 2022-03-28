import { memo } from "react";
import { format } from "date-fns";
import cls from "classnames";
import styles from "./message.module.css";

export const Message = memo(({ message, children }) => {
  return (
    <div
      className={cls(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.author}</h3>
      <p>{message.message}</p>
      {children}
      <p>{format(message.date, "yyyy-MM-dd HH:MM:SS")}</p>
    </div>
  );
});
