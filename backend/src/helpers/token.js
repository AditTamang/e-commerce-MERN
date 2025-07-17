import jwt from "jsonwebtoken";

const createToken = (payload) => {
  return jwt.sign(payload, constant.JWT_SECRET);
};

export { createToken };

export const verifyToken = (token) => {
  return jwt.verify(token, constant.JWT_SECRET);
};
