import {
  FiTrendingUp,
  FiUser,
  FiDollarSign,
  FiGift,
  FiBarChart2,
  FiMail,
  FiMessageCircle,
  FiBriefcase,
  FiInfo,
} from "react-icons/fi";
import { MdTimeline, MdLineStyle, MdComment } from "react-icons/md";
exports.dashboard = [
  {
    id: 1,
    icon: MdLineStyle,
    label: "Home",
    url: "home",
  },
  {
    id: 2,
    icon: MdTimeline,
    label: "Analytics",
    url: "analytics",
  },
  {
    id: 3,
    icon: FiTrendingUp,
    label: "Sales",
    url: "sales",
  },
];

exports.quickMenu = [
  {
    id: 1,
    icon: FiUser,
    label: "Users",
    url: "users",
  },
  {
    id: 2,
    icon: FiGift,
    label: "Products",
    url: "products",
  },
  {
    id: 3,
    icon: FiDollarSign,
    label: "Transactions",
    url: "transactions",
  },
  {
    id: 4,
    icon: FiBarChart2,
    label: "Reports",
    url: "reports",
  },
];

exports.notifications = [
  {
    id: 1,
    icon: FiMail,
    label: "Mail",
    url: "mail",
  },
  {
    id: 2,
    icon: MdComment,
    label: "Feedback",
    url: "feedback",
  },
  {
    id: 3,
    icon: FiMessageCircle,
    label: "Message",
    url: "message",
  },
];

exports.staff = [
  {
    id: 1,
    icon: FiBriefcase,
    label: "Manage",
    url: "manage",
  },
  {
    id: 2,
    icon: MdTimeline,
    label: "Analytics",
    url: "analytics",
  },
  {
    id: 3,
    icon: FiInfo,
    label: "Reports",
    url: "reports",
  },
];
