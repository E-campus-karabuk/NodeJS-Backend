const express = require("express");
const router = express.Router();

// Routers
const auth = require("./AuthRouter");
const studentRouter = require("./StudentRouter");
const academicianRouter = require("./AcademicianRouter");
const adminRouter = require("./AdminRouter");
const chatBotRouter = require("./ChatbotRouter");
const courseRouter = require("./CourseRouter");
const departmentRouter = require("./DepartmentRouter");
const facultyRouter = require("./FacultyRouter");
const seniorRouter = require("./SeniorGroupRouter");
const reportRouter = require("./ReportRouter");
const requestRouter = require("./RequestRouter");
const notificationRouter = require("./NotificationRouter");

// Routes
router.use("/auth", auth);
router.use("/student", studentRouter);
router.use("/senior", seniorRouter);
router.use("/faculty", facultyRouter);
router.use("/department", departmentRouter);
router.use("/course", courseRouter);
router.use("/academician", academicianRouter);
router.use("/admin", adminRouter);
router.use("/bot", chatBotRouter);
router.use("/report", reportRouter);
router.use("/request", requestRouter);
router.use("/notification", notificationRouter);

module.exports = router;
