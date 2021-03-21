import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  console.info("Hi there");
  res.send("hi there!");
});

export { router as currentUserRouter };
