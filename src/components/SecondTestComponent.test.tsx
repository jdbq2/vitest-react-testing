import { render, screen } from "@testing-library/react";
import SecondTestComponent from "./SecondTestComponent";

describe("Testing Elementos que se espera que esten, los que no y los que van a aparecer de forma asincrona", () => {
  const skills = ["coding", "debbugging"];

  beforeEach(() => {
    render(<SecondTestComponent skills={skills} />);
  });
  it("Reconoce cuando elementos del mismo tipo renderiza", () => {
    expect(screen.getAllByRole("listitem")).toHaveLength(skills.length);
  });
  it("El boton Logout no esta en la pantalla", () => {
    expect(screen.queryByRole("button", { name: "Logout" })).toBeNull();
  });
  it("El texto se desplegara despues de un tiempo", async () => {
    expect(
      await screen.findByText("Show the Text", undefined, { timeout: 1100 })
    ).toBeDefined();
  });
});
