const express = require("express");
const path = require("path");
const multer = require("multer");
const upload = require("../Middlewares/Multer");

const {
  getAllCourses,
  getMyCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
  uploadNote,
  getCourseNotes,
  deleteNote,
} = require("../Controllers/CourseController");

const router = express.Router();

router.get("/list", getAllCourses);
router.post("/uploadNote", upload.single("Note"), uploadNote);
router.get("/:id", getCourseById);
router.get("/notes/:id", getCourseNotes);
router.delete("/notes/remove/:id", deleteNote);
router.get("/list/mine", getMyCourses);
router.post("/create", createCourse);
router.put("/update/:id", updateCourse);
router.delete("/delete/:id", deleteCourse);

module.exports = router;
