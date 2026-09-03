# Nalanda College of Engineering (NCE Chandi) - Website Clone

A responsive, high-fidelity static clone and modernization of the official **Nalanda College of Engineering (NCE Chandi)** portal ([ncechandi.ac.in](https://ncechandi.ac.in/)), engineered for instantaneous deployment via **GitHub Pages**.

---

## 🌟 Key Features

- **Official Identity & Styling**: Accurate replication of the Bihar Government academic theme, institution emblems, bilingual typography, and accreditation highlights (AICTE, NBA Accredited CSE, BEU Patna affiliation).
- **Interactive Hero Carousel**: Auto-rotating slideshow with pause-on-hover, navigation arrows, indicator bullets, and call-to-actions.
- **Live News Marquee**: Pulsing announcements ticker for notices, schedules, and university notifications.
- **Tabbed Notice Dashboard**: Categorized tabs switching seamlessly between **Official Notices**, **E-Tenders**, **Placement Drives**, and **Awards & Accolades** with circular download buttons.
- **Academic Program Directory**: Cards highlighting B.Tech in CSE, AI & ML, Aeronautical, Civil, Mechanical, and EEE.
- **Interactive Modals**:
  - 📝 **Inquiry Form**: Direct course inquiry submission.
  - ⚖️ **Grievance Redressal Portal**: Docket registration for students & staff.
  - 🔍 **Status Tracker**: Real-time docket status lookup with animated feedback.
  - 💬 **Feedback Form**: Experience rating and suggestion box.
- **Accessibility & Customization**:
  - Font scaling buttons (`A+`, `A-`, `A` reset).
  - High Contrast / Dark Mode toggle with persistent `localStorage` support.
  - Responsive off-canvas navigation menu for mobile devices and tablets.
- **Self-Contained & Static**: Zero build-step required. Compatible with any static web host.

---

## 📂 Project Structure

```text
nce-chandi-clone/
├── index.html          # Semantic HTML5 single-page portal
├── css/
│   └── style.css       # Responsive stylesheet with themes and variables
├── js/
│   └── main.js         # Slider, tabs, modal controller & accessibility tools
└── README.md           # Documentation and GitHub deployment guide
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

Follow these steps to deploy this website on the internet for free using your GitHub account:

### Step 1: Create a New Repository on GitHub
1. Open [GitHub](https://github.com) and log in.
2. Click the **`+`** icon at the top right and select **New repository**.
3. Name your repository (e.g. `nce-chandi-clone` or `nce-portal`).
4. Set the repository to **Public**.
5. **Do not** initialize with a README, .gitignore, or license (we already have local files).
6. Click **Create repository**.

### Step 2: Push Your Code from Your Computer
Open your terminal (PowerShell, Command Prompt, or Git Bash) inside this project folder (`C:\Users\rtshk\.gemini\antigravity\scratch\nce-chandi-clone`):

```bash
# 1. Initialize git
git init

# 2. Stage all files
git add .

# 3. Commit your changes
git commit -m "Initial commit of NCE Chandi website clone"

# 4. Set default branch to main
git branch -M main

# 5. Link to your GitHub repository (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# 6. Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. On GitHub, navigate to your repository's page.
2. Click the **Settings** tab at the top.
3. In the left sidebar under *Code and automation*, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Choose `main` and folder `/ (root)`.
5. Click **Save**.

### Step 4: Visit Your Live Site!
In about 1 to 2 minutes, GitHub will build and publish your site. Refresh the **Pages** settings tab, and you will see your live URL:
```text
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

---

## 💻 Testing Locally

To preview and test the website on your local machine before pushing:

### Using Python:
Open terminal in the project folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Using VS Code Live Server:
If using VS Code, right-click `index.html` and click **"Open with Live Server"**.

---

## 🛡️ License & Disclaimer
This project is an educational frontend clone created for portfolio demonstration and learning purposes. All original logos, text, and organizational references belong to Nalanda College of Engineering, Chandi and the Government of Bihar.
