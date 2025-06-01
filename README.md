<div align="center">
  <br />
      <img src="https://github.com/user-attachments/assets/40a83aac-8b8b-49c8-a4c8-808b6e7e7926" alt="Project Banner">
  <br />
  <div>
    <img src="https://github.com/user-attachments/assets/676fd105-2852-4ab8-bf0e-c7a9c931088b" alt="Next.js" width="150px" height="50px"/>
    <img src="https://github.com/user-attachments/assets/3e4cd248-745d-4cd0-bd92-a45a7cb8fcb5" alt="TypeScript" width="150px" height="50px" />
    <img src="https://github.com/user-attachments/assets/84d424b9-1298-4884-a340-e3e1add449f9" alt="stripe" width="150px" height="50px" />
  </div>
</div>

# 📣 Eventraze

A full-stack events application, developed with Next.js 14, provides a seamless platform for event management. Acting as a global hub, it highlights diverse events happening worldwide. With integrated Stripe payments, users can easily purchase tickets or create and manage their own events.

---

## 💡 Features

- **User Authentication (CRUD) with Clerk:** Secure and efficient user management through Clerk, ensuring seamless authentication and account handling.

- **Event Management (CRUD):** A complete system for creating, viewing, updating, and deleting events, providing users full control over event organization.

  - Create Events: Easily add new events with key details like title, date, location, and additional information.

  - Read Events: Access a detailed view of all events, including descriptions, schedules, and related details.

  - Update Events: Modify event details dynamically, ensuring up-to-date and accurate information.

  - Delete Events: Simple event removal, allowing admins to maintain a well-curated platform.

- **Search & Filter:** A powerful search and filter system to help users quickly find events that match their interests.

- **Organized Event Display:** A structured layout that enhances user experience by showcasing events efficiently, including a personalized section displaying events created by the user.

- **Related Events:** Intelligent event connections displayed on the event details page, enhancing user engagement.

- **Dynamic Categorization:** Allows the addition of new event categories, making the platform adaptable and scalable.

- **Secure Checkout & Payments with Stripe:** Smooth and reliable payment processing via Stripe for effortless ticket purchases.

- **Event Orders Management:** A comprehensive system to track and manage event-related transactions.

- **Order Search & Tracking:** Quick and efficient search functionality to help users track their event orders with ease.

---

# ⚙️ Tech Stack Used

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

---

## 🚀 Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)
- Git

### Clone the repository

```sh
git clone https://github.com/iamhruthiks/Eventraze.git
```

Navigate inside the project directory:

```sh
cd Eventraze
```

### Install dependencies:

```sh
npm install
```

### Create a `.env` file and configure environment variables:

```sh
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### Run the application

```sh
npm start
```

---

## 📜 Acknowledgements

_This project was developed by JavaScript Mastery. I would like to extend my appreciation to them for crafting such an amazing project, which has been instrumental in equipping me with the necessary knowledge and skills to bring this application to life._

---

## 📸 Screenshots
<img width="959" alt="1" src="https://github.com/user-attachments/assets/400a33ed-2981-4294-b2cf-56c94cd42f4f"><hr>
<img width="959" alt="2" src="https://github.com/user-attachments/assets/79152f36-a7ed-4fc8-9877-a3f18f0e7902"><hr>
<img width="959" alt="3" src="https://github.com/user-attachments/assets/a5ac2fc3-4944-470a-a6bb-d27fd12ff5ec"><hr>
<img width="959" alt="4" src="https://github.com/user-attachments/assets/af061d41-3406-4d13-9249-6cec8fc6f06c"><hr>
<img width="959" alt="5" src="https://github.com/user-attachments/assets/cc83b2b7-ebb5-4cee-8e68-5a8efade1ead"><hr>
<img width="959" alt="6" src="https://github.com/user-attachments/assets/e75e6d7c-87d3-42d0-b600-25370de12a52"><hr>
<img width="959" alt="7" src="https://github.com/user-attachments/assets/8a35684d-50b6-448f-a050-cb970145001e"><hr>
<img width="959" alt="8" src="https://github.com/user-attachments/assets/0e921fb6-4223-454c-a8b1-bf49fd376e3c"><hr>
<img width="959" alt="9" src="https://github.com/user-attachments/assets/99b91c41-aa19-4ce3-988d-a94443351c2c"><hr>
<img width="959" alt="10" src="https://github.com/user-attachments/assets/6ecd210c-8a3f-4ebc-9e00-e0e5ac689956"><hr>
<img width="959" alt="r1" src="https://github.com/user-attachments/assets/b2a8fa30-fbb2-40aa-921d-f278491c1dce"><hr>
<img width="959" alt="r2" src="https://github.com/user-attachments/assets/7a3261ec-49f1-4017-ac8d-d750e755425c"><hr>
