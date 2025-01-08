import { Button } from "@/components/ui/button";
import { payment } from "@/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";

const footer = [
  {
    title: "Gategories",
    items: [
      { name: "Women", href: "#" },
      { name: "Men", href: "#" },
      { name: "Kids", href: "#" },
      { name: "Accessories", href: "#" },
      { name: "Shoes", href: "#" },
      { name: "New Arrivals", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", href: "#" },
      { name: "Our Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Terms and Conditions", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="container mx-auto py-8 px-6 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {/* Brand and About Section */}
        <div className="col-span-2">
          <img
            src="/images/vestiuralogo.png"
            alt="Vestiura Logo"
            className="h-10 w-auto object-contain"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Vestiura is a fashion-forward brand that offers a wide range of
            clothing and accessories for every occasion.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {payment.map((item) => (
              <img
                key={item}
                src={item}
                alt="Payment Option"
                className="h-8 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {footer.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="font-bold text-lg text-primary">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider and Bottom Footer */}
      <div className="mt-8">
        <hr className="border-t border-border mb-4" />
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Vestiura. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Visit us on Facebook"
            >
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook fill="currentColor" stroke="none"/>
              </Button>
            </a>
            <a
              href="#"
              aria-label="Visit us on Instagram"
            >
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram />
              </Button>
            </a>
            <a
              href="#"
              aria-label="Visit us on Twitter"
            >
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
