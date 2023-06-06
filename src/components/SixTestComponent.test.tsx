import { render, screen } from "@testing-library/react";
import SixTestComponent from "./SixTestComponent";
import { server } from "../mocks/server";

describe("Testing HTTP", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("El componente se renderiza", async () => {
    render(<SixTestComponent />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
