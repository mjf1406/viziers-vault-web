/** @format */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
    icon: string;
    title: string;
    description: string;
    status: string;
}

const featureList: FeaturesProps[] = [
    {
        icon: "Store",
        title: "Magic Shop Generator",
        description:
            "Generate magic shops based on city population, wealth, and magic level. Create custom worlds and cities for your campaigns.",
        status: "Alpha 1 - Available",
    },
    {
        icon: "BookOpen",
        title: "Spellbook Generator",
        description:
            "Create wizard spellbooks by selecting level, schools of magic, and probability settings for extra spells.",
        status: "Alpha 1 - Available",
    },
    {
        icon: "Swords",
        title: "Encounter Generator",
        description:
            "Generate balanced encounters based on party composition, biome, season, time of day, and travel conditions.",
        status: "Alpha 2 - Coming Soon",
    },
    {
        icon: "Users",
        title: "Party Management",
        description:
            "Create and manage party compositions with level distribution and custom icons for world tracking.",
        status: "Alpha 2 - Coming Soon",
    },
    {
        icon: "Map",
        title: "Battle Map Generator",
        description:
            "Create battle maps with geographical features, weather, and customizable grid settings for VTT export.",
        status: "Alpha 3 - Coming Soon",
    },
    {
        icon: "Globe",
        title: "World Generator",
        description:
            "Generate complete hex worlds with weather simulation, fog of war, and party tracking for exploration campaigns.",
        status: "Alpha 4 - Coming Soon",
    },
];

export const FeaturesSection = () => {
    return (
        <section
            id="features"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                Tools
            </h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                D&D 5e Content Generators
            </h2>

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
                Comprehensive tools for game masters and players to enhance
                their D&D 5e 2024 campaigns.
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featureList.map(({ icon, title, description, status }) => (
                    <div key={title}>
                        <Card className="h-full bg-background border-0 shadow-none">
                            <CardHeader className="flex justify-center items-center">
                                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                                    <Icon
                                        name={icon as keyof typeof icons}
                                        size={24}
                                        color="hsl(var(--primary))"
                                        className="text-primary"
                                    />
                                </div>

                                <CardTitle>{title}</CardTitle>
                                <div className="text-sm text-primary font-medium">
                                    {status}
                                </div>
                            </CardHeader>

                            <CardContent className="text-muted-foreground text-center">
                                {description}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};
