import { User } from '../model/authMode.js'

import bcryptjs from 'bcryptjs'
import { jwtCreator } from '../libs/jwtCreator.js'

export const signIn = async (req, res) => {
  const { email, password, username } = req.body

  try {
    if (password.length < 6) {
      return res.status(403).json('Password must to be almos 6 characters')
    }

    const hashPassword = await bcryptjs.hash(password, 10)
    const newUser = new User({
      email, password: hashPassword, username
    })
    const savedUser = await newUser.save()

    const userId = JSON.stringify(savedUser._id)
    if (savedUser) {
      const token = jwtCreator(userId)

      res.cookie('token', token)
    } else {
      return res.status(400).json('Saved process unsuccesfully')
    }

    res.status(200).json('User created succesfully')
  } catch (error) {
    console.log(error)
    res.status(404).json('Error SignIn')
  }
}

export const logIn = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      return res.status(404).json('Falta data')
    }
    if (password.length < 6) {
      return res.status(403).json('Password must to be almos 6 characters')
    }
    const userExist = await User.findOne({ email })
    if (!userExist) {
      return res.status(400).json('User email not found')
    }

    const passwordMatch = await bcryptjs.compare(password, userExist.password)
    if (!passwordMatch) {
      return res.status(400).json('Credentials error')
    }

    const token = jwtCreator(userExist._id)

    res.cookie('token', token)

    res.json({ message: 'Bienvenido', email, password })
  } catch (error) {
    return res.status(400).json(error)
  }
}

export const logOut = (req, res) => {
  try {
    res.cookie('token', '')
    return res.status(200).json('We will wait for you')
  } catch (error) {
    console.log(error)
    return res.status(404).json('LOG OUT FALL DOWN')
  }
}
