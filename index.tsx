import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const BaseHtml = ({ children }: elements.Children) => `
  <!DOCTYPE html>
  <html dir="ltr" lang="pt-br" class="">
    <head>
        <meta charset="UTF-8"/>
        <title>Elysia</title>

        <script src="https://unpkg.com/htmx.org@1.9.4"></script>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    ${children}
  </html>
`;

const server = new Elysia()
  .use(html)
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <body class="flex w-full h-screem justify-center items-center">
          <button hx-post="/api" hx-swap="outerHTML">
            Clica aqui
          </button>
        </body>
      </BaseHtml>
    )
  )
  .post("/api", () => <div class="text-blue-600">Olá mundo</div>)
  .listen(3000);

console.log(
  "I am alive on port 3000",
  `http://${server.server?.hostname}:${server.server?.port}`
);
