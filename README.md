# Authentication Project

This is a **basic authentication system** built using **React**, **Express**, **MongoDB**, and various other tools for email verification and state management. The project is structured to include essential features like user signup, login, email verification, password reset, and route protection. 

## 🛠️ Tech Stack
- **Frontend**: React
- **Backend**: Express
- **Database**: MongoDB
- **State Management**: Zustand
- **Email Service**: Mailtrap
- **Icons**: Lucide React

---

## 🔧 Backend Setup

### 🗄️ Database Setup
1. **MongoDB** is used for storing user credentials and authentication tokens.
2. Ensure MongoDB is running and properly configured for your environment.

### 🔐 Signup Endpoint
This endpoint handles user registration and creates a new user in the database.

### 📧 Sending Verify Account Email
After user signup, a verification email is sent using **Mailtrap** to confirm their email address.

### 🔍 Verify Email Endpoint
Handles the email verification logic by confirming the token sent via email.

### 📄 Building a Welcome Email Template
A custom welcome email template is created and sent to users upon successful verification.

### 🚪 Logout Endpoint
Logs out the user by invalidating their session.

### 🔑 Login Endpoint
Authenticates the user and provides a token for access to protected routes.

### 🔄 Forgot Password Endpoint
This endpoint sends a password reset link to the user's email.

### 🔁 Reset Password Endpoint
Handles the logic for resetting the user’s password using the token sent via email.

### ✔️ Check Auth Endpoint
Verifies if a user is authenticated based on the provided token.

---

## 🌐 Frontend Setup

### 📋 Signup Page UI
The signup page is designed with form inputs for user registration and uses **Zustand** for state management.

### 🔓 Login Page UI
The login page UI handles user authentication and state updates.

### ✅ Email Verification Page UI
UI for handling email verification after a user clicks the link sent to their inbox.

### 📤 Implementing Signup
Integrates the signup functionality with the backend via API calls.

### 📧 Implementing Email Verification
Manages the verification process by calling the verify email endpoint upon user action.

### 🔒 Protecting Routes
Uses a token-based authentication system to protect specific routes from unauthenticated users.

### 🔑 Implementing Login
Handles user login by making API calls to the backend and storing authentication tokens.

### 🏠 Dashboard Page
A protected dashboard page that is only accessible to authenticated users.

### 🔄 Implementing Forgot Password
Includes UI and logic for allowing users to request a password reset link.

---

## How to Run

1. Clone this repository.
2. Install the required dependencies for both the frontend and backend using `npm install` in their respective directories.
3. Set up your environment variables for the backend (e.g., Mailtrap, MongoDB connection string, etc.).
4. Run `npm start` for the frontend and `npm run dev` for the backend.
5. Access the frontend at `http://localhost:5173` and the backend at `http://localhost:5000`.

---

### Future Improvements
- Add multi-factor authentication.
- Implement OAuth2 login (Google, GitHub).
- Enhance error handling and form validation.

