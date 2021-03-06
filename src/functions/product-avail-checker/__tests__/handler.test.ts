import { handler } from "../app";

test("check https://www.apple.com/my/iphone-13-pro/", async () => {
  expect(
    await handler({
      url: "https://www.apple.com/my/iphone-13-pro/",
    })
  ).toStrictEqual({
    isAvailable: true,
    url: "https://www.apple.com/my/iphone-13-pro/",
  });
});

test("check https://www.apple.com/my/macbook-pro-14-and-16/", async () => {
  expect(
    await handler({
      url: "https://www.apple.com/my/macbook-pro-14-and-16/",
    })
  ).toStrictEqual({
    isAvailable: true,
    url: "https://www.apple.com/my/macbook-pro-14-and-16/",
  });
});

test("check https://www.apple.com/macbook-pro-14-and-16/", async () => {
  expect(
    await handler({
      url: "https://www.apple.com/macbook-pro-14-and-16/",
    })
  ).toStrictEqual({
    isAvailable: true,
    url: "https://www.apple.com/macbook-pro-14-and-16/",
  });
});

test("check https://www.apple.com/my/airpods-3rd-generation/", async () => {
  expect(
    await handler({
      url: "https://www.apple.com/my/airpods-3rd-generation/",
    })
  ).toStrictEqual({
    isAvailable: true,
    url: "https://www.apple.com/my/airpods-3rd-generation/",
  });
});

test("check https://www.apple.com/my/apple-watch-series-7/", async () => {
  expect(
    await handler({
      url: "https://www.apple.com/my/apple-watch-series-7/",
    })
  ).toStrictEqual({
    isAvailable: true,
    url: "https://www.apple.com/my/apple-watch-series-7/",
  });
});
