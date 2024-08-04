import jwt from "jsonwebtoken";

export function ensureAuthenticated(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      message: "Token inválido",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    jwt.verify(token, process.env.APP_SECRET);
    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Token inválido",
    });
  }
}
