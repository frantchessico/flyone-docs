import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a1f2b] bg-[radial-gradient(circle_at_center,_rgba(87,212,104,0.15)_0%,_rgba(26,31,43,1)_70%)] flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-8 max-w-3xl">
        {/* Logo */}
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/flyone.svg"
            alt="Flyone Logo"
            className="dark:invert"
            width={180}
            height={37}
            priority
          />
        </Link>

        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          404: Link Not Found
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Oops! It seems this link got lost in cyberspace. 
          But don't worry—Flyone's smart routing system always has a way forward.
        </p>

        {/* CTA Button */}
        <Button 
          asChild
          size="lg"
          className="bg-[#57d468] hover:bg-[#45a049] text-white rounded-full px-8 py-6 text-lg"
        >
          <Link href="https://f1y.pro">
            Back to Homepage
          </Link>
        </Button>

        {/* Additional Context */}
        <p className="text-sm text-gray-500 mt-8">
          Need assistance? Check out our{" "}
          <Link href="https://f1y.pro#faqs" className="text-[#57d468] hover:underline">
            FAQs
          </Link>{" "}
          or{" "}
          <Link href="https://f1y.pro" className="text-[#57d468] hover:underline">
            contact support
          </Link>.
        </p>
      </div>
    </div>
  );
}

