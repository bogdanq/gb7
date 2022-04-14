function formatTimeStrings(strings) {
  if (strings.length > 1) {
    return `${strings[0]} - ${strings[strings.length - 1]}`;
  }

  if (strings.length) {
    return `${strings[0]} - Till tomorrow`;
  }

  return `None`;
}

describe("formatTimeStrings", () => {
  it("first case", () => {
    const result = formatTimeStrings([1, 2, 3, 4]);

    expect(result).toBe("1 - 4");
  });

  it("second case", () => {
    const result = formatTimeStrings([1]);

    expect(result).toBe("1 - Till tomorrow");
  });

  it("third case", () => {
    const result = formatTimeStrings([]);

    expect(result).toBe("None");
  });
});
