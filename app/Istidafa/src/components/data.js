import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'; 
import BuildRoundedIcon from '@mui/icons-material/BuildRounded'; 
import StarRoundedIcon from '@mui/icons-material/StarRounded'; 
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded'; 
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'; 


import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


export const PagesData = [
    {
      icon: AttachMoneyRoundedIcon,
      title: "Hosting",
      path: "/hosting",
      items: [
        { title: "Domain", description: "Register your domain", path: "/domain", icon: MonetizationOnRoundedIcon },
        { title: "Shared Hosting", description: "Affordable hosting for businesses", path: "/hosting", icon: AccountTreeRoundedIcon },
        { title: "VPS Hosting", description: "More control with virtual servers", path: "/hosting", icon: StorageRoundedIcon },
        { title: "Dedicated Hosting", description: "Full control and resources", path: "/hosting", icon: DnsRoundedIcon }
      ],
      
    },
    {
      icon: BuildRoundedIcon,
      title: "Services",
      path: "services",
      items: [
        { title: "24/7 Support", description: "Round-the-clock assistance", path: "/services/support", icon: SupportAgentRoundedIcon },
        { title: "Website Migration", description: "Seamless migration service", path: "/services/website-migration", icon: CloudUploadRoundedIcon },
        { title: "SSL Certificates", description: "Secure connections with SSL", path: "/services/ssl-certificates", icon: HttpsRoundedIcon },
        { title: "Backup & Restore", description: "Automated backups for peace of mind", path: "/services/backup-restore", icon: BackupRoundedIcon }
      ],
    },
    {
      icon: StarRoundedIcon,
      title: "Features",
      path: "/features",
      items: null,
    },
    {
      icon: ArticleRoundedIcon,
      title: "Blog",
      path: "/blog",
      items: [
        { title: "Tips for Choosing the Right Web Hosting Service", description: "Best practices for hosting", path: "/blog/tips-for-choosing-the-right-web-hosting-service", icon: LightbulbRoundedIcon },
        { title: "SEO Best Practices for Website Optimization", description: "Optimize your site for search engines", path: "/blog/seo-best-practices-for-website-optimization", icon: TrendingUpRoundedIcon },
        { title: "Essential Website Security Practices", description: "Tips on securing your website", path: "/blog/essential-website-security-practices", icon: VerifiedUserRoundedIcon },
        { title: "Understanding Different Types of Web Hosting", description: "Select the best hosting plan", path: "/blog/understanding-different-types-of-web-hosting", icon: CheckCircleRoundedIcon }
      ],
    },
    {
      icon: InfoRoundedIcon,
      title: "About Us",
      path: "/about",
      items: null
    },
  ];