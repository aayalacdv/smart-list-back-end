import express from "express";

const app = express()

app.get("/", async (req, res) => {
    res.status(200).json({message: "hello nigga"})
})

app.listen(3000, () => {
    console.log("listening at http://localhost:3000")
})

export default app