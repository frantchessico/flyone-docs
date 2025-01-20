import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0B1121] text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://sjc.microlink.io/JVZDxaEEBywobQOTzaxIczefc3uSzmBPm0R_s24RF2QnrPj50V37BWhrFH8tqKKQ57FGren5Db6IZEMTHVLhrA.jpeg"
              alt="Flyone"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-semibold">Flyone</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="https://f1y.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              Official Website
              <ExternalLink size={16} />
            </Link>
            <Link
              href="https://app.f1y.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              Dashboard
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

