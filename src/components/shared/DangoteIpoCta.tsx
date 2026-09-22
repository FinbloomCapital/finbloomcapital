const dangoteImageUrl =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Dangote%20petroleum%20refinery%20large%20blue%20crude%20oil%20storage%20tank%20with%20red%20horizontal%20pipes%2C%20yellow%20safety%20railings%20and%20stairs%2C%20DANGOTE%20logo%20with%20white%20eagle%20emblem%2C%20industrial%20facility%2C%20120%20million%20litres%20capacity%20tank%2C%20realistic%20industrial%20photograph%2C%20high%20detail%2C%20teal%20sky%20background&image_size=landscape_16_9';

const dangoteApplyUrl =
  'https://finbloom-capital-ltd.lsq.app/loans?view=application&id=33267';

export default function DangoteIpoCta() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${dangoteImageUrl})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(3, 79, 91, 0.92) 0%, rgba(3, 79, 91, 0.78) 50%, rgba(3, 79, 91, 0.62) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-8 md:max-w-2xl">
          <h2
            className="font-extrabold leading-[1.2] tracking-tight text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
              fontSize: 'clamp(22px, 4vw, 36px)',
            }}
          >
            Got your eyes on the Dangote IPO Stocks? We have just the right
            funding for you!
          </h2>
          <a
            href={dangoteApplyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#046675] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#07bfdb]"
          >
            Apply for Financing
          </a>
        </div>
      </div>
    </section>
  );
}
