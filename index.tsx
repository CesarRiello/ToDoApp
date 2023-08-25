const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to To DO with Bun!");
  },
});

console.log(`Listening on localhost:${server.port}`);
