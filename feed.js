const mongoose = require('mongoose');
const Content = require('./models/Content');
mongoose.connect('mongodb+srv://2004dikshityadav:pRmbupBnazgNPyrt@cluster0.nyw7aq0.mongodb.net/technixcrm?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");

    const newContent = new Content({
      hero: {
        heading: "Welcome to Technix-CRM",
        subtext: "Transform your business with our CRM software",
        highlights: [
          "Easy to use",
          "Powerful insights",
          "Seamless integrations"
        ]
      },
      features: [
        {
          title: "Real-time Analytics",
          description: "Get instant insights with powerful real-time data analysis.",
          image: "https://th.bing.com/th/id/OIP.XH4j0HG4FVnlmO8jeE7UlQHaFy?w=182&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
          title: "Automated Workflows",
          description: "Streamline your processes with easy-to-automate workflows.",
          image: "https://adynamics.com.my/wp-content/uploads/2022/05/crm-integration.png"
        },
        {
          title: "CRM Integrations",
          description: "Integrate your CRM with a wide range of tools to enhance efficiency.",
          image: "https://adynamics.com.my/wp-content/uploads/2022/05/crm-integration.png"
        }
      ],
      targetUsers: [
        "Small Businesses",
        "Large Enterprises",
        "Startups"
      ]
    });

    // Save the document to the database
    newContent.save()
      .then(() => {
        console.log("Content saved successfully");
        mongoose.disconnect();  // Close the connection after saving
      })
      .catch(err => {
        console.error("Error saving content:", err);
        mongoose.disconnect();
      });

  })
  .catch(err => {
    console.error("Error connecting to database:", err);
  });
