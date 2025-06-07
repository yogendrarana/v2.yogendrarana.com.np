import Hero from "@/components/landing/hero";
import SiteHeader from "@/components/site-header";
import About from "@/components/landing/about";
import Projects from "@/components/landing/projects";
import SiteFooter from "@/components/site-footer";
import Container from "@/components/container";

const HomePage = () => {
    return (
        <Container>
            <div className="flex flex-col items-center justify-between gap-10 md:gap-0">
                <SiteHeader />
                <Hero />
                <About />
                <Projects />
                <SiteFooter />
            </div>
        </Container>
    );
};

export default HomePage;
