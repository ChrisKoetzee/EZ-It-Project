import { Router } from "express";
import query from "./db.js";

const router = Router();

router.post("/", async (req, res) => {
	try {
		const { grade } = req.body;
		const insertQuery = "INSERT INTO Grades (grade) VALUES ($1) RETURNING *";
		const values = [grade];
		const result = await query.query(insertQuery, values);
		res.status(200).json(result.rows[0]);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while creating the grade" });
	}
});

router.get("/", async (req, res) => {
	try {
		const selectQuery = "SELECT id, grade FROM grades";
		const result = await query.query(selectQuery);
		res.status(200).json(result.rows);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while fetching the grade" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const selectQuery = "SELECT id, grade FROM grades WHERE id = $1";
		const result = await query.query(selectQuery, [id]);
		if (result.rows.length === 0) {
			res.status(404).json({ error: "grade not found" });
		} else {
			res.status(200).json(result.rows[0]);
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while fetching the grade" });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const { grade } = req.body;
		const updateQuery = "UPDATE grades SET grade = $1 RETURNING *";
		const values = [grade, id];
		const result = await query.query(updateQuery, values);
		if (result.rows.length === 0) {
			res.status(404).json({ error: "Grade not found" });
		} else {
			res.status(200).json(result.rows[0]);
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while updating the grade" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const deleteQuery = "DELETE FROM grades WHERE id = $1 RETURNING *";
		const result = await query.query(deleteQuery, [id]);
		if (result.rows.length === 0) {
			res.status(404).json({ error: "grade not found" });
		} else {
			res.status(200).json({ message: "grade deleted successfully" });
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while deleting the grade" });
	}
});

export default router;
