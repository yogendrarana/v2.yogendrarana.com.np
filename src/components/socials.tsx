import { Icons } from "./icons";
import Magnetic from "./magnetic";
import { MY_DATA } from "@/config/data";
import AnimatedLink from "./animated-link";

export const socials = [
    {
        name: "GitHub",
        url: MY_DATA.contact.github,
        logo: Icons.github
    },
    {
        name: "LinkedIn",
        url: MY_DATA.contact.linkedin,
        logo: Icons.linkedin
    },
    {
        name: "Twitter",
        url: MY_DATA.contact.twitter,
        logo: Icons.twitter
    },
    {
        name: "Bluesky",
        url: MY_DATA.contact.bluesky,
        logo: Icons.bluesky
    }
];

const Socials = ({ showLabel = false }: { showLabel?: boolean }) => {
    return (
        <div className="flex justify-center items-center gap-6">
            {socials.map((option, index) => (
                <Magnetic key={index}>
                    <div className="group">
                        <AnimatedLink
                            isExternal
                            animate
                            href={option.url}
                            className="grid place-items-center"
                        >
                            {showLabel ? (
                                <div className="text-sm">{option.name}</div>
                            ) : (
                                <option.logo className="h-4 w-4" />
                            )}
                        </AnimatedLink>
                    </div>
                </Magnetic>
            ))}
        </div>
    );
};

export default Socials;
