import { FOUNDERS_VIDEO, ORIGIN_STORY } from '@/lib/site'

/** The founders' monitor: their video when it exists, a clear "coming soon" card until then. */
function Monitor() {
  return (
    <div className="rounded-[18px] bg-[linear-gradient(160deg,#1d3f68,#0f2440_55%,#071426)] p-3 shadow-[0_30px_60px_rgb(0_0_0/0.55)] sm:p-4">
      <div className="panel-inset rounded-[10px] p-2 sm:p-3">
        <div className="relative aspect-video overflow-hidden rounded-[6px] bg-[#05070b]">
          {FOUNDERS_VIDEO ? (
            <video
              className="h-full w-full object-cover"
              src={FOUNDERS_VIDEO.src}
              poster={FOUNDERS_VIDEO.poster}
              controls
              playsInline
              preload="metadata"
            >
              Your browser can&apos;t play this video.
            </video>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              {/* Screen glass: faint scan lines and a warm bloom */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgb(255_255_255/0.025)_0_1px,transparent_1px_4px),radial-gradient(70%_60%_at_50%_45%,rgb(23_195_255/0.12),transparent)]"
              />
              <span
                aria-hidden="true"
                className="relative flex h-16 w-16 items-center justify-center rounded-full border border-brass/60 bg-[#0f1218] sm:h-20 sm:w-20"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" className="ml-1 text-brass">
                  <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
                </svg>
              </span>
              <p className="plate-label relative text-amber">Founders video coming soon</p>
              <p className="relative max-w-sm text-sm text-muted">
                Matt and Gino on why they built M&amp;G and who it&apos;s for.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between px-2">
        <span className="plate-label text-[0.7rem] text-[#c9d3e0]/80">Matt and Gino</span>
        <span className="flex gap-2" aria-hidden="true">
          <span className="lamp" data-on={FOUNDERS_VIDEO ? 'green' : 'amber'} />
          <span className="lamp" />
        </span>
      </div>
    </div>
  )
}

export function Founders() {
  return (
    <section id="founders" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div data-reveal>
          <Monitor />
        </div>
        <figure data-reveal>
          <p className="plate-label brass inline-block rounded-[4px] px-3 py-2">Why we built it</p>
          <blockquote className="mt-7 font-display text-[clamp(1.6rem,2.8vw,2.25rem)] font-extrabold uppercase leading-[1.08] text-ink">
            &ldquo;{ORIGIN_STORY.split('. ')[0]}.&rdquo;
          </blockquote>
          <p className="mt-6 text-lg text-muted">{ORIGIN_STORY.split('. ').slice(1).join('. ')}</p>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-brass" aria-hidden="true" />
            <span className="font-semibold">Matt and Gino</span>
            <span className="text-muted">Agency owners and founders</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
