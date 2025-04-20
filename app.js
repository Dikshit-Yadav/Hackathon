require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const path = require('path');
const Content = require('./models/Content');
const User = require('./models/User');


const app = express();

mongoose.connect("mongodb+srv://2004dikshityadav:pRmbupBnazgNPyrt@cluster0.nyw7aq0.mongodb.net/technixcrm?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
  try {
    const content = await Content.findOne();
    res.render('index', { content });
  } catch (err) {
    res.status(500).send('Error loading content');
  }
});

app.get('/contact-us', (req, res) => {
  res.render('contact', { title: "Contact Us" });
});

app.post('/contact-us', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, 
      pass: process.env.MAIL_PASS, 
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.MAIL_USER,
    subject: `📬 New Contact Form Message from ${name}`,
    text: `
You have received a new message from the contact form:

Name: ${name}
Email: ${email}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.render('contact', {
      title: "Contact Us",
      success: "✅ Thank you! Your message has been sent.",
    });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    res.render('contact', {
      title: "Contact Us",
      error: "❌ Something went wrong. Please try again later.",
    });
  }
});

app.get('/book-demo', (req, res) => {
  res.render('book-demo'); // Make sure 'book-demo.ejs' exists in your views folder
});

app.post('/book-demo', (req, res) => {
  const { name, email, company } = req.body;

  // Handle form logic: save to DB, send email, etc.
  console.log('Demo booked:', name, email, company);

  res.send('Thanks for booking a demo! We’ll contact you soon.');
});


app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid email or password');
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).send('Invalid email or password');
    }

    res.redirect('/');
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Server error');
  }
});



app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email is already registered');
    }

    const user = new User({
      name,
      email,
      password
    });

    await user.save();

    console.log(`New user signed up: ${name}, ${email}`);

    res.redirect('/login');
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send('Server error');
  }
});

app.get('/free-trial', (req, res) => {
  res.render('free-trial');
});

app.post('/get-demo', async (req, res) => {
  const { name, email, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Demo Request',
    text: `
      You have a new demo request from ${name} (${email}).

      Company: ${company || 'N/A'}
      Message: ${message || 'No message provided.'}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    } else {
      res.redirect('/thank-you');
    }
  });
});

app.get('/thank-you', (req, res) => {
  res.render('thank-you');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
