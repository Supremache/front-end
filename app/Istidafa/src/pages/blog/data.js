export const cardData = [
  {
    img: "https://cdn.pixabay.com/photo/2023/06/30/07/55/internet-8097838_1280.jpg",
    tag: "Web Hosting",
    title: "Tips for Choosing the Right Web Hosting Service",
    content:
      "Selecting the right web hosting service is crucial for your website's success. Learn about the key factors to consider, including performance, scalability, and customer support, to make an informed decision.",
    authors: [
      {
        name: "Remy Sharp",
        avatar:
          "https://i.pinimg.com/736x/92/fb/7a/92fb7ae201d0e508d2acc44bf70a0175--male-faces-interesting-faces.jpg",
      },
      {
        name: "Travis Howard",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJxKE4jgTRQ-IASv7mMRVizlAJNnVLlMVjaWaQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg",
    tag: "SEO",
    title: "SEO Best Practices for Website Optimization",
    content:
      "Optimize your website's visibility with SEO best practices. Learn about keyword research, meta tags, content optimization, and how to improve your website's search engine rankings.",
    authors: [
      {
        name: "Erica Johns",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJxKE4jgTRQ-IASv7mMRVizlAJNnVLlMVjaWaQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
    ],
  },
  {
    img: "https://media.istockphoto.com/id/1552877787/photo/lock-hologram-tablet-and-woman-with-data-analysis-safety-software-overlay-and-cyber-security.jpg?s=1024x1024&w=is&k=20&c=4vARg1cNrfYuUq8_68ZQuBRyCcxJnxAz_RKmwRNBGoQ=",
    tag: "Security",
    title: "Essential Website Security Practices",
    content:
      "Protect your website from cyber threats with essential security practices. Explore strategies such as SSL encryption, regular backups, strong passwords, and firewalls to keep your site secure.",
    authors: [
      {
        name: "Kate Morrison",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJxKE4jgTRQ-IASv7mMRVizlAJNnVLlMVjaWaQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
    ],
  },
  {
    img: "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=1024x1024&w=is&k=20&c=VpSNiVam6Fw3egrJYnP28mEEAXyCjFRjqV_k4PK5S04=",
    tag: "Performance",
    title: "How to Improve Website Loading Speed",
    content:
      "Slow website speeds can lead to lost visitors. Learn how to optimize your site’s performance by leveraging caching, image compression, and minimizing code to create a fast, responsive experience.",
    authors: [
      {
        name: "Cindy Baker",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJxKE4jgTRQ-IASv7mMRVizlAJNnVLlMVjaWaQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
    ],
  },
  {
    img: "https://picsum.photos/800/450?random=5",
    tag: "Hosting",
    title: "Understanding Different Types of Web Hosting",
    content:
      "Not all web hosting is created equal. Explore the differences between shared, VPS, dedicated, and cloud hosting, and find out which one is best suited for your website's needs.",
    authors: [
      {
        name: "Agnes Walker",
        avatar:
          "https://i.pinimg.com/736x/92/fb/7a/92fb7ae201d0e508d2acc44bf70a0175--male-faces-interesting-faces.jpg",
      },
      {
        name: "Trevor Henderson",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJxKE4jgTRQ-IASv7mMRVizlAJNnVLlMVjaWaQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
    ],
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
    tag: "Maintenance",
    title: "The Importance of Regular Website Maintenance",
    content:
      "Keep your website running smoothly by implementing regular maintenance routines. Learn why updating plugins, monitoring performance, and addressing security vulnerabilities are essential.",
    authors: [
      {
        name: "Travis Howard",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJxKE4jgTRQ-IASv7mMRVizlAJNnVLlMVjaWaQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
    ],
  },
  {
    img: "https://picsum.photos/800/450?random=7",
    tag: "Backup",
    title: "Best Practices for Website Backup and Recovery",
    content:
      "Ensure your website's data is safe with regular backups. Discover the best practices for scheduling backups, selecting backup solutions, and restoring your site in case of an emergency.",
    authors: [
      {
        name: "Sophia Lee",
        avatar:
          "https://i.pinimg.com/736x/92/fb/7a/92fb7ae201d0e508d2acc44bf70a0175--male-faces-interesting-faces.jpg",
      },
    ],
  },
  {
    img: "https://picsum.photos/800/450?random=8",
    tag: "Uptime",
    title: "Maximizing Uptime for Your Website",
    content:
      "Website downtime can hurt your business. Learn how to maximize uptime by choosing reliable hosting providers, implementing monitoring tools, and preparing for unexpected outages.",
    authors: [
      {
        name: "Liam Martinez",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJxKE4jgTRQ-IASv7mMRVizlAJNnVLlMVjaWaQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
    ],
  },
];

export async function getAllBlogPosts() {
  return cardData.map(post => ({
    ...post,
    slug: post.title.replace(/\s+/g, '-').trim().toLowerCase()
  }))
}
