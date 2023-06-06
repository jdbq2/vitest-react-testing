import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThirdTestComponent from "./ThirdTestComponent";

describe("Test Eventos de Usuario", () => {
  beforeEach(() => {
    render(<ThirdTestComponent />);
  });
  test("El componente se renderiza correctamente", () => {
    expect(screen.getByRole("button", { name: "Increment" })).toBeDefined();
  });
  test("El primer valor de count es cero", () => {
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("0");
  });
  test("Contador Incrementa al presionar el boton", async () => {
    userEvent.setup();
    await userEvent.click(screen.getByRole("button", { name: "Increment" }));
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("1");
  });
  test("Devuleve el valor de 10 al hacer el type en el input y despues hacer el set", async () => {
    userEvent.setup();
    const inputNumber = screen.getByRole("spinbutton") as HTMLInputElement;
    await userEvent.type(inputNumber, "10");
    expect(inputNumber.value).toBe("10");
    await userEvent.click(screen.getByRole("button", { name: "Set" }));
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("10");
  });
  test("Se hace el Tab en el orden correcto", async () => {
    userEvent.setup();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    }) as HTMLButtonElement;
    const inputNumber = screen.getByRole("spinbutton") as HTMLInputElement;
    const setButton = screen.getByRole("button", {
      name: "Set",
    }) as HTMLButtonElement;

    await userEvent.tab();
    expect(document.activeElement).toBe(incrementButton);
    await userEvent.tab();
    expect(document.activeElement).toBe(inputNumber);
    await userEvent.tab();
    expect(document.activeElement).toBe(setButton);
  });
});
