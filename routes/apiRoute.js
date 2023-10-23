import express from "express";
import { pdfController } from "../controller/apiController.js";
//payment routes
const router = express.Router()



router.post("/route", pdfController)


export default router