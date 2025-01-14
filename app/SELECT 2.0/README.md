# SELECT 2.0 Project Documentation

## About the Project

SELECT 2.0 is a sleek and modern implementation of the SELECT landing page redesign. This project faithfully replicates the Figma designs provided by SELECT, leveraging advanced front-end technologies to deliver a performance-optimized, maintainable, and scalable codebase.

## Features

1. **Home Page**
   - Eye-catching hero section.
   - Highlighted product benefits.
   - Clear call-to-action elements.

2. **Features Section (with Sub-Pages)**
   - **Insights:** Tools for data-driven analytics.
   - **Integrations:** Easy connections with external platforms.
   - **Monitors:** Real-time tracking for better performance.
   - **Pricing:** Straightforward and transparent pricing tables.
   - **Savings:** Solutions for cost optimization.
   - **Usage Groups:** Advanced tools for managing user groups.
   - **Visibility:** Full visibility into operational workflows.

3. **Design Fidelity**
   - 98% alignment with Figma designs.
   - Clean, reusable components.

4. **Technology Stack**
   - **React Router v7**: Modern and efficient client-side routing.
   - **TailwindCSS**: For responsive and customizable designs.
   - **ShadCN UI**: Pre-styled components to accelerate development.
   - **TypeScript**: Ensuring type safety and speeding up development.

## Project Highlights

- **Modular Design**: Pages and features built using React’s component-based architecture for scalability.
- **Clean Codebase**: Adheres to industry best practices for readability and extensibility.
- **Accessibility**: Implements basic ARIA attributes to enhance usability for all users.

## Figma File
Check out the original design files on Figma: [Figma File Link](https://www.figma.com/design/VTTXoGwFZX7ZbTupUYGQqU)

## Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js**: Version 16 or higher.
- **npm** or **yarn**: For managing dependencies.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Supremache/front-end.git
   cd front-end
   ```
2. Navigate to the project directory:
   ```bash
   cd select-2.0
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```plaintext
app
├── components      # Reusable UI components
├── constants       # Application constants
├── lib             # Utility libraries and helper functions
├── routes          # Application routes and pages
│   ├── features
│   │   ├── insights
│   │   ├── integrations
│   │   ├── monitors
│   │   ├── pricing
│   │   ├── savings
│   │   ├── usage-groups
│   │   ├── visibility
│   │   ├── features.tsx
│   │   └── layout.tsx
│   ├── home
│   ├── root.tsx
│   └── routes.ts
├── types           # TypeScript type definitions
├── app.css         # Global styles
├── build           # Build files for deployment
├── public          # Static assets
└── node_modules    # Installed dependencies
```

## Live Demo

Access the live project here: [Deployed Site URL]

## Contributing

Contributions are highly encouraged! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your changes to your branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request for review.

## Contact

For questions or collaboration, reach out to:

**Abdulrahman Othman**
- **LinkedIn**: https://www.linkedin.com/in/abdulrahman-othman-5a4a1331a/

---

Would you like additional help with deployment steps or custom installation scripts? Let me know!

