import React from "react";
import InputArea from "../InputArea";
import { render, fireEvent, cleanup } from "react-testing-library";

const setup = () => {
  const utils = render(<InputArea />);
  const input = utils.getByLabelText("restaurant-input");
  const btn = utils.getByText("Add");
  return {
    input,
    btn,
    ...utils
  };
};

afterEach(cleanup);

describe("InputArea", () => {
  it("user sees an input and button on the page", () => {
    const { getByText, getByLabelText } = setup();
    expect(getByText(/add/i)).toBeTruthy();
    expect(getByLabelText("restaurant-input")).toBeTruthy();
  });

  it("should accept input", () => {
    // Arrange
    const { input, debug } = setup();

    // Act
    fireEvent.change(input, { target: { value: "Wagamama" } });

    // Assert
    expect(input.value).toBe("Wagamama");
  });

  it("should NOT accept an empty input", () => {
    // Arrange
    const { input, getByText, btn } = setup();

    // Act
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(btn);

    // Assert
    expect(getByText(/please enter a restaurant/i)).toBeTruthy();
  });
});
