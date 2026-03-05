import express from "express"
import rootRouter from "./src/routers/root.router.js"
import { appError } from "./src/common/helpers/app-error.helper.js";
import { prisma } from "./src/common/prisma/connect.prisma.js";
const app = express()
const port = 3000

prisma

app.use("/api",rootRouter);
app.use(appError);

app.listen(port, () => {
  console.log(`Đang lắng nghe tại port ${port}`)
})
