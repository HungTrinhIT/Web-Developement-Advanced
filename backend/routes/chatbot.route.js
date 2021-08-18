require("dotenv").config();
const express = require("express");
const router = express.Router();
const chatbotModel = require("../models/chatbot.model");

router.post("/webhook", chatbotModel.postWebhook);
router.get("/webhook", chatbotModel.getWebhook);

module.exports = router;
