import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
  console.log(process.env.ACCESS_TOKEN_SECRET);
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

//JWTs allow us to authenticate
//a user and guarantee that other requests will
//be made in an authenticated way, being possible
//to restrict access to resources and services
//with different levels of permissions.
