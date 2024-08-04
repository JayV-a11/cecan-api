import dotenv from "dotenv";

dotenv.config();

export const defaultConnection = `${process.env.DATABASE_URL}`;
 