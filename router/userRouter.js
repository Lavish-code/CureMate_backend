// import express from "express";
// import {
//   addNewAdmin,
//   addNewDoctor,
//   getAllDoctors,
//   getUserDetails,
//   login,
//   logoutAdmin,
//   logoutPatient,
//   patientRegister,
// } from "../controller/userController.js";
// import {
//   isAdminAuthenticated,
//   isPatientAuthenticated,
// } from "../middlewares/auth.js";

// const router = express.Router();

// router.post("/patient/register", patientRegister);
// router.post("/login", login);
// router.post("/admin/addnew", addNewAdmin);
// router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
// router.get("/doctors", getAllDoctors);
// router.get("/patient/me", isPatientAuthenticated, getUserDetails);
// router.get("/admin/me", isAdminAuthenticated, getUserDetails);
// router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
// router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

// export default router;


import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getAllUsers,  // Import the new controller function
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

// Define routes
router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", addNewAdmin);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/doctors", getAllDoctors);
router.get("/users", getAllUsers); // New route to get all users
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

// Test route
router.get("/", (req, res) => {
  res.json({ message: "User routes are working" });
});

export default router;
