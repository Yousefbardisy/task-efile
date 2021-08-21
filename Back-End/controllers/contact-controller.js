const APIFearures = require("../utils/APIFeatures");
const Contact = require("../models/contact-model");
const catchAsyncError = require("../utils/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");


const getAllContacts = catchAsyncError(async (req, res, next) => {
  const features = new APIFearures(Contact.find(), req.query)
    .filter()
    .sort()
    .project()


  const lengthFeatures = new APIFearures(Contact.find(), req.query).filter();

  const contact = await features.query;
  const countQuery = await lengthFeatures.query;

  // Send response
  res.status(200).json({
    status: "success",
    contactsList: contact,
    count: contact.length,
    totalCount: countQuery.length,
  });
});


// get contact by name
const getContact = catchAsyncError(async (req, res, next) => {
  let contact = await Contact.find({ name: req.params.name });
  if (!contact) {
    if (!contact) {
      return next(new ErrorHandler("Contact not found", 404));
    }
  }

  res.status(201).json({
    status: "success",
    contact,
  });
});

// register a new contact
const contactObject = (req) => {

  let contactInfo = req.body;
  return contactInfo;
};
const createContact = catchAsyncError(async (req, res, next) => {
  let contactObj = contactObject(req);
  

  const contact = await new Contact(contactObj);
  let newContact = await contact.save();
 

  res.status(201).json({
      status: "success",
      Contact:newContact
     
    });
});

// update contact details
const updateContact = catchAsyncError(async (req, res, next) => {
  if (!req.contact) {
    next(new ErrorHandler("Unauthorized access", 400));
  }

  

  let contactObj = contactObject(req);
  let contact = await Contact.findOneAndUpdate(
    { _id: req.params.id },
    contactObj,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!contact) {
    return next(new ErrorHandler("contact not found", 404));
  }

  res.status(200).json({
    status: "success",
    userName: contact.name,
    Contact:contact

  });
});

const deleteContact = catchAsyncError(async (req, res, next) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    msg:"done "

  });

  if (!contact) {
    return next(new ErrorHandler("Contact not found", 404));
  }
});

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
