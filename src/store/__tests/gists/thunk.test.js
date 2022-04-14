import {
  getGists,
  getGistsStart,
  getGistsSucess,
  getGistsError,
} from "../../gists";

describe("get gists thunk", () => {
  it("success", async () => {
    const PAGE = 2;

    const dispatch = jest.fn();
    const getPublicGistsApi = jest.fn().mockResolvedValue({ data: "ok" });

    const thunk = getGists(PAGE);

    await thunk(dispatch, null, { getPublicGistsApi });

    expect(getPublicGistsApi).toBeCalledTimes(1);
    expect(getPublicGistsApi).toBeCalledWith(PAGE);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, getGistsSucess("ok"));
  });
  it("error", async () => {
    const PAGE = 2;
    const ERROR = { error: "test error" };

    const dispatch = jest.fn();
    const getPublicGistsApi = jest.fn().mockRejectedValue(ERROR);

    const thunk = getGists(PAGE);

    await thunk(dispatch, null, { getPublicGistsApi });

    expect(getPublicGistsApi).toBeCalledTimes(1);
    expect(getPublicGistsApi).toBeCalledWith(PAGE);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, getGistsError(ERROR));
  });
});
