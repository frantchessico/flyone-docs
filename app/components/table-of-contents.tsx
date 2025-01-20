import Link from "next/link"

export function TableOfContents() {
  return (
    <nav className="sticky top-4">
      <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        <li>
          <Link href="#introduction" className="hover:underline">
            Introduction
          </Link>
        </li>
        <li>
          <Link href="#features" className="hover:underline">
            Features
          </Link>
        </li>
        <li>
          <Link href="#installation" className="hover:underline">
            Installation
          </Link>
        </li>
        <li>
          <Link href="#usage" className="hover:underline">
            Usage
          </Link>
        </li>
        <li>
          <Link href="#error-handling" className="hover:underline">
            Error Handling
          </Link>
        </li>
        <li>
          <Link href="#configuration" className="hover:underline">
            Configuration Options
          </Link>
        </li>
        <li>
          <Link href="#contributing" className="hover:underline">
            Contributing
          </Link>
        </li>
        <li>
          <Link href="#license" className="hover:underline">
            License
          </Link>
        </li>
      </ul>
    </nav>
  )
}

