export interface NavItemProps {
  id: number;
  name: string;
  path: string;
  items: Array<{
    title: string;
    description: string;
    path: string;
    icon: React.ComponentType;
  }>;
}

export type NavigationData = NavItemProps[];

export interface FooterProps {
  id: number;
  title: string;
  links: Array<{
    label: string;
    path: string;
  }>;
}

export type FooterData = FooterProps[];
