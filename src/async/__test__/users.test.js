import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", () => {
    // TODO 13: add async test with manual mock
    const data = getUsers();
    return expect(data).resolves.toEqual({ name: "test" });
  });
});
