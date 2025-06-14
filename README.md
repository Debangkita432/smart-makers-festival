# SMF-2k25

A modern web application for the Sanskriti 2025 cultural festival, built with Next.js, TypeScript, Prisma, and Tailwind CSS.

## 🔗 Repository

```
git clone https://github.com/Rustix69/Sanskriti-2k25.git
```

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React Framework)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Animation Libraries**: GSAP, Framer Motion
- **Deployment**: Docker, Vercel
- **3D Rendering**: Three.js with React Three Fiber

## 📋 Features

- **Event Management**: Registration and coordination for cultural events
- **Admin Dashboard**: Comprehensive admin portal for event management
- **Authentication**: Secure user authentication system
- **Responsive Design**: Mobile-friendly interface with modern animations
- **Email Notifications**: Automated emails for registrations and updates

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Database (PostgreSQL recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rustix69/Sanskriti-2k25.git
   cd Sanskriti-2k25
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Environment Setup:
   Create a `.env` file in the root directory with the following variables:
   ```
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/sanskriti2025"
   
   # NextAuth
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Email (Optional)
   EMAIL_SERVER_HOST=
   EMAIL_SERVER_PORT=
   EMAIL_SERVER_USER=
   EMAIL_SERVER_PASSWORD=
   EMAIL_FROM=
   
   # Razorpay (Optional)
   RAZORPAY_KEY_ID=
   RAZORPAY_KEY_SECRET=
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Docker Setup (Alternative)

1. Build and run with Docker Compose:
   ```bash
   docker-compose up -d
   ```

## 🧑‍💻 Development Workflow

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make changes and commit:
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

3. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request to the main branch.

## 📁 Project Structure

- `/src/app`: Next.js application routes
- `/src/components`: Reusable UI components
- `/src/lib`: Utility functions and libraries
- `/prisma`: Database schema and migrations
- `/public`: Static assets

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run linting checks
- `npx prisma studio`: Launch Prisma Studio for database management

## 📝 License

[MIT](LICENSE)

## 👥 Contributors

- [Your Name](https://github.com/Rustix69)
- [Add other contributors here]

---

For questions or support, please open an issue in the repository. 
