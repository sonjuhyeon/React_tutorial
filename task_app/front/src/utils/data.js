import {
  MdHome,
  MdFactCheck,
  MdWatchLater,
  MdOutlineStar,
} from "react-icons/md";

export const navMenus = [
  { label: "Home", to: "/", icon: <MdHome className="w-5 h-5" />, idx: 0 },
  {
    label: "Completed",
    to: "/completed",
    icon: <MdFactCheck className="w-5 h-5" />,
    idx: 1,
  },
  {
    label: "Proceeding",
    to: "/proceeding",
    icon: <MdWatchLater className="w-5 h-5" />,
    idx: 2,
  },
  {
    label: "Important",
    to: "/important",
    icon: <MdOutlineStar className="w-5 h-5" />,
    idx: 3,
  },
];
