import connectToMongo from "../src/db/index.js";
import { app } from "../src/app.js";

let mongoConnectionPromise;

const ensureMongoConnection = () => {
  if (!mongoConnectionPromise) {
    mongoConnectionPromise = connectToMongo();
  }

  return mongoConnectionPromise;
};

export default async function handler(req, res) {
  await ensureMongoConnection();
  return app(req, res);
}
