import mongoose, { Schema } from 'mongoose';

// create a NoteSchema with a title field
const NoteSchema = new Schema({
  title: String,
  text: String,
  x: Number,
  y: Number,
  color: String,
  createdBy: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  // timestamps: true,
});

// create NoteModel class from schema
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
