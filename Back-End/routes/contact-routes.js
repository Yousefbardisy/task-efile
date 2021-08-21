const express = require("express");
const Router = express.Router();
const {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact-controller");


Router.route("/")
  .get(getAllContacts)
  .post(createContact); 



Router.route("/:name")
  .get(getContact)
Router.route("/:id")
  .put(updateContact)
  .delete(deleteContact);
module.exports = Router;
