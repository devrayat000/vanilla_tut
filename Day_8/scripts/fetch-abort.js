const fetchEl = document.getElementById("fetch");
const cancelEl = document.getElementById("cancel");

let abortController;

async function main() {
  fetchEl.addEventListener("click", async () => {
    const posts = await getPosts();
    console.log("posts:", posts);
  });

  cancelEl.addEventListener("click", () => {
    if (abortController) abortController.abort();
    console.log("Cancelled");
  });
}

async function getPosts() {
  abortController = new AbortController();
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    signal: abortController.signal,
  }).catch(console.log);
  const posts = await res.json();

  return posts;
}

main();
