import React from "react";
import { render, screen, getByTestId } from "@testing-library/react";
import App from "../App";
import Dashboard from "../page/Dashboard";

const fakeVenues = [
  {
    id: "1234",
    name: "test",
    categories: [{ name: "test" }],
    location: { city: "test", address: "12 road test" },
  },
  {
    id: "12345",
    name: "test2",
    categories: [{ name: "test2" }],
    location: { city: "test2", address: "12 road test2" },
  },
];

it("App loads and show dashboard", async () => {
  render(<App />);
  await screen.findAllByText("Dashboard");
});

it("should render GetVenues if no venues passed to dashboard", async () => {
  const { container } = render(<Dashboard />);
  getByTestId(container, "btn-submit");
});

it("should render Venues List if venues passed to dashboard", async () => {
  const { container } = render(<Dashboard venuesTest={fakeVenues} />);
  getByTestId(container, "card-0");
});
