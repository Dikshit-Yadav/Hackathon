# **Technix CRM - Website Redesign**

## **Project Overview**

Technix CRM is a modern and professional Customer Relationship Management (CRM) solution designed to help businesses manage their customer interactions, sales, and business operations. This project focuses on redesigning the homepage of Technix CRM to enhance user experience with a clean, modern, and professional look.

The redesigned homepage is built using **Node.js**, **Express.js**, **MongoDB (Mongoose)**, **EJS templating**, and **CSS** (no external frameworks like Bootstrap). The page includes sections such as:
- Product features
- Customer testimonials
- Pricing plans
- Demo booking form
- Contact form
- Free trial request form
- Light/dark mode toggle
- Smooth animations for enhanced user interaction
- Fully responsive design

This project aims to provide a sleek, intuitive, and professional first impression for users while also being feature-rich.

---

## **App Features**

The Technix CRM website redesign includes the following features:

- **Responsive Design**: The website adapts seamlessly across different screen sizes, providing a smooth experience on mobile, tablet, and desktop.
- **Dynamic Content**: Features such as pricing plans, customer support, and testimonials are dynamically displayed through EJS templating, making it easy to manage content.
- **Contact Forms**: Fully functional contact form and demo booking form for user interaction, integrated with backend email functionality.
- **Free Trial Request**: A dedicated section to request a free trial of the CRM platform.
- **User Authentication**: Includes login and sign-up functionality to allow users to access personalized features.
- **Animations**: Smooth animations for section transitions and button hover effects.
- **Dark/Light Mode Toggle**: Users can switch between light and dark modes.
- **SEO Optimization**: The website is optimized for better search engine visibility.
- **Modern Design**: Custom, modern design with a focus on ease of use and readability.

---

## **Technologies Used**

### **Frontend**
- **HTML5**
- **CSS3** (Custom styles, no external frameworks like Bootstrap)
- **EJS Templating Engine** (For rendering dynamic HTML on the server)

### **Backend**
- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework for Node.js)
- **MongoDB** (NoSQL database)
- **Mongoose** (MongoDB object modeling)
- **Nodemailer** (For sending emails from forms)

### **Animations & Styling**
- Pure CSS animations for smooth user interactions
- Custom CSS for layout, form designs, buttons, and section transitions

---

## **Project Structure**

Here is the folder structure of the project:

```
technix-crm/
│
├── 📁 models/
│   ├── Content.js          # Mongoose schema for storing dynamic homepage content
│   └── User.js             # Mongoose schema for user accounts (signup/login)
│
├── 📁 public/
│   ├── 📁 css/              # Custom stylesheets (style.css, animations, etc.)
│   ├── 📁 images/           # Static images used in website
│   └── 📁 js/               # Optional client-side scripts (form validation, etc.)
│
├── 📁 views/
│   ├── index.ejs           # Homepage view (renders dynamic content)
│   ├── contact.ejs         # Contact form page with success/error handling
│   ├── book-demo.ejs       # Demo booking form page
│   ├── thank-you.ejs       # Confirmation page after booking a demo
│   ├── login.ejs           # Login form page
│   ├── signup.ejs          # Signup form page
│   └── free-trial.ejs      # Page for users interested in free trial
│
├── .env                    # Stores sensitive environment variables (DB URI, email credentials)
├── .gitignore              # Hides node_modules, .env, and other files from Git
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation and setup instructions
└── app.js                  # Main Express app (handles routes, DB, views, email logic)
```

---

## **Core Features of Technix CRM Website**

1. **User Authentication (Login/Signup):**
   - Secure signup and login functionality, protecting user data with bcrypt-hashed passwords.
   
2. **Demo and Free Trial Booking:**
   - Allows users to schedule a CRM demo or sign up for a free trial, providing a risk-free experience.
   
3. **Contact Form:**
   - Intuitive form to allow visitors to easily reach out to the Technix CRM team, with backend integration using Nodemailer.

4. **Key Features of Technix CRM:**
   - Sales tracking, lead generation, marketing automation, and customer support tools.

5. **Pricing Plans:**
   - Three distinct pricing tiers for small businesses, professionals, and enterprises, with tailored features.

6. **Client Testimonials:**
   - Includes testimonials from satisfied clients to build trust and credibility.

7. **Analytics and Reporting:**
   - Robust analytics and reporting tools, allowing users to track performance and make data-driven decisions.

8. **Customer Support:**
   - Features a customer support section that emphasizes live chat, ticketing, and self-service portals.

---

## **✨ Features**

- 🔐 **User Authentication** – Secure signup and login using bcrypt-hashed passwords.
- 📩 **Contact Form** – Sends messages to admin using Nodemailer.
- 📅 **Demo & Free Trial Booking** – Users can schedule a CRM demo or try it for free.
- 📬 **Email Notifications** – Contact and demo forms send automated admin emails.
- 🎨 **Dynamic Homepage** – Loads content like hero text and features from MongoDB.
- 💼 **Pricing Plans** – Tiered pricing for Small Business, Professional, Enterprise.
- 📊 **Analytics & Reporting** – Explained on homepage with a focus on insights.
- 💬 **Client Testimonials** – Builds trust with real client feedback.
- 🤝 **Customer Support Section** – Highlights support tools like live chat and ticketing.
- 📱 **Responsive Design** – Mobile-first layout with CSS animations.
- 🛡️ **Environment Configuration** – Uses `.env` for secure config.

---

## **🛠️ Tech Stack**

- **Backend:** Node.js, Express
- **Frontend:** EJS Templates, HTML, CSS
- **Database:** MongoDB + Mongoose
- **Email:** Nodemailer
- **Templating Engine:** EJS
- **Authentication:** bcryptjs
- **Form Handling:** Express Middleware

---

## **⚙️ Installation**

### **Prerequisites**

1. **Node.js**: Ensure that you have Node.js installed. You can download it from [here](https://nodejs.org/).
2. **MongoDB**: You’ll need a MongoDB database. You can either use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-hosted database or set up a local MongoDB instance.

### **Installation Steps**

```bash
# Clone the repository
git clone https://github.com/Dikshit-Yadav/Hackathon
cd technix-crm-homepage

# Install dependencies
npm install

# Add environment variables
touch .env
# Add MONGODB_URI, EMAIL_USER, EMAIL_PASS, etc. to the .env file

# Run the server
npm start
```

---

## **Credits**

- **Open Source Tools/Dependencies**:
  - **Node.js** - JavaScript runtime used for the backend.
  - **Express.js** - Web framework for building the application.
  - **MongoDB** - Database used to store dynamic content.
  - **Mongoose** - MongoDB object modeling for Node.js.
  - **Nodemailer** - For sending emails from forms.
  - **bcryptjs** - For secure password hashing.