# Milind Kashyap - Portfolio Website

Portfolio website of Milind Kashyap - B.Tech Computer Science student at Bennett University, Greater Noida.

**Tech Stack:**
- ReactJS
- Vite
- Tailwind CSS
- AOS (Animate On Scroll)
- Firebase
- Framer Motion
- Lucide React
- Material UI
- SweetAlert2

**Live Website:** [Deployed on Render](https://milind-kashyap-portfolio.onrender.com)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18.x or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd "Portofolio Update 2"
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Access the application at `http://localhost:5173`

---

## 📦 Building for Production

1. **Create production build:**
   ```bash
   npm run build
   ```

2. **Preview production build:**
   ```bash
   npm run preview
   ```

3. **Build files location:**
   The optimized build files will be in the `dist` folder.

---

## 🌐 Deployment on Render

This project is configured for deployment on Render using `render.yaml`.

### Automatic Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Render:**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml` and configure the service

3. **Manual Configuration (if needed):**
   - Service Type: Web Service
   - Build Command: `npm install --legacy-peer-deps && npm run build`
   - Start Command: `npm run start`
   - Environment: Node
   - Node Version: 18.x

### Environment Variables

No environment variables are required for basic deployment. If you need Firebase, configure it in `src/firebase.js`.

---

## 📁 Project Structure

```
Portofolio Update 2/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── Pages/       # Page components
│   ├── data/        # Static data (projects)
│   └── assets/      # Images and other assets
├── dist/            # Production build (generated)
├── render.yaml      # Render deployment configuration
├── vite.config.js   # Vite configuration
└── package.json     # Dependencies and scripts
```

---

## 🔧 Configuration

### Firebase Setup (Optional)

If you want to use Firebase for dynamic content:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Copy your Firebase configuration
5. Update `src/firebase.js` with your config

### Customization

- **Projects:** Edit `src/data/projects.js`
- **Personal Info:** Update `src/Pages/Home.jsx` and `src/Pages/About.jsx`
- **Styling:** Modify `src/index.css` and Tailwind classes

---

## 📝 Notes

- The project uses `--legacy-peer-deps` flag due to some dependency conflicts
- All projects are configured with static data in `src/data/projects.js`
- The portfolio includes 6 main projects with Live Demo and GitHub links
- Certifications link to Coursera profile
- Contact information is displayed in the Contact section

---

## 📄 License

This project is for personal portfolio use. Please include credit if you use this as a template.

---

## 👤 Author

**Milind Kashyap**
- Email: kashyapmilind1929@gmail.com
- Phone: +91 8077829092
- LinkedIn: [linkedin.com/in/milind-kashyap](https://www.linkedin.com/in/milind-kashyap)
- GitHub: [github.com/MilindKashyap](https://github.com/MilindKashyap)
- LeetCode: [leetcode.com/u/MILINDKASHYAP/](https://leetcode.com/u/MILINDKASHYAP/)
- Coursera: [coursera.org/user/d907e942cd5c189a4b9c29d1f233fea7](https://www.coursera.org/user/d907e942cd5c189a4b9c29d1f233fea7)

---

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons from Lucide React
- Animations with AOS and Framer Motion
