import express from 'express';
export const midiwag = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module

// change work template to book name
midiwag.get("/addMidiwag", function async(req, res) {
    let book = {};
    let chapter = {};

    res.send("template Added");
});



//module.exports = copper;