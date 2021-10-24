import axios from "axios";
import { handler, sendMessage } from "../app.js";

// jest.mock("axios");
// describe("mock sendMessage", () => {
//   it("send message successfully to Discord", async () => {
//     const data = "test";

//     axios.post.mockImplementationOnce(() => Promise.resolve(data));

//     await expect(
//       sendMessage("Please ignore this message. This is a unit test.")
//     ).resolves.toEqual(data);
//   });
// });

describe("sendMessage", () => {
  it("send message successfully to Discord", async () => {
    await expect(
      sendMessage("Please ignore this message. This is a unit test.")
    );
  });
});

test("run handler", async () => {
  await handler({
    content: "Please ignore this message. This is an integration test.",
  });
});

// test("error handler", async () => {
//   await handler({});
// });
