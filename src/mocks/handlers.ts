import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL as string}songs`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          songs: [
            {
              id: "song-1",
              name: "Song 1",
              band: "Band 1",
            },
            {
              id: "song-2",
              name: "Song 2",
              band: "Band 2",
            },
          ],
        })
      );
    }
  ),
];
