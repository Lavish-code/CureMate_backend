// import express from "express";
// import { dbConnection } from "./database/dbConnection.js";
// import { config } from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import fileUpload from "express-fileupload";
// import { errorMiddleware } from "./middlewares/error.js";
// import messageRouter from "./router/messageRouter.js";
// import userRouter from "./router/userRouter.js";
// import appointmentRouter from "./router/appointmentRouter.js";

// const app = express();
// config(); // Load environment variables

// // Set up CORS
// app.use(
//   cors({
//     origin: [
//       'https://cure-mate-frontend-p77dsp5ce-lavish-s-projects.vercel.app',
//       'https://cure-mate-frontend-fwbn-ta7rwlvyr-lavish-s-projects.vercel.app'
//     ],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// // Handle preflight OPTIONS requests
// app.options("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   return res.sendStatus(200);
// });

// // Middleware setup
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // File upload setup
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// // Define API routes
// app.use("/api/v1/message", messageRouter);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/appointment", appointmentRouter);

// // Root route
// app.get("/", (req, res) => {
//   res.send("Backend is running successfully!");
// });

// // Connect to the database
// dbConnection();

// // Error middleware
// app.use(errorMiddleware);

// export default app;

import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();
config(); // Load environment variables

// Set up CORS
app.use(
  cors({
    origin: [
      'https://cure-mate-frontend-p77dsp5ce-lavish-s-projects.vercel.app',
      'https://cure-mate-frontend-fwbn-ta7rwlvyr-lavish-s-projects.vercel.app'
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true, // Allow cookies and credentials
  })
);

// Handle preflight OPTIONS requests
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  return res.sendStatus(200);
});

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File upload setup
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Define API routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Connect to the database
dbConnection();

// Error middleware
app.use(errorMiddleware);

export default app;

