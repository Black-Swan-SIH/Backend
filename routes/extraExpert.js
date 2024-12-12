import mongoose from "mongoose";
import  extraExperts from "../models/extraExperts.js";
import express from 'express';
import { extraExpertSchema } from "../utils/zodSchemas";
import { safeHandler } from "../middlewares/safeHandler";
import ApiError from "../utils/errorClass";
import e from "express";

const router = express.Router();

router.get("/giveme", safeHandler(async (req, res) => {
   const expertlist =req.body;
   if(!expertlist){
       throw new ApiError(400,"no experts found");
   }
   res.success(200,"everything good",expertlist);
}));
export default router;