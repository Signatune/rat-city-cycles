function main() {
  const hello = document.createElement("div");

  hello.textContent = "rat city cycles is the best";

  return hello;
}

document.body.appendChild(main());
