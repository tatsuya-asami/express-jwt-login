import express from "express";
import "./db/index";
import { logError } from "./middleware/logger";
import * as user from "./routers/user";
import * as notFound from "./routers/notFound";

export const app = express();
app.use(express.json());

app.use(user.router);
app.use(notFound.router);

app.use(logError);
