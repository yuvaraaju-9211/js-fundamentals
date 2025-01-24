/** String Traversal */

const str = "Javascript is an amazing language";

function countChars(str, ch) {
  let chCnt = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === ch) {
      chCnt++;
    }
  }
  console.log(`number of ${ch}'s: ${chCnt}`);
  return chCnt;
}

countChars(str, " ");


