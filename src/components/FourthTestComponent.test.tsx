import { render, screen } from "@testing-library/react";
import FourthTestComponent from "./FourthTestComponent";
import AppProviders from "../AppProviders";

describe("Testing Providers", () => {
  it("Reconoce el tema del provider", () => {
    render(<FourthTestComponent />, {
      wrapper: AppProviders,
    });
    const H1Element = screen.getByRole("heading", {
      level: 1,
    }) as HTMLHeadingElement;
    expect(H1Element.textContent).toBe("dark");
  });
});
