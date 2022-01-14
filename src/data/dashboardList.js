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
];

exports.quickMenu = [
  {
    id: 1,
    icon: FiGift,
    label: "Tickets",
    url: "tickets",
  },
  {
    id: 2,
    icon: FiDollarSign,
    label: "Transactions",
    url: "transactions",
  },
  {
    id: 3,
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
