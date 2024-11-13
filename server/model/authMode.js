import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    minLength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6
  }
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)
