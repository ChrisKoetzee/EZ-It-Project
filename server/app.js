import express from "express";

import apiRouter from "./api";
import studentRouter from "./student";
import teacherRouter from "./teacher";
import subjectsRouter from "./subjects";
import subjectGradesRouter from "./subjectGrades";
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
const teacherRoot = "/api/teacher";
const subjectsRoot = "/api/subjects";
const subjectGradesRoot = "/api/grades";

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
app.use(teacherRoot, teacherRouter);
app.use(subjectsRoot, subjectsRouter);
app.use(subjectGradesRoot, subjectGradesRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));
app.use(clientRouter(studentRoot));
app.use(clientRouter(teacherRoot));
app.use(clientRouter(subjectsRoot));
app.use(clientRouter(subjectGradesRoot));

app.use(logErrors());

export default app;
