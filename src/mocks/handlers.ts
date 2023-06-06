import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "Name one" },
        { name: "Name two" },
        { name: "Name three" },
      ])
    );
  }),
];
