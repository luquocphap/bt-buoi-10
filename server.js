import express from "express"
import rootRouter from "./src/routers/root.router.js"
const app = express()
const port = 3000

app.use("/api",rootRouter);

app.listen(port, () => {
  console.log(`Đang lắng nghe tại port ${port}`)
})
