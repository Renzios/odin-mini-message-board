const db = require("../models/db");

async function getMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", {
        title: "Mini Messageboard",
        messages: messages,
    });
};

async function getForm(req, res) {
    res.render("form");
};

async function postForm(req, res) {
    const { text, user } = req.body;
    db.addMessage(text, user);
    res.redirect("/");
};

module.exports = {
    getMessages,
    getForm,
    postForm,
};