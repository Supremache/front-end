import React from "react";
import { NavigationMenuLink } from "./navigation-menu";
import { cn } from "~/lib/utils";
import { NavLink } from "react-router";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, href, icon = undefined, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <NavLink
            ref={ref}
            to={href}
            className={cn(
              "group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-foreground hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              icon && "flex gap-4 items-center justify-start",
              className
            )}
            {...props}
          >
            {icon && <div className="h-10 w-full max-w-10 text-primary bg-accent rounded-lg col-span-1 flex items-center justify-center">
              {icon}
            </div>}
            <div className="col-span-1">
              <div className="group-hover:text-primary text-sm font-medium leading-none">
                {title}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </NavLink>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export { ListItem };
