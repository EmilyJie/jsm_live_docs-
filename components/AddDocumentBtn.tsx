"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export default function AddDocumentBtn({ userId, email }: AddDocumentBtnProps) {
    const addDocumentHandler = async () => {};

    return (
        <Button type="submit" onClick={addDocumentHandler} className="gradient-blue flex gap-1 shadow-md">
            <Image src="/assets/icons/add.svg" alt="Add document" width={24} height={24} />
            <p className="hidden sm:block">Start a blank document</p>
        </Button>
    );
}
