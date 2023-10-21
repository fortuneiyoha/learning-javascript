// Example 1
function caseInSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "Number does not match condition";
      break;
  }

  return answer;
}

console.log(caseInSwitch());

// Example 2
function switchOfStuff(val) {
  var answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer =
        "Type: a, b, c\nto get the name of an animal that starts with that letter";
  }

  return answer;
}

console.log(switchOfStuff("b"));

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "Pass in a digit from 1-9 to get answer of [Low, Mid, High]";
  }

  return answer;
}

console.log(sequentialSizes(2)); // Outputs: Low
