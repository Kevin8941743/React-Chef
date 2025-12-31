import express from "express";
import cors from "cors";
import { getRecipeFromMistral } from "./ai.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/getRecipe", async (req, res) => {
  const { ingredients } = req.body;
  try {
    const recipe = await getRecipeFromMistral(ingredients);
    res.json({ recipe });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));