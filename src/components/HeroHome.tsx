
export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="capitalize animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-200),var(--color-gray-50),var(--color-emerald-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Full-stack Agency
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-emerald-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                From Brazil
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}