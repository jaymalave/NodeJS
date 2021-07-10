const router = require('express').Router()
const User = require('../models/User')

const Joi = require('joi')

const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
}

router.post('/register', async (req, res) => {

    // const error = schema.validate(req.body)

    // if (error) return res.status(400).send(error.details[0].message)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try{
      const savedUser = await user.save()
      console.log(savedUser)
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router