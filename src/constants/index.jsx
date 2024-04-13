import { FaRegSmile, FaRegCalendarPlus } from "react-icons/fa";
import { MdSettingsVoice, MdOutlineRadioButtonChecked } from "react-icons/md";
import { TiInputChecked } from "react-icons/ti";
import { GoFileMedia } from "react-icons/go";
import { BsCalendar2Date } from "react-icons/bs";
import { RxText } from "react-icons/rx";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiDotsSix } from "react-icons/pi";

export const components = [
  {
    title: "Question Type",
    items: [
      {
        id: 1,
        icon: <FaRegSmile />,
        label: "Smiley rating",
        dots: <PiDotsSix />,
      },
      {
        id: 2,
        icon: <MdSettingsVoice />,
        label: "Voice feedback",
        dots: <PiDotsSix />,
      },
      {
        id: 3,
        icon: <MdOutlineRadioButtonChecked />,
        label: "Single choice",
        dots: <PiDotsSix />,
      },
      {
        id: 4,
        icon: <TiInputChecked />,
        label: "Multiple choice",
        dots: <PiDotsSix />,
      },
      {
        id: 5,
        icon: <GoFileMedia />,
        label: "Media file",
        dots: <PiDotsSix />,
      },
      {
        id: 6,
        icon: <BsCalendar2Date />,
        label: "Date option",
        dots: <PiDotsSix />,
      },
      {
        id: 7,
        icon: <RxText />,
        label: "Text input",
        dots: <PiDotsSix />,
      },
      {
        id: 8,
        icon: <FaRegCalendarPlus />,
        label: "Free text",
        dots: <PiDotsSix />,
      },
      {
        id: 9,
        icon: <IoIosInformationCircleOutline />,
        label: "Information",
        dots: <PiDotsSix />,
      },
    ],
  },
  {
    title: "Question Type2",
    items: [
      {
        id: 10,
        icon: <FaRegSmile />,
        label: "Smiley rating",
        dots: "...",
      },
      {
        id: 11,
        icon: <MdSettingsVoice />,
        label: "Voice feedback",
        dots: "...",
      },
      {
        id: 12,
        icon: <MdOutlineRadioButtonChecked />,
        label: "Single choice",
        dots: "...",
      },
      {
        id: 13,
        icon: <TiInputChecked />,
        label: "Multiple choice",
        dots: "...",
      },
      {
        id: 14,
        icon: <GoFileMedia />,
        label: "Media file",
        dots: "...",
      },
      {
        id: 15,
        icon: <BsCalendar2Date />,
        label: "Date option",
        dots: "...",
      },
      {
        id: 16,
        icon: <RxText />,
        label: "Text input",
        dots: "...",
      },
      {
        id: 17,
        icon: <FaRegCalendarPlus />,
        label: "Free text",
        dots: "...",
      },
      {
        id: 18,
        icon: <IoIosInformationCircleOutline />,
        label: "Information",
        dots: "...",
      },
    ],
  },
];
