const express = require("express");
const { AddContact, GetContacts, DeleteContact, UpdateContact, GetOneContact } = require("../controllers/contact");
const ContactRoutes = express.Router();


ContactRoutes.post("/", AddContact);

ContactRoutes.get("/getcontacts", GetContacts);

ContactRoutes.delete("/deletecontact/:id", DeleteContact);

ContactRoutes.put("/updatecontact:id", UpdateContact);

ContactRoutes.get("/:id", GetOneContact);

module.exports = ContactRoutes;