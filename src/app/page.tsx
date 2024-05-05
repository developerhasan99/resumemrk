import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import hero_img from "@/assets/img/hero-img.webp";
import Header from "@/components/header";

export default function Main() {
    return (
        <>
            <Header />
            <div className="py-16">
                <div className="max-w-screen-xl px-4 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl leading-tight md:leading-tight font-bold mb-6">
                            Build your{" "}
                            <span className="text-primary">
                                professional resume
                            </span>{" "}
                            without headache!
                        </h1>
                        <p className="text-lg mb-6">
                            100% Free professional resume builder that does not
                            ask you for your credit card information just before
                            the download.
                        </p>
                        <Button asChild>
                            <Link href="/create">Create your resume</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src={hero_img} alt="Professional Resume" />
                    </div>
                </div>
            </div>
        </>
    );
}
