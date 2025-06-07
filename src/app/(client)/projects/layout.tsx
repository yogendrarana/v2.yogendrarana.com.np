import React from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Container from "@/components/container";

function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            <SiteHeader />
            {children}
            <SiteFooter />
        </Container>
    );
}

export default ProjectsLayout;
