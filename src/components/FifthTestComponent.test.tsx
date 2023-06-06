import { render, screen } from "@testing-library/react";
import FifthTestComponent from "./FifthTestComponent";
import EventUser from "@testing-library/user-event";

describe("Mock de funciones", () => {
  test("Mock funciones del componente", async () => {
    EventUser.setup();
    const increment = vi.fn();
    const decrement = vi.fn();
    render(
      <FifthTestComponent
        initialCount={0}
        increment={increment}
        decrement={decrement}
      />
    );
    await EventUser.click(screen.getByRole("button", { name: "Increment" }));
    await EventUser.click(screen.getByRole("button", { name: "Decrement" }));
    expect(increment).toBeCalledTimes(1);
    expect(decrement).toBeCalledTimes(1);
  });
});
