require("../src/data.js");

describe("order names function", () => {
  it("is a function", () => {
    expect(typeof orderNames).toBe("function");
  });

  it("filter champions function/position", () => {
    expect(window.app.filterData(
      [{ championName: "Aatrox", position: "Fighter,Tank", title: "the Darkin Blade" }, {championName: "Caitlyn", position: "Marksman", title: "the Sheriff of Piltover"}], "Tank", "position")
      .toBe([{ championName: "Aatrox", position: "Fighter,Tank", title: "the Darkin Blade" }])
    );
  }
  );
});