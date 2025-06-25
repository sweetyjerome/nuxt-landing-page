export default defineEventHandler(async (event) => {
  return JSON.stringify({
    Hello: "World",
  });
});
