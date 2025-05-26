import { Person, Settings, Star } from "@mui/icons-material";

export const createProfileSidebar = [
  {
    label: "Personal Details",
  },
  {
    label: "Pick Your Plan",
  },
  // {
  //   label: "Invite Your Child",
  // },
];

export const sidebarData = [
  {
    icon: Person,
    label: "My Profile",
    url: "/parent/profile",
  },
  {
    icon: Star,
    label: "Subscriptions",
    url: "/parent/subscriptions",
  },
  {
    icon: Settings,
    label: "Settings",
    url: "/parent/settings",
  },
];
