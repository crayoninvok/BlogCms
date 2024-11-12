"use client";
import { useState } from "react";
import { FaCheck, FaLink } from "react-icons/fa";
import { useCopyToClipboard } from "usehooks-ts";

export default function CopyButton({ Link }: { Link: string }) {
    const [, copy] = useCopyToClipboard();
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = () => {
        copy(Link);
        setCopied(true);
   
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div
            className="text-gray-500 cursor-pointer"
            onClick={handleCopy}
            data-cy="copy-button"
        >
            {copied ? <FaCheck data-cy="check-icon" /> : <FaLink data-cy="link-icon" />}
        </div>
    );
}
