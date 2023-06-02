import { Router } from "express";
import query from "./db.js";
const router = Router();
router.post("/table", (req, res) => {
	query
		.query(
			"CREATE TABLE IF NOT EXISTS students (id serial PRIMARY KEY, fullNames VARCHAR(50) NOT NULL, surname VARCHAR(50) NOT NULL, gender VARCHAR(10) NOT NULL, dateOfBirth DATE NOT NULL, email VARCHAR(150) NOT NULL, phoneNumber INTEGER  NOT NULL, password VARCHAR (10))"
		)
		.then((result) => res.status(200).json(result.command))
		.catch((error) => res.status(400).send(error));
});
router.post("/new", (req, res) => {
	const {
		fullNames,
		surname,
		gender,
		dateOfBirth,
		email,
		phoneNumber,
		password,
	} = req.body;
	const Query =
		"INSERT INTO students (fullNames, surname, gender, dateOfBirth, email, phoneNumber, password ) VALUES($1, $2, $3, $4, $5, $6, $7)";
	query
		.query(Query, [
			fullNames,
			surname,
			gender,
			dateOfBirth,
			email,
			phoneNumber,
			password,
		])
		.then(() =>
			res.status(200).json({ message: "Student loaded successfully" })
		)
		.catch((error) =>
			res
				.status(400)
				.json({ error: "Information loaded incorrectly - " + error.message })
		);
});
router.get("/", (req, res) => {
	query
		.query(
			"SELECT id, fullNames, surname, gender, dateOfBirth, email, phoneNumber FROM students"
		)
		.then((result) => res.json(result.rows))
		.catch((error) => res.status(400).json(error));
});

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const studentQuery =
			"SELECT fullnames, surname, dateofbirth, email, gender, phonenumber FROM students WHERE id = $1";
		const studentResult = await query.query(studentQuery, [id]);
		if (studentResult.rows.length === 0) {
			res.status(404).json({ error: "Student not found" });
		} else {
			const subjectsQuery =
				"SELECT so.subject, g.grade, g.comment FROM students s JOIN subjects so ON s.id = so.student_id LEFT JOIN grades g ON s.id = g.student_id AND so.id = g.subject_id WHERE s.id = $1;";
			const subjectsResult = await query.query(subjectsQuery, [id]);
			const student = studentResult.rows[0];
			const subjects = subjectsResult.rows;
			res.status(200).json({ student, subjects });
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while fetching the student profile" });
	}
});

router.delete("/:id", (req, res) => {
	const id = req.params.id;
	query.query("DELETE FROM students WHERE id=$1", [id]).then(() => {
		query.query("COMMIT", () => {
			res.status(200).json({ error: "Successfully removed" });
		});
	});
});
router.put("/:id", (req, res) => {
	const id = req.params.id;
	const { fullNames, surname, gender, dateOfBirth, email, phoneNumber } =
		req.body;
	query
		.query(
			"UPDATE students SET fullNames=$1, surname=$2, gender=$3, dateOfBirth=$4, email=$5, phoneNumber=$6 WHERE id=$7 RETURNING *",
			[id, fullNames, surname, gender, dateOfBirth, email, phoneNumber, id]
		)
		.then(() => {
			query.query("COMMIT", (err) => {
				if (err) {
					res.send(400).json(err.stack + "Error in update of details");
				} else {
					res.send(200).json({ message: "Student details Updated" });
				}
			});
		})
		.catch((error) => {
			query.query("ROLLBACK", (err) => {
				if (err) {
					res.status(400).json("Rolling back the transaction" + err.stack);
				}
				res.status(500).json(error);
			});
		});
});
export default router;
