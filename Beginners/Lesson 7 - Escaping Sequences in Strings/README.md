# Lesson 7 - Escaping Sequences in Strings

Escaping sequences mean adding exceptions to part of a code.

Sequences like tabs, backspace, e.t.c can be executed and run using escape characters.

```js
/******
 CODE OUTPUT

 \'   single quote
 \"   double quote
 \\   backslash
 \n   newline
 \r   carriage return
 \t   tab
 \b   backspace
 \f   form feed
 ******/
```

## single quote

### Example

````js
var myStr = "First Line\n\t\\Second Line\nThird Line";

console.log(myStr);```
````
