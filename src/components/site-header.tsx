"use client";

// components
import Logo from "./logo";
import Socials from "./socials";
import { cn } from "@/lib/utils";
import Magnetic from "./magnetic";
import MobileNav from "./mobile-nav";
import { nav_menu } from "@/config/site";
import AnimatedLink from "./animated-link";
import { useEffect, useState } from "react";

const SiteHeader = () => {
    const mainMenu = nav_menu.mainMenu;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <header
          className={cn('w-full py-4 flex justify-between sticky top-0 z-50 duration-300', {
            'bg-background top-4 px-6 border rounded-lg mx-auto': isScrolled,
          })}
        >
    
            <Logo />

            <div className="hidden md:flex items-center">
                <div className="flex items-center">
                    <div className="flex gap-8 items-center">
                        {mainMenu.map((nav, index) => (
                            <Magnetic key={index}>
                                <div className="group">
                                    <AnimatedLink animate download={nav.download} href={nav.href}>
                                        {nav.label}
                                    </AnimatedLink>
                                </div>
                            </Magnetic>
                        ))}
                    </div>
                </div>

                <div className="flex">
                    <div className="mx-8 text-gray-200">|</div>
                    <Socials />
                </div>
            </div>

            <MobileNav />
        </header>
    );
};

export default SiteHeader;
