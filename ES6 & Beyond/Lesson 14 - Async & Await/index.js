const apiUrl = "https://url_to_json_placeholders.com/path";

// SERVER PROMISES
// function getUserFirstName() {
//   fetch(apiUrl)
//     .then((res) => res.json)
//     .then((json) => console.log(json[0]))
//     .catch((error) => console.log("Failed to get firstName"));
// }

// getUserFirstName();

// =======================

// Async & Await
// async function getUserFirstName() {
//   const response = await fetch(apiUrl);s
//   const json = await response.json();

//   console.log(json[0]);
// }

// getUserFirstName();

// =============================================================

// Async & Await [Challenge]

function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 3000);
  });
}

async function getAsyncData() {
  const result = await resolveAfter3Seconds();
  console.log(result);
}

getAsyncData();
