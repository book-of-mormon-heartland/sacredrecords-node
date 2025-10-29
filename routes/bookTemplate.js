import express from 'express';
export const template = express.Router();
import 'dotenv/config'; 
import { db, addBook, removeBook, addChapter, removeChapter, addChapterText, removeChapterText, addChapterAudio, removeChapterAudio } from "../database/database.js"; // Import the database module

// change work template to book name
template.get("/addTemplate", function async(req, res) {
    let book = {};
    let chapter = {};


    book = {
        id: "   -book-into-en",
        title: "",
        subTitle: "",
        image: "",
        thumbnail: " ",  
        thumbnailTitle: " ",
        Description: "",
        priceText: "Subscription",
        price: 9.95,
        isParent: false,
        hasChildBooks: false,
        order: 1,
        parent: "   -en",
        visible: true,
        language: "en",
        category: "quetzal-condor",
        discountCode: "",
        discountPrice: "1000",
        discountPriceText: "Subscription"
    }
    //removeBook(book);
    addBook(book);
   

   chapter = {
        id: " -book- -chapter-1-en",
        title: "Chapter 1",
        subTitle: "",
        parent: " -book-1-en",
        order: 1,
        visible: true
    }
    //removeChapter(chapter);
    addChapter(chapter);
    chapter = {
        id: " -book- -chapter-1-en",
        title: "Chapter 1",
        subTitle: " ",
        parent: " -book- -en",
        order: 1,
        visible: true,
        previousChapter: "",
        followingChapter: "yahawzhowaa-book-9-chapter-2-en",
        content: [
        ],
    }
    //removeChapterText(chapter);
    //removeChapterAudio(chapter);
    addChapterText(chapter);
    addChapterAudio(chapter);



    res.send("template Added");
});



//module.exports = copper;