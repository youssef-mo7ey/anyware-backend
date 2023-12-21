const mongoose = require('mongoose');
const { Schema } = mongoose;

const announcementSchema = new Schema({
  title: String, 
  author: String,
  body: String,
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports= Announcement;