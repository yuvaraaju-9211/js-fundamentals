/** shuffles elements randomly in each call */

function main() {
  const questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
  ];
  function shuffle(arr) {
    return function () {
      //Write your code below
      result = Array.from(arr);
      for (var i = result.length - 1; i > 0; i--) {
        var index = Math.floor(Math.random() * i);
        //swap
        var tmp = result[index];
        result[index] = result[i];
        result[i] = tmp;
      }
      // console.log(result);
      return result;
    };
  }
  return shuffle(questions);
}

const func = main();
console.log(func());
