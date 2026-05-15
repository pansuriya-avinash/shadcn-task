import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const contactInfo = [
  {
    icon: <Clock className="size-5 text-muted-foreground" />,
    title: "Open Hours",
    details: ["Monday-Friday", "8:00 am to 5:00 pm"],
  },
  {
    icon: <MapPin className="size-5 text-muted-foreground" />,
    title: "Our Address",
    details: ["802 Perston Rd, Maine", "96812, USA"],
  },
  {
    icon: <Mail className="size-5 text-muted-foreground" />,
    title: "Email",
    details: ["info@seliziakitchen.com"],
  },
  {
    icon: <Phone className="size-5 text-muted-foreground" />,
    title: "Phone",
    details: ["+1 (123) 456-7890"],
  },
];