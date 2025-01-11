import express from "express";
import cors from "cors";

const app = express()
app.use(cors({origin: "https://smart-list-back-end.vercel.app"}))

app.get("/hello", async (req, res) => {
    res.status(200).json({message: "hello nigga"})
})

app.listen(3000, () => {
    console.log("listening at http://localhost:3000")
})

export default app