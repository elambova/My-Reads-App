import coverUrl from "../Components/Content/MainPage/Book";

describe("Books App", function () {
  it("cover book", function () {
    expect(coverUrl).toBeDefined();

    expect(coverUrl.type).toBe(undefined);
  });
});
