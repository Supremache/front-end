import {
  Support,
  SwapHoriz,
  Security,
  Backup,
  Speed,
  Storage,
  Code,
  Analytics,
  Email,
  Chat,
  Phone,
  Book,
  VideoLibrary,
  AccessTime,
  CloudDone,
  AlternateEmail,
  Dns,
  Https,
  Star,
  Language,
  Settings,
  Autorenew,
  Schedule,
  CloudUpload,
  RestorePage,
  Memory,
  CloudQueue,
  Image,
  TrendingUp,
  Group,
  Cloud,
  Equalizer,
  Shield,
  CalendarToday,
  FileCopy,
  BarChart,
  PieChart,
  Radar,
  LineStyle,
  Timeline,
  Terminal,
  Build,
  GitHub,
  BuildRounded,
} from "@mui/icons-material";

const services = [
  {
    icon: <Support />,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance for all your hosting needs. Our expert team is always ready to help.",
    action: "Contact Support",
    details: [
      {
        info: [
          {
            title: "Round-the-clock Assistance",
            subTitle:
              "Our expert team is always ready to help with all your hosting needs. We provide comprehensive support through multiple channels to ensure you get the assistance you need, when you need it.",
            features: [
              { icon: <Chat />, title: "Live chat support" },
              { icon: <Phone />, title: "Phone support" },
              { icon: <Email />, title: "Email ticket system" },
              { icon: <Book />, title: "Extensive knowledge base" },
              { icon: <VideoLibrary />, title: "Video tutorials" },
            ],
          },
        ],
        subInfo: [
          {
            title: "Why Choose Our Support?",
            benefits: [
              "Average response time under 5 minutes for live chat",
              "1-hour response guarantee for email tickets",
              "Support available in multiple languages",
              "Dedicated team of certified hosting experts",
              "Continuous training to stay updated with latest technologies",
            ],
          },
        ],
        faq: [
          {
            question: "What is the average response time?",
            answer:
              "Our average response time is under 5 minutes for live chat and 1 hour for email tickets.",
          },
          {
            question: "Do you offer support in multiple languages?",
            answer:
              "Yes, we offer support in English, Spanish, and Arabic to cater to our diverse customer base.",
          },
        ],
        action: [
          {
            title: "Need Assistance?",
            subTitle:
              "Our support team is ready to help you 24/7. Choose your preferred method of contact.",
            actions: ["Start Live Chat", "Submit a Ticket"],
          },
        ],
      },
    ],
  },
  {
    icon: <SwapHoriz />,
    title: "Website Migration",
    description:
      "Seamless migration service to move your website to our platform without any downtime.",
    action: "Start Migration",
    details: [
      {
        info: [
          {
            title: "Seamless Migration",
            subTitle:
              "Our expert team ensures a smooth transition of your website to our platform without any downtime. We handle all aspects of the migration process, so you can focus on your business.",
            features: [
              { icon: <CloudDone />, title: "Free migration service" },
              { icon: <AccessTime />, title: "Zero downtime" },
              { icon: <Storage />, title: "Database transfer" },
              { icon: <AlternateEmail />, title: "Email accounts migration" },
              { icon: <Dns />, title: "DNS management" },
            ],
          },
        ],
        subInfo: [
          {
            title: "Our Migration Process",
            benefits: [
              "Initial assessment of your current hosting setup",
              "Creation of a detailed migration plan",
              "Backup of your existing website and databases",
              "Transfer of all files, databases, and email accounts",
              "Configuration of your new hosting environment",
              "Thorough testing to ensure everything works correctly",
              "DNS update to point to your new hosting",
            ],
          },
        ],
        faq: [
          {
            question: "How long does the migration process take?",
            answer:
              "The migration process typically takes 24-48 hours, depending on the size and complexity of your website.",
          },
          {
            question: "Will my website be offline during migration?",
            answer:
              "No, we ensure zero downtime during the migration process. Your website will remain accessible throughout the transition.",
          },
        ],
        action: [
          {
            title: "Ready to Migrate Your Website?",
            subTitle:
              "Let our experts handle your website migration for a smooth, hassle-free transition.",
            actions: ["Learn More", "Start Migration Process"],
          },
        ],
      },
    ],
  },
  {
    icon: <Security />,
    title: "SSL Certificates",
    description:
      "Secure connections with SSL certificates to protect your visitors' data and improve SEO.",
    action: "Get SSL",
    details: [
      {
        info: [
          {
            title: "Secure Your Website",
            subTitle:
              "Protect your visitors' data and improve your website's SEO with our SSL certificate solutions. We offer a range of options to suit your needs and budget.",
            features: [
              { icon: <Https />, title: "Free Let's Encrypt SSL" },
              { icon: <Star />, title: "Wildcard SSL options" },
              { icon: <Language />, title: "Multi-domain SSL" },
              { icon: <Settings />, title: "Easy installation" },
              { icon: <Autorenew />, title: "Automatic renewal" },
            ],
          },
        ],
        subInfo: [
          {
            title: "Benefits of SSL Certificates",
            benefits: [
              "Encrypt sensitive information",
              "Boost search engine rankings",
              "Increase customer trust",
              "Comply with PCI standards",
              "Protect against phishing attacks",
            ],
          },
        ],
        faq: [
          {
            question: "What types of SSL certificates do you offer?",
            answer:
              "We offer free Let's Encrypt SSL, as well as paid options for Wildcard and Multi-domain SSL certificates to suit various needs.",
          },
          {
            question: "How often do I need to renew my SSL certificate?",
            answer:
              "Our system automatically renews your SSL certificates before they expire, so you don't have to worry about manual renewals.",
          },
        ],
        action: [
          {
            title: "Secure Your Website Today",
            subTitle:
              "Choose the right SSL certificate for your website and enhance your online security.",
            actions: ["Compare SSL Options", "Get SSL Certificate"],
          },
        ],
      },
    ],
  },
  {
    icon: <Backup />,
    title: "Backup & Restore",
    description:
      "Automated backups for peace of mind. Easily restore your site to any previous version.",
    action: "Configure Backup",
    details: [
      {
        info: [
          {
            title: "Automated Backups",
            subTitle:
              "Ensure your data is always safe with our automated backup solutions. Never worry about losing your website's content or database again.",
            features: [
              { icon: <Schedule />, title: "Daily automated backups" },
              { icon: <RestorePage />, title: "One-click restore" },
              { icon: <CloudUpload />, title: "Off-site storage" },
              { icon: <AccessTime />, title: "Customizable backup schedules" },
              { icon: <Storage />, title: "30-day backup retention" },
            ],
          },
        ],
        subInfo: [
          {
            title: "Why Choose Our Backup Service?",
            benefits: [
              "Peace of mind with automatic backups",
              "Quick and easy restoration process",
              "Secure off-site storage for added protection",
              "Flexible backup schedules to suit your needs",
              "Incremental backups to save storage space",
            ],
          },
        ],
        faq: [
          {
            question: "How often are backups performed?",
            answer:
              "We perform daily automated backups by default, but you can customize the backup schedule to fit your specific needs.",
          },
          {
            question: "How long do you retain backups?",
            answer:
              "We retain backups for 30 days by default. However, you can extend this period with our premium backup service if needed.",
          },
        ],
        action: [
          {
            title: "Protect Your Data Now",
            subTitle:
              "Don't risk losing your valuable website data. Set up automated backups today.",
            actions: ["Learn More", "Set Up Backups"],
          },
        ],
      },
    ],
  },
  {
    icon: <Speed />,
    title: "Performance Optimization",
    description:
      "Advanced caching and optimization techniques to make your website lightning fast.",
    action: "Boost Speed",
    details: [
      {
        info: [
          {
            title: "Lightning-Fast Websites",
            subTitle:
              "Boost your website's speed and performance with our advanced optimization techniques. We employ cutting-edge technologies to ensure your site loads quickly and efficiently.",
            features: [
              { icon: <Memory />, title: "Server-side caching" },
              { icon: <CloudQueue />, title: "Content Delivery Network (CDN)" },
              { icon: <Image />, title: "Image optimization" },
              { icon: <Code />, title: "Minification of CSS/JS" },
              { icon: <Storage />, title: "Database query optimization" },
            ],
          },
        ],
        subInfo: [
          {
            title: "Benefits of Optimization",
            benefits: [
              "Improved user experience",
              "Higher search engine rankings",
              "Increased conversion rates",
              "Reduced bounce rates",
              "Better mobile performance",
            ],
          },
        ],
        faq: [
          {
            question: "Will optimization affect my website's functionality?",
            answer:
              "No, our optimization techniques are designed to improve speed without affecting functionality. We thoroughly test all changes to ensure compatibility.",
          },
          {
            question:
              "Do you offer custom optimization for specific platforms?",
            answer:
              "Yes, we offer specialized optimization for popular platforms like WordPress, Magento, and Joomla, tailored to their specific requirements and best practices.",
          },
        ],
        action: [
          {
            title: "Ready to Boost Your Website's Performance?",
            subTitle:
              "Experience the difference that a fully optimized website can make for your business.",
            actions: ["Learn More", "Start Optimization"],
          },
        ],
      },
    ],
  },
  {
    icon: <Storage />,
    title: "Scalable Hosting",
    description:
      "Easily upgrade your hosting resources as your website grows. No downtime, no hassle.",
    action: "Upgrade Plan",
    details: [
      {
        info: [
          {
            title: "Flexible Hosting Solutions",
            subTitle:
              "Our scalable hosting plans are designed to adapt to your business needs. Easily upgrade or downgrade your plan without any downtime, ensuring a seamless experience.",
            features: [
              { icon: <TrendingUp />, title: "Easily upgrade your plan" },
              { icon: <Group />, title: "Resources tailored to your needs" },
              { icon: <Cloud />, title: "Auto-scaling options" },
              { icon: <Settings />, title: "Custom configurations available" },
              { icon: <Equalizer />, title: "Performance monitoring tools" },
            ],
          },
        ],
        subInfo: [
          {
            title: "Why Choose Scalable Hosting?",
            benefits: [
              "Pay for what you need with our flexible pricing",
              "Easily accommodate traffic spikes",
              "Ensure optimal performance as your business grows",
              "Access to advanced management tools",
              "Seamless transition when changing plans",
            ],
          },
        ],
        faq: [
          {
            question: "Can I change my plan at any time?",
            answer:
              "Yes, you can upgrade or downgrade your hosting plan at any time without any downtime.",
          },
          {
            question: "What happens if I exceed my resource limits?",
            answer:
              "If you exceed your resource limits, we will notify you and provide options to upgrade your plan to meet your needs.",
          },
        ],
        action: [
          {
            title: "Find the Perfect Plan for You",
            subTitle:
              "Explore our range of hosting plans and discover the flexibility of scalable hosting.",
            actions: ["View Plans", "Start Your Hosting"],
          },
        ],
      },
    ],
  },
  {
    icon: <Code />,
    title: "Developer Tools",
    description:
      "Access to Git, SSH, and other developer-friendly tools to streamline your workflow.",
    action: "Explore Tools",
    details: [
      {
        info: [
          {
            title: "Streamlined Development Environment",
            subTitle:
              "Our platform provides a robust set of developer tools designed to enhance your workflow and productivity.",
            features: [
              { icon: <GitHub />, title: "Git integration" },
              { icon: <Terminal />, title: "SSH access" },
              { icon: <Build />, title: "Easy deployment tools" },
              { icon: <Code />, title: "Support for multiple languages" },
              { icon: <BuildRounded />, title: "Collaboration tools" },
            ],
          },
        ],
        subInfo: [
          {
            title: "Why Choose Our Developer Tools?",
            benefits: [
              "Seamless integration with popular development environments",
              "Enhanced security with SSH key management",
              "Automatic updates for libraries and frameworks",
              "Detailed logs for troubleshooting and monitoring",
              "Responsive support for developers at all levels",
            ],
          },
        ],
        faq: [
          {
            question: "What version control systems do you support?",
            answer:
              "We support Git and provide seamless integration with GitHub, GitLab, and Bitbucket.",
          },
          {
            question: "Is SSH access secure?",
            answer:
              "Yes, we provide robust security measures for SSH access, including key-based authentication.",
          },
        ],
        action: [
          {
            title: "Get Started with Developer Tools",
            subTitle:
              "Leverage powerful tools to enhance your development process.",
            actions: ["Explore Tools", "Set Up SSH"],
          },
        ],
      },
    ],
  },
  {
    icon: <Analytics />,
    title: "Advanced Analytics",
    description:
      "Gain insights into your website's performance and visitor behavior with detailed analytics.",
    action: "View Analytics",
    details: [
      {
        info: [
          {
            title: "Comprehensive Performance Insights",
            subTitle:
              "Utilize our advanced analytics tools to monitor your website's performance and understand visitor behavior.",
            features: [
              { icon: <BarChart />, title: "Real-time traffic monitoring" },
              { icon: <PieChart />, title: "Visitor demographics" },
              { icon: <Timeline />, title: "Conversion tracking" },
              { icon: <Radar />, title: "User behavior analysis" },
              { icon: <LineStyle />, title: "Custom reports" },
            ],
          },
        ],
        subInfo: [
          {
            title: "Benefits of Advanced Analytics",
            benefits: [
              "Make informed decisions based on data-driven insights",
              "Identify high-performing pages and areas for improvement",
              "Understand your audience better to tailor your marketing efforts",
              "Set and track key performance indicators (KPIs)",
              "Export data for further analysis or reporting",
            ],
          },
        ],
        faq: [
          {
            question: "How can I access the analytics dashboard?",
            answer:
              "You can access the analytics dashboard through your account dashboard, where you can view real-time and historical data.",
          },
          {
            question: "Can I set up custom alerts for specific metrics?",
            answer:
              "Yes, our platform allows you to set up custom alerts for key metrics to keep you informed of significant changes.",
          },
        ],
        action: [
          {
            title: "Dive into Your Website's Performance",
            subTitle:
              "Get actionable insights with our powerful analytics tools.",
            actions: ["View Analytics", "Generate Reports"],
          },
        ],
      },
    ],
  },
  {
    icon: <Email />,
    title: "Professional Email",
    description:
      "Create professional email addresses with your domain name. Includes spam protection.",
    action: "Set Up Email",
    details: [
      {
        info: [
          {
            title: "Custom Domain Email Solutions",
            subTitle:
              "Elevate your professional image with custom email addresses that match your domain. Our email service includes robust spam protection and collaboration tools.",
            features: [
              { icon: <Email />, title: "Custom email addresses" },
              { icon: <Shield />, title: "Advanced spam protection" },
              { icon: <Group />, title: "Shared mailboxes" },
              { icon: <CalendarToday />, title: "Integrated calendar" },
              { icon: <FileCopy />, title: "Cloud storage integration" },
            ],
          },
        ],
        subInfo: [
          {
            title: "Why Choose Our Email Service?",
            benefits: [
              "Professional email addresses enhance credibility",
              "Robust security features to protect your communication",
              "Easy-to-use interface with advanced features",
              "Collaboration tools for teams",
              "Access your email on any device with our mobile app",
            ],
          },
        ],
        faq: [
          {
            question: "Can I use my existing email address?",
            answer:
              "Yes, you can migrate your existing email address to our platform.",
          },
          {
            question: "What security features are included?",
            answer:
              "Our email service includes advanced spam protection, encryption, and secure access protocols.",
          },
        ],
        action: [
          {
            title: "Create Your Professional Email",
            subTitle:
              "Set up your custom email addresses today for a more professional presence.",
            actions: ["Set Up Email", "Learn More"],
          },
        ],
      },
    ],
  },
];

export async function getAllServices() {
    return services.map((s) => ({
      ...s,
      slug: s.title.replace(/[&0-9\/]+/g, "").trim().replace(/\s+/g, "-").toLowerCase(),
    }));
  }
  