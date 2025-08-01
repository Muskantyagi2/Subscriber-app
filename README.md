# 🌟 Subscriber Management App

A beautiful and modern subscriber management application built with Node.js, Express, MongoDB, and featuring a stunning **Black Pearl & Rose Fog** glassmorphism theme.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-v18+-green.svg)
![MongoDB](https://img.shields.io/badge/mongodb-v6+-brightgreen.svg)
![Express](https://img.shields.io/badge/express-v4.18+-orange.svg)

## ✨ Features

- 🎨 **Modern Glassmorphism UI** with Black Pearl & Rose Fog theme
- 📱 **Fully Responsive** design that works on all devices
- 🔄 **CRUD Operations** - Create, Read, Update, Delete subscribers
- 📧 **Smart Email Validation** - Same email allowed for different channels
- 🚫 **Duplicate Prevention** - Prevents duplicate email+channel combinations
- 🎭 **Beautiful Animations** - Smooth transitions and hover effects
- 🌐 **RESTful API** structure
- 💾 **MongoDB Integration** with Mongoose ODM
- ⚡ **Real-time Error Handling** with user-friendly messages

## 🚀 Demo

The application includes:
- **Dashboard** with all subscribers in a beautiful table
- **Add Subscriber** form with glassmorphism styling
- **View/Edit/Delete** functionality with email verification
- **Error handling** with elegant notifications

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Template Engine:** EJS
- **Styling:** Pure CSS with Glassmorphism effects
- **Environment:** dotenv for configuration

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/subscriber-app.git
   cd subscriber-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3003
   # For local MongoDB
   MONGODB_URI=mongodb://localhost:27017/subscriber_app
   
   # For MongoDB Atlas (recommended)
   # MONGODB_URI=mongodb+srv://username:password@cluster-url/subscriber_app?retryWrites=true&w=majority
   ```

4. **Start MongoDB**
   
   **Option A: Local MongoDB**
   ```bash
   mongod
   ```
   
   **Option B: MongoDB Atlas**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create cluster and get connection string
   - Update MONGODB_URI in .env file

5. **Run the application**
   ```bash
   # Production mode
   npm start
   
   # Development mode (with nodemon)
   npm run dev
   ```

6. **Access the application**
   
   Open your browser and navigate to: `http://localhost:3003`

## 📁 Project Structure

```
subscriber-app/
├── models/
│   └── Subscriber.js          # MongoDB schema definition
├── routes/
│   └── subscribers.js         # RESTful routes for CRUD operations
├── views/
│   ├── index.ejs             # Main dashboard with subscribers table
│   ├── new.ejs               # Add new subscriber form
│   ├── show.ejs              # View subscriber details
│   ├── edit.ejs              # Edit subscriber form
│   └── delete.ejs            # Delete confirmation page
├── public/
│   └── style.css             # Glassmorphism styling
├── .env                      # Environment variables
├── server.js                 # Main application server
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🎨 UI/UX Features

### **Black Pearl & Rose Fog Theme**
- Dark gradient backgrounds with pearl-like depth
- Rose gold accents (#bb8f8f) for highlights
- Subtle glassmorphism effects throughout

### **Interactive Elements**
- ✨ Glassy transparent buttons with shimmer effects
- 🎭 Smooth hover animations and transforms
- 🌊 Floating particle backgrounds
- 💫 Gradient border animations

### **Form Features**
- 📝 Real-time validation with visual feedback
- 🚨 Beautiful error messages with slide-in animations
- 💾 Form data preservation on validation errors
- 🎯 Smart focus states with glowing effects

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Redirect to subscribers list |
| GET | `/subscribers` | Display all subscribers |
| GET | `/subscribers/new` | Show add subscriber form |
| POST | `/subscribers` | Create new subscriber |
| GET | `/subscribers/:id` | Show subscriber details |
| GET | `/subscribers/:id/edit` | Show edit form |
| PUT | `/subscribers/:id` | Update subscriber |
| GET | `/subscribers/:id/delete` | Show delete confirmation |
| DELETE | `/subscribers/:id` | Delete subscriber |

## 📋 Database Schema

```javascript
{
  name: String (required),
  email: String (required),
  subscribeToChannel: String (required),
  subscribeOn: Date (default: Date.now)
}
```

**Unique Constraint:** Compound index on `email + subscribeToChannel` prevents duplicate subscriptions to the same channel while allowing multiple channel subscriptions per email.

## 🚨 Error Handling

- **Duplicate Prevention:** Smart validation prevents same email subscribing to same channel twice
- **User-Friendly Messages:** Technical errors converted to readable messages
- **Form Preservation:** User input retained when validation fails
- **Visual Feedback:** Beautiful error notifications with glassmorphism styling

## 🎯 Usage Examples

### Adding a Subscriber
1. Click "Add New Subscriber"
2. Fill in name, email, and channel
3. Submit form
4. Success: Redirected to dashboard
5. Error: Form preserved with error message

### Managing Subscriptions
- **Same email, different channels:** ✅ Allowed
- **Same email, same channel:** ❌ Prevented with friendly error
- **View details:** Click "View" for full subscriber information
- **Edit/Delete:** Email verification shown for security

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Email notifications for new subscriptions
- [ ] Bulk import/export functionality
- [ ] Advanced filtering and search
- [ ] Analytics dashboard
- [ ] API rate limiting
- [ ] Email templates management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/Muskantyagi2)

## 🙏 Acknowledgments

- Inspired by modern glassmorphism design trends
- MongoDB community for excellent documentation
- Express.js for the robust web framework
- EJS for the flexible templating engine

## 📱 Screenshots

<img width="1054" height="540" alt="image" src="https://github.com/user-attachments/assets/22340d32-4a00-43ab-909b-9388375d732a" />


<img width="1056" height="823" alt="image" src="https://github.com/user-attachments/assets/c8b37365-9875-4c91-bc54-71df26ccd2ea" />


<img width="1059" height="559" alt="image" src="https://github.com/user-attachments/assets/466094be-a4b7-48b7-8e1b-5329b063aa04" />


<img width="1053" height="730" alt="image" src="https://github.com/user-attachments/assets/314d1470-7f43-484d-80b3-f4c4b17838ed" />


<img width="1056" height="958" alt="image" src="https://github.com/user-attachments/assets/57915515-8f7e-4c16-bf2b-467524e016ce" />


<img width="987" height="920" alt="image" src="https://github.com/user-attachments/assets/44a7b31e-bbd9-4b4c-a114-212ea119ce2e" />


<img width="983" height="847" alt="image" src="https://github.com/user-attachments/assets/384cb851-9be6-4d14-8486-96d30b0f25d6" />



⭐ **Star this repo if you found it helpful!** ⭐
