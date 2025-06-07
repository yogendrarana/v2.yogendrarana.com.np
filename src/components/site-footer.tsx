import Link from "next/link";
import Marquee from "./marquee";
import { Icons } from "./icons";
import { MY_DATA } from "@/config/data";
import Magnetic from "./magnetic";
import AnimatedLink from "./animated-link";
import Socials from "./socials";

const data = ["Get in touch *", "Get in touch *", "Get in touch *", "Get in touch *"];
const socials = [
    {
        name: "GitHub",
        href: MY_DATA.contact.github,
        logo: Icons.github
    },
    {
        name: "LinkedIn",
        href: MY_DATA.contact.linkedin,
        logo: Icons.linkedin
    },
    {
        name: "Twitter",
        href: MY_DATA.contact.twitter,
        logo: Icons.twitter
    },
    {
        name: "Bluesky",
        href: MY_DATA.contact.bluesky,
        logo: Icons.bluesky
    }
];

export default function SiteFooter() {
    return (
        <footer className="p-12 mb-12 relative border rounded-xl overflow-hidden">
            <div className="w-full mb-8 font-medium">Get in touch ...</div>

            {/* Main footer content */}
            <div className="flex items-center justify-between">
                {/* Social Links */}
                <Socials showLabel />

                {/* Happy Coding Badge */}
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">Happy Coding!</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
            </div>
        </footer>
    );
}
