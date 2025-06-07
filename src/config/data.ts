import { ArtsyLogo, SwiftLogo, LightBulb } from "@/assets";

export const MY_DATA = {
    name: "Yogendra Rana",
    initials: "YR",
    location: "Pokhara, Nepal",
    locationLink: "https://www.google.com/maps/place/pokhara",
    about: "Full Stack Developer",

    avatarUrl: " https://github.com/yogendrarana.png",
    personalWebsiteUrl: "https://www.yogendrarana.com.np/",
    cvUrl: "https://cv.yogendrarana.com.np",
    contact: {
        emails: ["yogendrarana4321@gmail.com", "yogendrarana.mail@gmail.com"],
        github: "https://github.com/yogendrarana",
        linkedin: "https://www.linkedin.com/in/yogendra-rana/",
        twitter: "https://twitter.com/yooogendra_rana",
        bluesky: "https://bsky.app/profile/yogendrarana.bsky.social"
    },
    education: [
        {
            school: "Prithvi Narayan Campus, Pokhara, Gandaki, Nepal",
            degree: "Bachelor's Degree in Computer Science and Information Technology",
            start: "2018",
            end: "2023"
        },
        {
            school: "SOS Hermann Gmeiner Gandaki, Nepal",
            degree: "10+2 Science",
            start: "2018",
            end: "2016"
        }
    ],
    skills: [
        "JavaScript",
        "TypeScript",
        "Go",
        "React",
        "Next",
        "Node",
        "Express",
        "Nest",
        "REST API",
        "GraphQL",
        "Socket.io",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "Nginx",
        "Ubuntu"
    ],
    projects: [
        {
            title: "Node Blueprint",
            techStack: ["React", "Node.js"],
            description:
                "Node Blueprint helps you scaffold Node.js applications with your preferred framework, database, and ORM in just one command.",
            image: LightBulb,
            liveLink: "https://node-blueprint.vercel.app/",
            githubLink: "https://github.com/yogendrarana/node-blueprint"
        },
        {
            title: "Craft UI",
            techStack: ["Next.js", "Tailwind CSS"],
            description:
                "A collection of beautiful, interactive UI components built with React.js, Tailwind CSS, and Framer Motion.",
            image: LightBulb,
            liveLink: "https://craft-dot-ui.vercel.app/",
            githubLink: "https://github.com/yogendrarana/craftui"
        },
        {
            title: "Feedmo",
            techStack: ["Next.js", "Radix UI", "Shad CN", "Auth.js", "MongoDB", "Resend", "Stripe"],
            description:
                "An open source project helping web developers collect feedbacks from their users.",
            image: LightBulb,
            liveLink: "https://feedmo.vercel.app/",
            githubLink: "https://github.com/yogendrarana/feedmo"
        },
        {
            title: "Swift Chat",
            techStack: ["Next.js", "Zustand", "Pusher", "Auth.js", "Framer Motion"],
            description: "A minimal web chat application.",
            image: SwiftLogo,
            liveLink: "https://swift-web-chat.vercel.app/",
            githubLink: "https://github.com/yogendrarana/swift"
        },
        {
            title: "Artsy Web Gallery",
            techStack: ["React.js", "Redux Toolkit", "Express.js", "MongoDB", "Stripe", "Khalti"],
            description: "A web platform for art enthusiasts to buy and sell art.",
            image: ArtsyLogo,
            liveLink: "https://artsy-art-gallery.vercel.app/",
            githubLink: "https://github.com/yogendrarana/artsy"
        },
        {
            title: "Ecommerce Website",
            techStack: ["React.js", "Zustand", "Framer Motion"],
            description: "A minimal frontend only ecommerce website.",
            image: "",
            liveLink: "https://react-web-ecommerce.vercel.app/",
            githubLink: "https://github.com/yogendrarana/react-ecommerce"
        }
    ],
    faq: [
        {
            question: "My Tech stack",
            answer: "React.js, Next.js, Node.js, and Express.js. I work with both MongoDB and PostgreSQL for databases. I also explore Go when I have time."
        },
        {
            question: "My Experience",
            answer: "I began my professional career in early 2023 as frontend React.js intern . Since then I have worked mostly as a full stack developer."
        },
        {
            question: "My Education",
            answer: "B.Sc. in Computer Science and Information Technology, Tribhuvan University, Nepal."
        },
    ]
};
