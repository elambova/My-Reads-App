import BooksApp from "../App";

describe("Books App", function () {
  let result;

  beforeEach(async function () {
    result = await new BooksApp();
  });

  it("updateBookShelf to be defined", async function () {
    const result = await new BooksApp();
    expect(result.updateBookShelf).toBeDefined();
  });

  it("books", async function () {
    const result = await new BooksApp();
    expect(result.state).toBeDefined();

    expect(result.state).toBeInstanceOf(Object);
    expect(result.state.books.length).toBe(0);
  });
});
