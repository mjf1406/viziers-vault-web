/** @format */

import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import { getAvailableTools } from "@/lib/tools";

export const FooterSection = () => {
    return (
        <footer
            id="footer"
            className="container py-24 sm:py-32"
        >
            <div className="p-10 bg-card border border-secondary rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                    <div className="col-span-full xl:col-span-2">
                        <Link
                            href="#"
                            className="flex font-bold items-center"
                        >
                            <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

                            <h3 className="text-2xl">Vizier&apos;s Vault</h3>
                        </Link>
                        <p className="text-muted-foreground mt-2">
                            D&D 5e content generators for game masters and
                            players.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Tools</h3>
                        {getAvailableTools().map((tool) => (
                            <div key={tool.id}>
                                <Link
                                    href={tool.url}
                                    className="opacity-60 hover:opacity-100"
                                >
                                    {tool.title}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Resources</h3>

                        <div>
                            <Link
                                href="https://open5e.com/"
                                target="_blank"
                                className="opacity-60 hover:opacity-100"
                            >
                                Open5e
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="https://www.dndbeyond.com/"
                                target="_blank"
                                className="opacity-60 hover:opacity-100"
                            >
                                D&D Beyond
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="https://resources.viziersvault.com/Docs"
                                target="_blank"
                                className="opacity-60 hover:opacity-100"
                            >
                                Docs
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="https://resources.viziersvault.com/Blog"
                                target="_blank"
                                className="opacity-60 hover:opacity-100"
                            >
                                Blog
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Support</h3>
                        <div>
                            <Link
                                href="#contact"
                                className="opacity-60 hover:opacity-100"
                            >
                                Contact Us
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="#faq"
                                className="opacity-60 hover:opacity-100"
                            >
                                FAQ
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="#contact"
                                className="opacity-60 hover:opacity-100"
                            >
                                Feedback
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Community</h3>
                        <div>
                            <Link
                                href="https://github.com/mjf1406/viziers-vault-app"
                                target="_blank"
                                className="opacity-60 hover:opacity-100"
                            >
                                GitHub
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="#"
                                className="opacity-60 hover:opacity-100"
                            >
                                Discord
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="#"
                                className="opacity-60 hover:opacity-100"
                            >
                                Reddit
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Legal</h3>
                        <div>
                            <Link
                                href="#"
                                className="opacity-60 hover:opacity-100"
                            >
                                Privacy Policy
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="#"
                                className="opacity-60 hover:opacity-100"
                            >
                                Terms of Service
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="#"
                                className="opacity-60 hover:opacity-100"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground">
                        © 2024 Vizier&apos;s Vault. Built for the TTRPG
                        community.
                    </p>

                    <div className="flex gap-4">
                        <Link
                            href="https://shadcn-landing-page-livid.vercel.app/"
                            target="_blank"
                            className="opacity-60 hover:opacity-100"
                        >
                            Landing Page Template
                        </Link>
                        <Link
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
