import express from "express";

import apiRouter from "./api";
import studentRouter from "./student";
import StudentLoginRouter from "./student"
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";
const studentRoot = "/api/student";
const StudentLoginRoot = "/api/login"

const app = express();

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use(studentRoot, studentRouter);
app.use(StudentLoginRoot,StudentLoginRouter)
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));
app.use(clientRouter(studentRoot));

app.use(logErrors());

export default app;
