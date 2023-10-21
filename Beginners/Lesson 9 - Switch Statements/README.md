# Lesson 9 - Switch Statements

A switch statement test a value and can have many case statements which define various possible values.

## Syntax

- `switch` - the condition parameter. Checks for condition strictly. i.e it compares using the `===` operator
- `case` - runs a block of code if condition matches this case
- `break` - terminates the evaluation of a switch statement after evaluation of confirmed condition
- `default` - behaves like `else` statements

### Example 1

```js
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

console.log(caseInSwitch(1));
```

### Example 2

```js
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
```

## Multiple Identical Options in Switch Statements

There are times a `switch` statement should return the same value for different inputs. This can be achieved by omitting a block for `case` statements.

### Example

```js
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

console.log(sequentialSizes(2));
```
