import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, LayoutTemplate } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="py-4  border-b">
            <div className="max-w-screen-2xl px-4 mx-auto flex justify-between">
                <div className="flex gap-4">
                    <Button variant="secondary" asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2" /> Resume MKR
                        </Link>
                    </Button>
                    <Button variant="outline">
                        <LayoutTemplate className="mr-2" /> Templates
                    </Button>
                </div>
                <input
                    className="border-0 border-b-2 max-w-screen-sm rounded-none text-center text-xl focus:border-b-primary focus:outline-none"
                    placeholder="Untitled"
                />
                <div className="flex gap-4">
                    <ThemeToggler />
                    <Button>
                        <Download className="mr-2" /> Download PDF
                    </Button>
                </div>
            </div>
        </header>
    );
}
