describe("Unicode", function() {

  var data = "Unicode characters ﹣-”";
  var unicode = checkUnicode(data);

  it("should display a message if unicode is present in string", function() {
    expect(unicode).toEqual("There are unicode Characters in this text");
  });

  it("should display a message if unicode is NOT present in string", function() {
    expect(checkUnicode("No unicode here")).toEqual("No unicode present in this text");
  });
});
