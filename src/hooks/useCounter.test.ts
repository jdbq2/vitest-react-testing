import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter custom hook", () => {
  test("el inicial count deberia ser 0", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });
  test("Incrementar la cuenta", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(11);
  });
  test("Decrementar la cuenta", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 11 },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(10);
  });
});
