import { Router } from "express";
import query from "./db.js";

const router = Router();

router.post("/", async (req, res) => {
	try {
		const { subject } = req.body;
		const insertQuery =
			"INSERT INTO subjects (subject) VALUES ($1) RETURNING *";
		const values = [subject];
		const result = await query.query(insertQuery, values);
		res.status(200).json(result.rows[0]);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while creating the subject" });
	}
});

router.get("/", async (req, res) => {
	try {
		const selectQuery = "SELECT id, subject, comment FROM subjects";
		const result = await query.query(selectQuery);
		res.status(200).json(result.rows);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while fetching the subject" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const selectQuery = "SELECT id, subject FROM subjects WHERE id = $1";
		const result = await query.query(selectQuery, [id]);
		if (result.rows.length === 0) {
			res.status(404).json({ error: "subject not found" });
		} else {
			res.status(200).json(result.rows[0]);
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while fetching the subject" });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const { subject } = req.body;
		const updateQuery = "UPDATE subjects SET subject = $1 RETURNING *";
		const values = [subject, id];
		const result = await query.query(updateQuery, values);
		if (result.rows.length === 0) {
			res.status(404).json({ error: "Subject not found" });
		} else {
			res.status(200).json(result.rows[0]);
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while updating the subject" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const deleteQuery = "DELETE FROM subjects WHERE id = $1 RETURNING *";
		const result = await query.query(deleteQuery, [id]);
		if (result.rows.length === 0) {
			res.status(404).json({ error: "subject not found" });
		} else {
			res.status(200).json({ message: "subject deleted successfully" });
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while deleting the subject" });
	}
});

export default router;
