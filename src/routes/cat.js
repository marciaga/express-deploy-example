import express from "express";

const router = express.Router();

export const cats = [
  {
    name: "Pepper",
    personality: "troublemaker",
    id: 123,
  },
  {
    name: "Tron",
    personality: "extra spicy",
    id: 5709,
  },
];

router.use((req, res, next) => {
  console.log("Time ", Date.now());
  next();
});

router.get('/', (req, res) => {
  res.json({ cats });
});

export default router;