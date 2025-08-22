/** @format */

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
    NO = 0,
    YES = 1,
}

interface PlanProps {
    title: string;
    popular: PopularPlan;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}

const plans: PlanProps[] = [
    {
        title: "Free",
        popular: 0,
        price: 0,
        description:
            "Basic access to core generators with limited features and no data persistence.",
        buttonText: "Start Using Free",
        benefitList: [
            "Magic Shop Generator (premade cities only)",
            "Spellbook Generator",
            "CSV export only",
            "No data persistence",
            "Community support",
        ],
    },
    {
        title: "Premium",
        popular: 1,
        price: 3,
        description:
            "Full access to all features with data persistence and advanced capabilities.",
        buttonText: "Start Free Trial",
        benefitList: [
            "All generators (current and future)",
            "Create custom worlds and cities",
            "Permalink generation",
            "Data persistence and export",
            "Priority support",
            "Free month trial included",
        ],
    },
];

export const PricingSection = () => {
    return (
        <section className="container py-24 sm:py-32">
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                Pricing
            </h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                Simple, transparent pricing
            </h2>

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
                Choose the plan that fits your D&D campaign needs.
            </h3>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-4 max-w-4xl mx-auto">
                {plans.map(
                    ({
                        title,
                        popular,
                        price,
                        description,
                        buttonText,
                        benefitList,
                    }) => (
                        <Card
                            key={title}
                            className={
                                popular === PopularPlan?.YES
                                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                                    : ""
                            }
                        >
                            <CardHeader>
                                <CardTitle className="pb-2">{title}</CardTitle>

                                <CardDescription className="pb-4">
                                    {description}
                                </CardDescription>

                                <div>
                                    <span className="text-3xl font-bold">
                                        ${price}
                                    </span>
                                    <span className="text-muted-foreground">
                                        {" "}
                                        /month
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="flex">
                                <div className="space-y-4">
                                    {benefitList.map((benefit) => (
                                        <span
                                            key={benefit}
                                            className="flex"
                                        >
                                            <Check className="text-primary mr-2" />
                                            <h3>{benefit}</h3>
                                        </span>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    variant={
                                        popular === PopularPlan?.YES
                                            ? "default"
                                            : "secondary"
                                    }
                                    className="w-full"
                                >
                                    {buttonText}
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
