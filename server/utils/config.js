import "dotenv/config";
import "dotenv/config";

export default {
	jwtSecret:"aa28ab6a998d8d5fe432dd60957351b9c8655435259cc73a0a216037490d812d",
	dbUrl: createDatabaseUrl(),
	logLevel: process.env.LOG_LEVEL ?? "info",
	port: parseInt(process.env.PORT ?? "3000", 10),
	production: process.env.NODE_ENV === "production",
};

function createDatabaseUrl() {
	if (process.env.DATABASE_URL) {
		return process.env.DATABASE_URL;
	}
	const host = process.env.DB_HOST ?? "";
	const name = process.env.DB_NAME ?? "";
	const password = process.env.DB_PASS ?? process.env.DB_PASSWORD ?? "";
	const port = process.env.DB_PORT ?? "5432";
	const username = process.env.DB_USER ?? process.env.DB_USERNAME ?? "";
	const userinfo = `${username}:${password}`;
	return `postgres://${
		userinfo !== ":" ? `${userinfo}@` : ""
	}${host}:${port}/${name}`;
}
