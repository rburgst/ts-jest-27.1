import { mocked } from "ts-jest/utils";

import * as config from "../config";

jest.mock("../config");

describe("uses-config", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be able to override getBoolean", () => {
    const configGetMock = mocked(config.getBoolean).mockImplementation(() => {
      console.log("called mock");
      return true;
    });

    jest.isolateModules(() => {
      require("../uses-config");
    });

    expect(configGetMock).toBeCalledTimes(1);
  });
});
