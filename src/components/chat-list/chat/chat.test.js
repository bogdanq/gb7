import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Chat } from "./chat";
import { renderWithRedux } from "../../../utils/render-with-redux";

describe("chat component", () => {
  it("render chat with title", () => {
    const MESSAGE = {
      author: "test",
      message: "test message",
    };

    const { container } = renderWithRedux(<Chat title="room1" />, {
      messages: {
        messages: {
          room1: [MESSAGE],
        },
      },
    });

    // eslint-disable-next-line testing-library/no-container
    const nodes = [...container.querySelectorAll(".text")];

    expect(nodes.length).toBe(3);
    expect(nodes[0]).toHaveTextContent("room1");
    expect(nodes[1]).toHaveTextContent(MESSAGE.author);
    expect(nodes[2]).toHaveTextContent(MESSAGE.message);
  });

  it("render chat with selected", () => {
    const MESSAGE = {
      author: "test",
      message: "test message",
    };

    renderWithRedux(<Chat title="room1" selected={true} />, {
      messages: {
        messages: {
          room1: [MESSAGE],
        },
      },
    });

    expect(screen.getByTestId("wrapper")).toHaveClass("Mui-selected");
  });

  it("render chat with onClick", () => {
    const onClick = jest.fn();

    const { baseElement } = renderWithRedux(
      <Chat title="room1" onClick={onClick} />,
      {
        messages: {
          messages: {
            room1: [],
          },
        },
      }
    );

    userEvent.click(baseElement.querySelector(".text"));

    expect(onClick).toBeCalledTimes(1);
  });
});
