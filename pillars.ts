export interface Pillar {
  name: string;
  subtitle: string;
  route: string;
  image: string;
}

export const pillars: Pillar[] = [
  {
    name: "Biography",
    subtitle: "The life & service of a hero",
    route: "/biography",
    image: "/images/biography.jpg",
  },
  {
    name: "Literature",
    subtitle: "A legacy told through words",
    route: "/literature",
    image: "/images/literature.jpg",
  },
  {
    name: "Organization",
    subtitle: "Giving back to veterans",
    route: "/organization",
    image: "/images/organization.jpg",
  },
];
