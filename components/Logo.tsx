import Image from 'next/image'

/** The logo is black on white, so it sits on a white disc against the dark page. */
export function Logo({ size = 40 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white"
      style={{ width: size, height: size }}
    >
      <Image src="/logo.webp" alt="" width={size} height={size} priority />
    </span>
  )
}
