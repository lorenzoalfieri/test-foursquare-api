import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import App from "../App";

it("App loads and show dashboard", async () => {
  render(<App />);
  await screen.findAllByText("Dashboard");
});
