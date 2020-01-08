import React from "react";
import RestaurantList from "../RestaurantList";
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

describe("RestaurantList", () => {
  it("renders 'No items' when there are no items", () => {
    // Arrange
    const { getByText } = render(<RestaurantList />);

    // Assert
    expect(getByText("No items")).toBeTruthy();
  });

  it("renders a list of items", () => {
    // Arrange, Act
    const { getByText } = render(
      <RestaurantList items={["Wagamama", "Bar Buritto"]} />
    );

    // Assert
    expect(getByText(/wagamama/i)).toBeTruthy();
    expect(getByText(/bar buritto/i)).toBeTruthy();
  });
});
