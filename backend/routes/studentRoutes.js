import express from "express";
import {
  createStudent,
  deleteStudent,
  getStudents,
  seedStudents,
  updateStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.post("/seed", seedStudents);

export default router;
