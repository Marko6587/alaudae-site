import Image from "next/image"
import Link from "next/link"

export default function Logo({ size = "small" }: { size?: "small" | "large" }) {
  return (
    <Link href="/" className="flex items-center">
      {size === "small" ? (
        <div className="w-10 h-10 relative">
          <Image src="/logo.png" alt="Alaudae Logo" fill className="object-contain" priority />
        </div>
      ) : (
        <div className="w-48 h-48 relative mx-auto mb-8">
          <Image src="/logo.png" alt="Alaudae Logo" fill className="object-contain" priority />
        </div>
      )}
    </Link>
  )
}
