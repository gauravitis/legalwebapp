# Legal Services Website - Adv. Ajay Kumar Singh

A modern, responsive legal services website built with Next.js 13, TypeScript, and Firebase. The website features appointment booking, blog management, testimonials, and multi-language support.

## 🚀 Features

### 📱 Client-Facing Features
- **Modern Landing Page** with hero section and service highlights
- **Consultation Booking System** with three tiers:
  - Free consultation (20 minutes)
  - Online consultation (45 minutes)
  - In-person consultation (60 minutes)
- **Blog Section** with categorized articles
- **Multi-language Support** (English and Hindi)
- **Responsive Design** for all devices
- **Email Notifications** for consultation bookings

### 👨‍💼 Admin Features
- **Secure Admin Dashboard**
- **Blog Management System**
  - Create, edit, and delete posts
  - Category management
  - Rich text editing
- **Consultation Management**
- **Firebase Authentication**

## 🛠️ Tech Stack

- **Frontend:**
  - Next.js 13 (App Router)
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components

- **Backend:**
  - Firebase (Authentication & Firestore)
  - Next.js API Routes

- **Email:**
  - Resend for transactional emails

- **Deployment:**
  - Vercel (recommended)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gauravitis/legalwebapp.git
   cd legalwebapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Initialize Firebase:**
   - Create a new Firebase project
   - Enable Authentication and Firestore
   - Add your Firebase config to `.env.local`

5. **Create admin user:**
   ```bash
   node scripts/createAdminUser.mjs
   ```

6. **Run the development server:**
   ```bash
   npm run dev
   ```

## 🌐 Deployment

1. **Vercel Deployment (Recommended):**
   - Fork this repository
   - Create a new project on Vercel
   - Connect your GitHub repository
   - Add environment variables
   - Deploy!

2. **Manual Deployment:**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13 app directory
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── consultation/      # Consultation booking
│   └── ...
├── components/            # Reusable components
├── context/              # React context providers
├── lib/                  # Utilities and configurations
│   ├── firebase.ts       # Firebase configuration
│   ├── emailService.ts   # Email service
│   └── ...
└── messages/             # i18n translation files
```

## 🔐 Security

- Firebase Authentication for admin access
- Environment variables for sensitive data
- API route protection
- Form validation and sanitization

## 🛠️ Development

1. **Running Tests:**
   ```bash
   npm test
   ```

2. **Linting:**
   ```bash
   npm run lint
   ```

3. **Type Checking:**
   ```bash
   npm run type-check
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Gaurav Singh** - *Initial work* - [gauravitis](https://github.com/gauravitis)

## 🙏 Acknowledgments

- Adv. Ajay Kumar Singh for the opportunity
- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Firebase team for the backend services
