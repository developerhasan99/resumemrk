import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <header className="py-4 border-b">
            <div className="max-w-screen-xl px-4 mx-auto flex justify-between items-center">
                <Link href="/" className="font-bold text-2xl">
                    Resume <span className="text-primary">MKR</span>
                </Link>
                <div className="flex gap-6 items-center">
                    <ul className="flex gap-8">
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/privacy">Privacy</Link>
                        </li>
                        <li>
                            <a href="#">Source</a>
                        </li>
                    </ul>
                    <ThemeToggler />
                    <Button asChild>
                        <Link href="/create" className="">
                            Builder
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
