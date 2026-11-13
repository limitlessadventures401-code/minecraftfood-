
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/test") {
      return Response.json({
        success: true,
        database: !!env.DB
      });
    }

    return env.ASSETS.fetch(request);
  }
};
