import { RequestHandler, rest } from 'msw';

export const randomUsers: RequestHandler = rest.get(
  `https://randomusers.me/api/?results=10`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            login: {
              uuid: '123',
            },
            name: {
              first: 'John',
              last: 'Doe',
            },
            email: 'cineva@ceva.com',
            phone: '1234567890',
          },
        ],
      })
    );
  }
);
