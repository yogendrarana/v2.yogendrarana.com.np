import Hero from "@/components/landing/hero";
import SiteHeader from "@/components/site-header";
import About from "@/components/landing/about";
import Projects from "@/components/landing/projects";
import SiteFooter from "@/components/site-footer";
import Container from "@/components/container";

const HomePage = () => {
    return (
        <Container>
            <SiteHeader />
            <Hero />
            <About />
            <Projects />
            <SiteFooter />
        </Container>
    );
};

export default HomePage;
