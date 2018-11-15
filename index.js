function candy(letters) {
  let output = letters;

  for (;;) {
    let previousLength = output.length;
    output = output.replace(/([a-zA-z])\1{2,}/g, "");
    let nextLength = output.length;
    if (previousLength === nextLength) {
      break;
    }
  }

  return output;
}

candy("AABBCCCCBDDDADB");
