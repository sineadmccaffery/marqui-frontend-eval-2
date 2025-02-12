# Front-End Developer Technical Assessment - Sinead McCaffery

## Overview
For this task, I implemented a dynamic user profile system using React with JavaScript and Tailwind CSS. The goal was to:
- Create a new **User Profile Card** UI Component
- Handle **data fetching** efficiently
- Implement a basic **flagging** feature
- Ensure **responsiveness, accessibility, and UX micro-interactions**
- Write **clean, modular, and maintainable code**

---

### 1️⃣ Components

- **UserCard** component with a circular profile image, toggleable flag icon, full name, email, country badge, and a view profile button.
- **UserList** component that displays all the user cards in a visually pleasing grid.

🔹 **Bonus Points**:
- I also implemented **dark mode support!**


---

### 2️⃣ Data Fetching & State Management
Fetch user data dynamically from an API and display multiple **Profile Cards** in a comfortable layout.

#### **API Endpoint:**
`https://randomuser.me/api/?results=10`

- I used **React Context** for state management, creating a fetchUsers() function to fetch the user data from the API.
- I also included error handling and loading states.


---

### 3️⃣ Flag Logic & API Integration
Each User Profile Card has a clickable flag icon upper-right corner. Clicking this sends a POST request to the Directus backend API with the user’s data.

- Each User Profile Card has a flag icon in the upper-right corner.
- I used React state to keep track of whether the flag was clicked.
- Clicking fires a POST request with the user’s data to the Directus backend API.
- The flag icon visually differs between flagged/not-flagged states (either filled in blue or unfilled).
- I prevent duplicate flagging by disabling the button after submission.


---
### Final Thoughts
I really enjoyed this assignment and appreciated the freedom to use technologies and frameworks I was comfortable with. I am most experienced with React and Tailwind CSS, so that is why I chose to use those technologies.

Thank you! 

P.S. Reach out with any questions or concerns as needed.