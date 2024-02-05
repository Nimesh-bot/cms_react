import {
  DocumentIcon,
  HomeIcon,
  ListBulletIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

export interface MenuItem {
  id: string;
  title: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  group: string;
  children?: MenuItem[];
}

export const menu: MenuItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: HomeIcon,
    group: "main",
  },
  {
    id: "pages",
    title: "Pages",
    icon: DocumentIcon,
    group: "pages",
    children: [
      {
        id: "users",
        title: "Users",
        icon: UserGroupIcon,
        group: "pages",
        children: [
          {
            id: "list",
            title: "List",
            icon: ListBulletIcon,
            group: "pages",
          },
          {
            id: "new",
            title: "New",
            icon: UserPlusIcon,
            group: "pages",
          },
        ],
      },
    ],
  },
];
