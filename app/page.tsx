/** @format */

import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { DisclosureSection } from "@/components/layout/sections/disclosure";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PhilosophySection } from "@/components/layout/sections/philosophy";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
    title: "Vizier's Vault - D&D 5e Tools",
    description:
        "Generate magic shops, encounters, spellbooks, battle maps, and worlds for D&D 5e 2024",
    openGraph: {
        type: "website",
        url: "https://viziers-vault.com",
        title: "Vizier's Vault - D&D 5e Tools",
        description:
            "Generate magic shops, encounters, spellbooks, battle maps, and worlds for D&D 5e 2024",
        images: [
            {
                url: "/hero-image-light.jpeg",
                width: 1200,
                height: 630,
                alt: "Vizier's Vault - D&D 5e Tools",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://viziers-vault.com",
        title: "Vizier's Vault - D&D 5e Tools",
        description:
            "Generate magic shops, encounters, spellbooks, battle maps, and worlds for D&D 5e 2024",
        images: ["/hero-image-light.jpeg"],
    },
};

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <PhilosophySection />
            <ServicesSection />
            <BenefitsSection />
            <PricingSection />
            <TeamSection />
            <DisclosureSection />
            <CommunitySection />
            <FAQSection />
            <ContactSection />
            <FooterSection />
        </>
    );
}
