/** @format */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface PhilosophyItemProps {
    icon: string;
    title: string;
    description: string;
    purpose: string;
    designPrinciple: string;
}

const philosophyItems: PhilosophyItemProps[] = [
    {
        icon: "Store",
        title: "Magic Shop Generator",
        description:
            "Generate magic shops based on city population, wealth, and magic level.",
        purpose:
            "Eliminate the time-consuming process of manually creating balanced magic shops that fit the campaign setting.",
        designPrinciple:
            "Realistic world-building through data-driven generation that respects D&D 5e economy and rarity systems.",
    },
    {
        icon: "BookOpen",
        title: "Spellbook Generator",
        description:
            "Create wizard spellbooks by selecting level, schools of magic, and probability settings.",
        purpose:
            "Provide game masters with authentic wizard spellbooks that reflect character choices and campaign progression.",
        designPrinciple:
            "Educational tool that helps players understand spell schools and wizard progression while maintaining game balance.",
    },
    {
        icon: "Swords",
        title: "Encounter Generator",
        description:
            "Generate balanced encounters based on party composition, biome, and travel conditions.",
        purpose:
            "Create meaningful, challenging encounters that enhance storytelling without overwhelming players or requiring hours of preparation.",
        designPrinciple:
            "Environmental storytelling through biome-specific encounters that feel natural and enhance world immersion.",
    },
    {
        icon: "Map",
        title: "Battle Map Generator",
        description:
            "Create battle maps with geographical features, weather, and customizable grid settings.",
        purpose:
            "Transform encounters into memorable visual experiences that enhance tactical gameplay and player engagement.",
        designPrinciple:
            "Modular design allowing customization while providing intelligent defaults that work for most scenarios.",
    },
    {
        icon: "Globe",
        title: "World Generator",
        description:
            "Generate complete hex worlds with weather simulation, fog of war, and party tracking.",
        purpose:
            "Create living, breathing worlds that evolve with player actions and provide endless exploration opportunities.",
        designPrinciple:
            "Procedural generation that creates coherent, believable worlds while maintaining the human touch in storytelling.",
    },
];

export const PhilosophySection = () => {
    return (
        <section
            id="philosophy"
            className="container py-24 sm:py-32"
        >
            <div className="text-center mb-12">
                <h2 className="text-lg text-primary mb-2 tracking-wider">
                    Philosophy
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Design Philosophy
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Every tool in Vizier&apos;s Vault is designed with a
                    specific purpose: to enhance storytelling, reduce
                    preparation time, and create more engaging D&D experiences
                    while preserving the human creativity that makes tabletop
                    gaming special.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {philosophyItems.map((item) => (
                    <Card
                        key={item.title}
                        className="h-full"
                    >
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Icon
                                        name={item.icon as keyof typeof icons}
                                        size={20}
                                        color="hsl(var(--primary))"
                                        className="text-primary"
                                    />
                                </div>
                                <CardTitle className="text-xl">
                                    {item.title}
                                </CardTitle>
                            </div>
                            <p className="text-muted-foreground">
                                {item.description}
                            </p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-sm text-primary mb-1">
                                    Purpose
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {item.purpose}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm text-primary mb-1">
                                    Design Principle
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {item.designPrinciple}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-16">
                <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Core Philosophy</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div>
                            <h4 className="font-semibold mb-2">
                                🎯 Focus on Storytelling
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Tools should enhance narrative, not replace it.
                                Every generated element serves the story.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">
                                ⚖️ Balance & Fairness
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                All content follows D&D 5e guidelines to ensure
                                fair, challenging, and rewarding gameplay.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">
                                🎨 Human Creativity First
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Tools augment human creativity, never replace
                                it. The best stories come from people, not
                                algorithms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
