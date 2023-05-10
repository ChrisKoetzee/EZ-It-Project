import express from "express";

import apiRouter from "./api";
import studentRouter from "./student";
import config from "./utils/config";
import studentAuthRouter from "./studentAuth"
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";
const studentRoot = "/api/student";


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
app.use("/api/auth", studentAuthRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));
app.use(clientRouter(studentRoot));

app.use(logErrors());

export default app;
