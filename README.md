# Harini V - Portfolio Website

A high-performance, responsive portfolio website showcasing Harini V's credentials (B.Tech in Artificial Intelligence & Machine Learning, CGPA 9.09, AI & Frontend Internships, 3 Featured Projects, 9 Certifications, and Contact/Connect integrations).

## 🚀 Key Features

- **Modern Engineering Design System**: Clean obsidian dark theme with subtle ambient aurora glows, micro-dot canvas, Plus Jakarta Sans & JetBrains Mono typography, and refined frosted glassmorphism styling.
- **Interactive Navigation**: Fixed glass navbar with brand `HV.`, smooth scrolling section targets, and active section tracking.
- **Hero Section**: Dynamic introduction with badge highlights (CGPA 9.09, 3+ Internships, B.Tech AIML), profile avatar with radial glow ring, and "Hire Me" CTA.
- **What I Do (About)**: 3 core pillar cards (AI & ML, Web & Full Stack Design, Smart Systems & App Design) with original iconography.
- **Professional Skills**: Visual proficiency bars across Programming (Python, Java, JavaScript), Web Technologies (React.js, Node.js, FastAPI, PostgreSQL, MongoDB, Bootstrap 5), AI/ML/DevOps (LLMs, Spiking Neural Networks, Docker, Nginx, Git), and soft skills badges.
- **Featured Projects**:
  - **ClipMind AI**: AI-powered video summarization & key moments detection platform (React.js, FastAPI, PostgreSQL, Python, Docker, Nginx).
  - **Smart Grocery App**: Expiry notification & waste reduction system with SMS alerts (React.js, REST APIs).
  - **AI Sewing Machine**: Automated smart stitching system with fabric detection, anomaly detection, BD + temp sensors, and spiking neural networks.
- **Career Journey (Experience)**: Timeline of internships at **Infosys Springboard (Virtual Internship 7.0)**, **Cognifyz Technologies**, and **Kodacy**.
- **Education**: Detailed credentials for **K.Ramakrishnan College of Engineering** (B.Tech AIML, CGPA 9.09) and **St. James Matriculation Higher Secondary School** (HSC 81.20%, SSLC 76.80%).
- **Certifications & Workshops**: 9 certifications (Coursera, IBM, AWS, GUVI, NPTEL, LinkedIn Learning, MongoDB, FutureSkill) and symposium achievements (Care Tech Fest, ChatGPT Strategies).
- **Resume Hub**: Full preview of Harini's verified resume, direct PDF download trigger, and full-size modal viewer.
- **Contact & Connect**: Interactive contact form with input validation, success notification, direct contact info cards, and social buttons (LinkedIn, GitHub, Email, Facebook, Instagram).

## 🛠️ Tech Stack

- **React 18**
- **Vite 6**
- **Bootstrap 5 & React-Bootstrap**
- **Lucide Icons & Custom SVG Brand Icons**
- **Canvas-Confetti**
- **EmailJS** (contact form → Gmail)

## 🏃 Getting Started

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Local Preview of Production Build
```bash
npm run preview
```

## 🌐 Deployment to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Harini V Portfolio"
   git remote add origin https://github.com/harinivadivel/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Import the repository into [Vercel](https://vercel.com) — framework preset will automatically detect **Vite**.
3. Click **Deploy**.

## 📬 Contact Form → Your Gmail (EmailJS)

The contact form sends messages directly to **harinivadivel492@gmail.com** using
[EmailJS](https://www.emailjs.com) — no backend server required. It's already wired up in
`src/components/Contact.jsx`; you only need to fill in your own EmailJS keys once:

1. Create a **free account** at [emailjs.com](https://www.emailjs.com).
2. **Add Service** → choose **Gmail** → connect `harinivadivel492@gmail.com`
   and confirm via the link they send you.
3. **Create Template** → use the default *Contact* template (it uses the
   `from_name`, `reply_to`, `subject`, `message` params that this form already sends).
4. Copy your values into **`src/config/emailjs.js`**:
   - `SERVICE_ID` → shown next to your Gmail service
   - `TEMPLATE_ID` → shown next to your template
   - `PUBLIC_KEY` → Dashboard → **API Keys**

The public key is safe to keep in code — EmailJS stores your real Gmail
credentials on their servers, so nothing secret ever ships in this repo.
# Final-Portfolio
