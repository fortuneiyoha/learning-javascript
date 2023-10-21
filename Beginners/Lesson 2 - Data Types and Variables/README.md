# Lesson 2 - Data Types and Variables

Data is anything meaningful to the computer

## Data Types

JavaScript provides 7 data types you can use when building.

1. undefined
2. null
3. boolean
4. string
5. symbol
6. number
7. object

### undefined

This is the default value for non-assigned variables.

### null

This means nothing. It can be assigned the value of a variable but **NOTE:** it means the variable stores nothing.

### boolean

A value of **true** or **false** is a boolean.

### string

Text or sequence of characters are **strings**

### symbol

A symbol is primitive value that is unique.

### number

This is an arithmetic value of numeral digits.

### object

An object is collection of **key - value** paired data.

## Variable

A variable enables a computer to store and manipulate data in a dynamic fashion.

It's basically an identifier/label to point to a data.

### Declaring variables

- var
- let
- const

The listed above are keywords used to declare variables.

### Example

```js
var name = "John";
```

#### Difference Between the variable declaration keywords

##### `var`

This keyword allows you to declare and assign a variable multiple times.

##### `let`

This keyword allows you to declare a variable once.

##### `const`

This keyword allows you to declare and assign a variable once.

#### Compare Scopes of the variable declaration keywords

##### `var`

The scope of `var` variables is global. But within a block is local.

##### `let`

The scope of `let` is local and set within the block it is initialized.

##### `const`

The `const` keyword is used to declare variables and it has all the features of `let`, but it is "read-only".
