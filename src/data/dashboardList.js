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
  },
  {
    id: 2,
    icon: MdTimeline,
    label: "Analytics",
  },
  {
    id: 3,
    icon: FiTrendingUp,
    label: "Sales",
  },
];

exports.quickMenu = [
  {
    id: 1,
    icon: FiUser,
    label: "Users",
  },
  {
    id: 2,
    icon: FiGift,
    label: "Products",
  },
  {
    id: 3,
    icon: FiDollarSign,
    label: "Transactions",
  },
  {
    id: 4,
    icon: FiBarChart2,
    label: "Reports",
  },
];

exports.notifications = [
  {
    id: 1,
    icon: FiMail,
    label: "Mail",
  },
  {
    id: 2,
    icon: MdComment,
    label: "Feedback",
  },
  {
    id: 3,
    icon: FiMessageCircle,
    label: "Message",
  },
];

exports.staff = [
  {
    id: 1,
    icon: FiBriefcase,
    label: "Manage",
  },
  {
    id: 2,
    icon: MdTimeline,
    label: "Analytics",
  },
  {
    id: 3,
    icon: FiInfo,
    label: "Reports",
  },
];
