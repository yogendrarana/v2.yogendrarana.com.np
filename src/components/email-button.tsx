"use client";

const EmailButton = ({ email }: { email: string }) => {
    const handleClickOnMail = () => {
        window.open(`mailto:${email}`);
    };

    return (
        <button
            onClick={handleClickOnMail}
            className="
                    font-bold
                    block
                    relative
                    text-lg
                    before:content-['']
                    before:py-4
                    before:absolute before:-bottom-1 before:left-0
                    before:w-0
                    before:hover:w-full
                    before:border-b-2
                    before:border-black

                    before:transition-all
                    before:ease-in-out
                    before:duration-500
                "
        >
            {email}
        </button>
    );
};

export default EmailButton;
