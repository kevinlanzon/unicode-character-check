function checkUnicode (string) {

  var search = string.search(/[^\x00-\x80]/g); // matches any character not in the ASCII range

  if (search !== -1) { // returns -1 if unicode chars are present
    return "There are unicode Characters in this text";
  } else {
    return "No unicode present in this text";
  }
}

checkUnicode("Unicode characters ﹣-”")
// some unicode chars “ ” - ﹣