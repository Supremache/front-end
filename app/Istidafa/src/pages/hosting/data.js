export const hostingServices = [
  {
    label: "Shared Hosting",
    value: "shared",
    priceStructure: [
      {
        name: "Basic",
        price: 3.99,
        features: [
          "10 GB SSD Storage",
          "Unmetered Bandwidth",
          "Host 2 Domains",
          "AI Tools",
          "Free SSL Certificate",
          "Basic Email Support",
        ],
      },
      {
        name: "Plus",
        price: 5.99,
        features: [
          "20 GB SSD Storage",
          "Unmetered Bandwidth",
          "Host 5 Domains",
          "AI Tools",
          "Free SSL Certificates",
          "24/7 Email Support",
          "Free Website Builder",
        ],
        recommended: true,
      },
      {
        name: "Pro",
        price: 9.99,
        features: [
          "50 GB SSD Storage",
          "Unmetered Bandwidth",
          "Unlimited Domains",
          "AI Tools",
          "Free SSL Certificates",
          "Priority Email Support",
          "Advanced cPanel",
          "DDoS Protection",
        ],
      },
    ],
  },
  {
    label: "VPS Hosting",
    value: "vps",
    priceStructure: [
      {
        name: "Standard",
        price: 19.99,
        features: [
          "50 GB SSD Storage",
          "Unmetered Bandwidth",
          "2 GB RAM",
          "AI Tools",
          "Free SSL Certificates",
          "Basic Support",
          "Full Root Access",
        ],
      },
      {
        name: "Business",
        price: 29.99,
        features: [
          "100 GB SSD Storage",
          "Unmetered Bandwidth",
          "4 GB RAM",
          "AI Tools",
          "Free SSL Certificates",
          "24/7 Email Support",
          "Full Root Access",
          "DDoS Protection",
        ],
        recommended: true,
      },
      {
        name: "Premium",
        price: 49.99,
        features: [
          "200 GB SSD Storage",
          "Unmetered Bandwidth",
          "8 GB RAM",
          "AI Tools",
          "Free SSL Certificates",
          "Priority Support",
          "Full Root Access",
          "DDoS Protection",
          "Daily Backups",
        ],
      },
    ],
  },
  {
    label: "Dedicated Hosting",
    value: "dedicated",
    priceStructure: [
      {
        name: "Entry-Level",
        price: 99.99,
        features: [
          "1 TB SSD Storage",
          "Unmetered Bandwidth",
          "8 GB RAM",
          "AI Tools",
          "Free SSL Certificates",
          "24/7 Support",
          "Full Root Access",
          "DDoS Protection",
        ],
      },
      {
        name: "Mid-Level",
        price: 199.99,
        features: [
          "2 TB SSD Storage",
          "Unmetered Bandwidth",
          "16 GB RAM",
          "AI Tools",
          "Free SSL Certificates",
          "24/7 Premium Support",
          "Full Root Access",
          "DDoS Protection",
          "Daily Backups",
        ],
        recommended: true,
      },
      {
        name: "High-Level",
        price: 299.99,
        features: [
          "4 TB SSD Storage",
          "Unmetered Bandwidth",
          "32 GB RAM",
          "AI Tools",
          "Free SSL Certificates",
          "24/7 Priority Support",
          "Full Root Access",
          "DDoS Protection",
          "Daily Backups",
          "Server Monitoring",
        ],
      },
    ],
  },
  {
    label: "Cloud Hosting",
    value: "cloud",
    priceStructure: [
      {
        name: "Standard",
        price: 9.99,
        features: [
          "50 GB SSD Storage",
          "Unmetered Bandwidth",
          "AI Tools",
          "Free SSL Certificates",
          "24/7 Support",
          "Cloud Scalability",
          "Automated Backups",
        ],
      },
      {
        name: "Business",
        price: 19.99,
        features: [
          "100 GB SSD Storage",
          "Unmetered Bandwidth",
          "AI Tools",
          "Free SSL Certificates",
          "24/7 Support",
          "Cloud Scalability",
          "Automated Backups",
          "DDoS Protection",
        ],
        recommended: true,
      },
      {
        name: "Enterprise",
        price: 39.99,
        features: [
          "500 GB SSD Storage",
          "Unmetered Bandwidth",
          "AI Tools",
          "Free SSL Certificates",
          "24/7 Priority Support",
          "Cloud Scalability",
          "Automated Backups",
          "DDoS Protection",
          "Advanced Analytics",
        ],
      },
    ],
  },
  {
    label: "WordPress Hosting",
    value: "wordpress",
    priceStructure: [
      {
        name: "Starter",
        price: 7.99,
        features: [
          "10 GB SSD Storage",
          "Unmetered Bandwidth",
          "AI Tools",
          "Free SSL Certificates",
          "WordPress Pre-Installed",
          "Basic Support",
        ],
      },
      {
        name: "Growth",
        price: 15.99,
        features: [
          "20 GB SSD Storage",
          "Unmetered Bandwidth",
          "AI Tools",
          "Free SSL Certificates",
          "WordPress Pre-Installed",
          "24/7 Support",
          "Free Website Builder",
        ],
        recommended: true,
      },
      {
        name: "Scale",
        price: 29.99,
        features: [
          "50 GB SSD Storage",
          "Unmetered Bandwidth",
          "AI Tools",
          "Free SSL Certificates",
          "WordPress Pre-Installed",
          "24/7 Priority Support",
          "Advanced cPanel",
          "DDoS Protection",
        ],
      },
    ],
  },
  {
    label: "Reseller Hosting",
    value: "reseller",
    priceStructure: [
      {
        name: "Starter",
        price: 19.99,
        features: [
          "50 GB SSD Storage",
          "Unmetered Bandwidth",
          "AI Tools",
          "Free SSL Certificates",
          "Unlimited Client Accounts",
          "Basic Support",
        ],
      },
      {
        name: "Business",
        price: 29.99,
        features: [
          "100 GB SSD Storage",
          "Unmetered Bandwidth",
          "AI Tools",
          "Free SSL Certificates",
          "Unlimited Client Accounts",
          "24/7 Support",
          "Free Website Builder",
        ],
        recommended: true,
      },
      {
        name: "Enterprise",
        price: 49.99,
        features: [
          "200 GB SSD Storage",
          "Unmetered Bandwidth",
          "AI Tools",
          "Free SSL Certificates",
          "Unlimited Client Accounts",
          "24/7 Priority Support",
          "Free Website Builder",
          "Advanced Analytics",
        ],
      },
    ],
  },
];

export const faqData = [
    {
      question:
        "What is the difference between Shared Hosting, VPS Hosting, and Dedicated Hosting?",
      answer: [
        "Shared Hosting: You share server resources (CPU, memory, storage) with other users. It's affordable and suitable for smaller websites.",
        "VPS Hosting: You get a virtual server with dedicated resources, providing more control and better performance. Ideal for growing websites or those with higher traffic.",
        "Dedicated Hosting: You have an entire physical server dedicated to your website. This provides maximum control, security, and performance for large businesses or high-traffic websites.",
      ],
    },
    {
      question: "How much traffic can my hosting plan handle?",
      answer: [
        "Each hosting plan has different resource limits. Shared hosting is great for small-to-moderate traffic, while VPS and Dedicated Hosting can handle much larger traffic loads.",
        "Contact our support team if you need help choosing the right plan based on your expected traffic.",
      ],
    },
    {
      question: "Can I upgrade my hosting plan later if my website grows?",
      answer: [
        "Absolutely! You can upgrade to a higher-tier plan at any time without experiencing downtime.",
        "Whether you need more storage, bandwidth, or advanced features, upgrading is seamless.",
      ],
    },
    {
      question: "Is there a limit on the number of websites I can host?",
      answer: [
        "Shared Hosting: Typically allows hosting 1–3 websites.",
        "VPS & Dedicated Hosting: You can host multiple websites, depending on the resources allocated to your plan.",
      ],
    },
    {
      question:
        "Do you offer free website migration from another hosting provider?",
      answer: [
        "Yes, we offer free migration services for new customers. Our technical team will handle everything, ensuring a smooth transition without any downtime.",
      ],
    },
    {
      question: "How do you handle website backups?",
      answer: [
        "We offer automated daily backups with most hosting plans. These backups are securely stored and can be restored at any time through your control panel.",
      ],
    },
    {
      question: "What kind of security features do you provide?",
      answer: [
        "We prioritize security with features like free SSL certificates, DDoS protection, firewall management, malware scanning, and automated updates to protect your website from potential threats.",
      ],
    },
    {
      question: "Can I install WordPress or other CMS platforms?",
      answer: [
        "Yes, we support one-click installations for WordPress, Joomla, Drupal, and other popular CMS platforms through our control panel, making it easy to get started.",
      ],
    },
    {
      question: "Do you offer 24/7 technical support?",
      answer: [
        "Yes, our technical support team is available 24/7 to assist you with any hosting-related issues, from setup to troubleshooting. You can reach us via live chat, email, or phone.",
      ],
    },
    {
      question: "What is your uptime guarantee?",
      answer: [
        "We offer a 99.9% uptime guarantee across all hosting plans. In the rare case of downtime, we take immediate action to resolve any issues.",
      ],
    },
    {
      question: "How do you handle website speed and performance?",
      answer: [
        "We use high-performance SSD storage, caching mechanisms, and a global content delivery network (CDN) to ensure fast loading times and optimized performance across all devices.",
      ],
    },
    {
      question: "Can I get a refund if I'm not satisfied with the service?",
      answer: [
        "Yes, we offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied with our service within the first 30 days, you can request a full refund.",
      ],
    },
    {
      question: "How do I manage my hosting account?",
      answer: [
        "You can easily manage your hosting services through our user-friendly control panel, where you can configure settings, manage domains, emails, databases, and monitor website performance.",
      ],
    },
    {
      question: "Do you support custom email accounts with hosting?",
      answer: [
        "Yes, all our hosting plans come with custom business email support. You can create professional email addresses (e.g., yourname@yourdomain.com) directly from your control panel.",
      ],
    },
    {
      question: "What are the payment options available?",
      answer: [
        "We accept all major credit cards, PayPal, and bank transfers. You can choose monthly or yearly billing cycles based on your preference, and discounts are available for longer-term plans.",
      ],
    },
  ];
  