if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublicKey)

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
//app.use(express.json())
app.use(express.static('public'))

vvvv

app.listen(3000)