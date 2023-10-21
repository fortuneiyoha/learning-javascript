# Lesson 14 - Async & Await

`async` and `await` makes server request calls easy.

## Syntax

### Server Promises 1

1. `fetch()` - Used to get data from a URL
2. `.then()` - Handles the data gotten from the request. And returns a **promise**. It takes a callback functions. To utilize the data, it gets converted to **JSON**

### Server Promises 2

1. `async` - Define an asynchronous call to fetch data from a server
2. `await` - Returns a promise after request is complete

#### Example [With fetch and then]

```js
function getUserFirstName() {
  fetch(apiUrl)
    .then((res) => res.json)
    .then((json) => console.log(json[0]))
    .catch((error) => console.log("Failed to get firstName"));
}

getUserFirstName();
```

#### Example [With async and await]

```js
async function getUserFirstName() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  console.log(json[0]);
}

getUserFirstName();
```

## Async & Await [Challenge]

Creating a Promise

#### Example

```js
function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 3000);
  });
}

// resolveAfter3Seconds().then((data) => console.log(data));

// =======================

async function getAsyncData() {
  const result = await resolveAfter3Seconds();
  console.log(result);
}

getAsyncData();
```
