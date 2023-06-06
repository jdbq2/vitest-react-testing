import TestComponent from "./TestComponent";
import { render, screen } from "@testing-library/react";

describe("Test React-Library + Vitest Basico", () => {
  beforeEach(() => {
    render(<TestComponent />);
  });
  it("Debe renderizarce", () => {
    expect(screen.findByText("TestComponent")).toBeDefined();
  });
  it("Debe contener el checkbox por su role", () => {
    expect(screen.getByRole("checkbox")).toBeDefined();
  });
  it("Debe contenter un textbox por su name en el label", () => {
    expect(screen.getByRole("textbox", { name: "Bio" })).toBeDefined();
  });
  it("Debe contenter un H1 y un H2", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined();
    expect(screen.getByRole("heading", { level: 2 })).toBeDefined();
  });
  it("Debe contenter un textbox por su placeholder", () => {
    expect(screen.getByPlaceholderText("Your Name")).toBeDefined();
  });
  it("Debe contenter un text value", () => {
    expect(screen.getByDisplayValue("Your Name is:")).toBeDefined();
  });
  it("Debe contenter un text con un custom textID", () => {
    expect(screen.getByTestId("custom_testID")).toBeDefined();
  });
});
