# ✒️ OpenInk - A Modern Blogging Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

OpenInk is a sleek and modern blogging platform designed for writers who value simplicity and performance. Built with a powerful stack including React and Appwrite, it provides a seamless experience for creating, managing, and sharing your ideas with the world.

**[➡️ View Live Demo](https://your-live-demo-link.com)** ---

## 📸 Screenshots

*A quick look at the user interface.*

| Add Post Page | All Posts Page | Sign Up Page |
| :---: | :---: | :---: |
| ![Add Post Page](https://i.imgur.com/your-screenshot-1.png) | ![All Posts Page](https://i.imgur.com/your-screenshot-2.png) | ![Sign Up Page](https://i.imgur.com/your-screenshot-3.png) |

> **Note:** Your local image paths (`./src/assets/...`) won't work on GitHub. Upload your screenshots to a service like [Imgur](https://imgur.com/) and replace the links above.

---

## 🚀 Key Features

-   🔐 **Full Authentication:** Secure sign-up, log-in, and session management powered by Appwrite.
-   ✍️ **Rich Text Editing:** A powerful WYSIWYG editor (TinyMCE) for crafting beautiful posts.
-   🖼️ **Dynamic Image Uploads:** Seamlessly upload and manage featured images for your posts with Appwrite Storage.
-   📰 **Complete Post Management (CRUD):** Full capabilities to create, read, update, and delete posts.
-   👤 **User-Specific Content:** A "My Posts" section for users to easily view and manage their own articles.
-   📱 **Fully Responsive Design:** A clean and modern UI built with TailwindCSS that looks great on all devices.
-   ⚡ **Optimized State Management:** Centralized and predictable state powered by Redux Toolkit.

---

## 🛠️ Tech Stack

-   **Frontend:** React (with Vite), TailwindCSS
-   **State Management:** Redux Toolkit
-   **Backend as a Service (BaaS):** Appwrite (Handles Auth, Database, and Storage)
-   **Form Handling:** React Hook Form
-   **Rich Text Editor:** TinyMCE

---

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   Node.js and npm installed on your machine.
-   An [Appwrite](https://appwrite.io/) account (free tier is sufficient).
-   A [TinyMCE](https://www.tiny.cloud/) account to get a free API key.

### 1. Backend Setup (Appwrite)

1.  **Create a Project:** Log in to your Appwrite console and create a new project.
2.  **Create a Database:** In your project, navigate to **Databases** and create a new database.
3.  **Create a Collection:** Inside the database, create a collection named `Posts`.
4.  **Define Attributes:** Go to the **Attributes** tab for your `Posts` collection and create the following attributes:
    * `title` (string, required)
    * `content` (string, required)
    * `featuredImage` (string, required)
    * `status` (string, required)
    * `userId` (string, required)
5.  **Create a Storage Bucket:** Navigate to **Storage** and create a new bucket named `BlogImages`.
6.  **Set Permissions:** For both your collection and bucket, go to the **Settings** tab and grant **Read** and **Write** access to `Users` to allow authenticated users to manage their content.
7.  **Gather Credentials:** Keep your Appwrite Endpoint, Project ID, Database ID, Collection ID, and Bucket ID handy for the next step.

### 2. Local Project Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/garvit811/openink.git](https://github.com/garvit811/openink.git)
    cd openink
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env` in the root of the project and add the following, replacing the placeholder values with your actual credentials from Appwrite and TinyMCE.

    ```env
    # Appwrite Configuration
    VITE_APPWRITE_ENDPOINT=[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)
    VITE_APPWRITE_PROJECT_ID=your_project_id
    VITE_APPWRITE_DATABASE_ID=your_database_id
    VITE_APPWRITE_COLLECTION_ID=your_collection_id
    VITE_APPWRITE_BUCKET_ID=your_bucket_id

    # TinyMCE Configuration
    VITE_TINY_MCE_API_KEY=your_tinymce_api_key
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:5173/`.

---

## 📂 Project Structure

The project follows a modular structure to keep the code organized and maintainable.

```
src/
├── appwrite/      # Appwrite services (auth, database config)
├── assets/        # Static assets like images and logos
├── components/    # Reusable UI components (Header, Footer, Button, etc.)
├── conf/          # Environment variable configurations
├── pages/         # Top-level page components (Home, AddPost, Login, etc.)
├── store/         # Redux Toolkit store, slices, and actions
├── App.jsx        # Root component with routing
└── main.jsx       # Application entry point
```

---
## 🤝 Contributing

Contributions are welcome! If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the "enhancement" tag.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
