"use client";

import { Pencil, Plus, Trash, Upload, User } from "lucide-react";
import Header from "./header";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import InputWithLabel from "./components/input-with-label";

export default function Create() {
    const [profilePic, setProfilePic] = useState("");

    const fileInput = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        fileInput.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] as File;
        if (file) {
            const url = URL.createObjectURL(file);
            setProfilePic(url);
        }
    };

    return (
        <>
            <Header />
            <div className="py-12">
                <div className="max-w-screen-2xl px-4 mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Personal Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                            <div className="flex items-center gap-4">
                                {profilePic ? (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        className="h-20 w-20 border-2 border-dashed rounded"
                                        src={profilePic}
                                        alt="Profile Pic"
                                    />
                                ) : (
                                    <div className="h-20 w-20 border-2 border-dashed rounded flex justify-center items-center">
                                        <User
                                            size={60}
                                            className="text-gray-400"
                                        />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleChange}
                                    ref={fileInput}
                                />
                                <div className="flex flex-col gap-2">
                                    {profilePic ? (
                                        <>
                                            <Button
                                                size="sm"
                                                className="rounded-full"
                                                variant="outline"
                                            >
                                                <Pencil
                                                    className="mr-2"
                                                    size={16}
                                                />
                                                Edit
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="rounded-full"
                                                variant="outline"
                                            >
                                                <Trash
                                                    className="mr-2"
                                                    size={16}
                                                />
                                                Delete
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            size="sm"
                                            className="rounded-full"
                                            variant="outline"
                                            onClick={handleClick}
                                        >
                                            <Upload
                                                className="mr-2"
                                                size={16}
                                            />
                                            Upload photo
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <InputWithLabel
                                id="job-title"
                                label="Job title"
                                onChange={() => {}}
                            />
                            <InputWithLabel
                                id="full-name"
                                label="Full name"
                                onChange={() => {}}
                            />
                            <InputWithLabel
                                id="email"
                                label="Email"
                                onChange={() => {}}
                            />
                            <InputWithLabel
                                id="phone"
                                label="Phone"
                                onChange={() => {}}
                            />
                            <InputWithLabel
                                id="country"
                                label="Country"
                                onChange={() => {}}
                            />
                            <InputWithLabel
                                id="city"
                                label="City"
                                onChange={() => {}}
                            />
                            <InputWithLabel
                                id="address"
                                label="Address"
                                onChange={() => {}}
                            />
                            <InputWithLabel
                                id="post-code"
                                label="Post code"
                                onChange={() => {}}
                            />
                            <InputWithLabel
                                id="dat-of-birth"
                                label="Date of birth"
                                onChange={() => {}}
                            />
                        </div>
                        {/* Professional Summery
                        Employment History
                        Education
                        Website and social Links
                        Skills
                        Languages
                        Courses
                        Hobbies
                        Projects
                        References
                        Internship
                        Extra Curricular Activities 
                        Custom Section
                        */}
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}
