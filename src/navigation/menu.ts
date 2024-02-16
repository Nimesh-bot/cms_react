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
  path?: string;
}

export const menu: MenuItem[] = [
  {
    id: "dashboard",
    title: "menu.dashboard",
    icon: HomeIcon,
    group: "main",
    path: "/",
  },
  {
    id: "pages",
    title: "menu.pages",
    icon: DocumentIcon,
    group: "pages",
    children: [
      {
        id: "users",
        title: "menu.users",
        icon: UserGroupIcon,
        group: "pages",
        children: [
          {
            id: "list",
            title: "common.list",
            icon: ListBulletIcon,
            group: "pages",
            path: "/users/",
          },
          {
            id: "new",
            title: "common.new",
            icon: UserPlusIcon,
            group: "pages",
            path: "/users/add",
          },
        ],
      },
    ],
  },
];
