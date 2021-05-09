export const hostName =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000"
    : "https://quien-es-quien-backend.herokuapp.com";
