import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/client.js";
import { DATABASE_URL } from "../constant/app.constant.js";

const url = new URL(DATABASE_URL);

const adapter = new PrismaMariaDb({
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.substring(1),
    port: url.port,
    connectionLimit: 5
})

const prisma = new PrismaClient({adapter});

try {
  await prisma.$queryRaw`SELECT 1+1 AS result`;
  console.log('✅ [prisma] Connection has been established successfully.');
} catch (error) {
  console.error('❌ [prisma] Unable to connect to the database:', error);
}

export {prisma}