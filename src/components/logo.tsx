import Link from "next/link";

const Logo = () => {

    return (
        <Link
            href="/"
            className="group inline-flex gap-[10px] cursor-pointer "
        >
            <span className="text-[1.5rem] group-hover:rotate-360 transition-all ease-custom-transition duration-500">
                ©
            </span>

            <span
                style={{ fontSize: "" }}
                className="
                        w-[140px] group-hover:w-[200px]
                        flex items-center gap-[5px] relative overflow-hidden
                        transition-all ease-custom-transition duration-500
                    "
            >
                <p
                    className="
                            group-hover:translate-x-[-105%] whitespace-nowrap
                            transition-all ease-custom-transition duration-500
                        "
                >
                    Yogendra Rana
                </p>

                <span
                    className="
                            absolute left-full
                            group-hover:left-0 whitespace-nowrap
                            transition-all ease-custom-transition duration-500
                        "
                >
                    <p>Web Developer</p>
                </span>
            </span>
        </Link>
    );
};

export default Logo;
