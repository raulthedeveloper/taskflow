import "./styles/main.scss";

const app = document.querySelector<HTMLElement>("#app");

if (!app) {
  throw new Error("App element was not found.");
}

const message = document.createElement("p");
message.textContent = "TypeScript is ready. Let's build your todo app!";
app.append(message);
