import express from "express";
import apiRouter from "./api";
import loginRouter from "./login";
import studentRouter from "./student";
import teacherRouter from "./teacher";
import subjectsRouter from "./subjects";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";
const apiRoot = "/api";
const loginRoot = "/api/login";
const studentRoot = "/api/student";
const teacherRoot = "/api/teachers";
const subjectsRoot = "/api/subjects";
const app = express();

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use(loginRoot, loginRouter);
app.use(studentRoot, studentRouter);
app.use(teacherRoot, teacherRouter);
app.use(subjectsRoot, subjectsRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));
app.use(clientRouter(studentRoot));
app.use(clientRouter(teacherRoot));
app.use(clientRouter(subjectsRoot));
app.use(logErrors());

export default app;
