import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  console.info("Hi there");
  res.send("hi there!");
});

export { router as signoutRouter };
