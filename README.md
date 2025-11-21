# SK Digital Garden 🌱

A modern, dual-mode portfolio website showcasing technical skills, projects, and professional certifications. Built with React, TypeScript, and Tailwind CSS.

## 🎯 Features

### Public Portfolio
- **Hero Section**: Professional introduction with contact links
- **Featured Projects**: Showcase of key projects with detailed modals
- **Technical Arsenal**: Organized display of skills by category (Data & AI, Cloud & Infrastructure, Languages)
- **Certifications**: Professional certifications and awards

### Admin Workspace
- **Password-Protected Access**: Secure admin panel for content management
- **Tech Radar**: Visual organization of technologies by status:
  - 🌸 **Active**: Currently using in production
  - 🌱 **Learning**: Actively learning and experimenting
  - 🍃 **Assess**: Evaluating for future use
  - 📦 **Archive**: Previously used, now archived
- **Visibility Control**: Toggle individual items between public/private display
- **JSON Configuration**: Direct JSON editing for advanced customization
- **Export/Import**: Download and restore configuration data

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/SzymonKoster/SK_Digital_Garden.git
cd SK_Digital_Garden

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality checks
```

### Deployment
```bash
npm run deploy               # Build and deploy to GitHub Pages
./scripts/enable_maintenance.sh      # Enable maintenance mode
./scripts/disable_maintenance.sh     # Disable maintenance mode and restore site
```

## 🏗️ Project Structure

```
SK_Digital_Garden/
├── src/
│   ├── App.tsx              # Main application component (all-in-one)
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles and Tailwind directives
├── public/
│   └── szymon_cv.pdf        # Downloadable CV
├── maintenance/
│   └── index.html           # Maintenance mode page
├── scripts/
│   ├── enable_maintenance.sh    # Deploy maintenance page
│   └── disable_maintenance.sh   # Restore live site
├── dist/                    # Production build output (git-ignored)
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎨 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript support
- **Deployment**: GitHub Pages via gh-pages

## 🔐 Admin Access

1. Scroll to the footer of the public portfolio
2. Click the small key icon (🔑) next to the copyright notice
3. Enter the admin password (configurable in `src/App.tsx`)
4. Access the admin workspace to manage content

**Security Note**: The current password is hardcoded for static site simplicity. For production use with sensitive data, implement proper authentication.

## 🌐 Deployment

### GitHub Pages Deployment

The site is configured to deploy to GitHub Pages automatically:

```bash
npm run deploy
```

This runs:
1. `npm run build` - Creates production bundle in `dist/`
2. `gh-pages -d dist` - Deploys `dist/` to the `gh-pages` branch

**Important**: The `base` path in `vite.config.ts` must match your repository name:
```typescript
base: "/SK_Digital_Garden/"
```

### Maintenance Mode

Temporarily take the site offline while preserving the deployment:

```bash
# Enable maintenance mode (shows "Site Under Construction")
./enable_maintenance.sh

# Restore the live site
./disable_maintenance.sh
```

## 📝 Content Management

### Updating Skills/Technologies

Edit the `INITIAL_DATA` array in `src/App.tsx`:

```typescript
const INITIAL_DATA: TechItem[] = [
  { 
    id: '1', 
    name: 'Python (Advanced)', 
    category: 'languages', 
    status: 'active', 
    visibility: 'public', 
    description: 'Backend, Data Eng, AI. Primary language.', 
    tags: ['core', 'advanced'] 
  },
  // Add more items...
];
```

### Updating Projects

Edit the `INITIAL_PROJECTS` array in `src/App.tsx`:

```typescript
const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Project Name',
    shortDescription: 'Brief description',
    fullDescription: 'Detailed description...',
    date: 'Month Year',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    imageCount: 2
  },
  // Add more projects...
];
```

### Using the Admin Panel

1. Log into admin mode
2. Navigate to the "Config" tab
3. Edit the JSON directly in the text area
4. Click "Load Preview" to test changes
5. Click "Download data.json" to export
6. Manually commit the changes to your repository

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Szymon Koster**
- Portfolio: [https://szymonkoster.github.io/SK_Digital_Garden/](https://szymonkoster.github.io/SK_Digital_Garden/)
- GitHub: [@SzymonKoster](https://github.com/SzymonKoster)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
