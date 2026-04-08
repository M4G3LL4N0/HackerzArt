export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-12">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              HackerzArt / Signup
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              Create your signal workspace
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
              Start generating monochrome artwork, save your render history, and
              build a distinct terminal-born visual identity inside HackerzArt.
            </p>

            <form className="mt-8 space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.22em] text-white/45"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  minLength={2}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.22em] text-white/45"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@domain.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-xs uppercase tracking-[0.22em] text-white/45"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 hover:shadow-glow"
              >
                Create Account
              </button>

              <a
                href="/login"
                className="block text-center text-sm text-white/65 transition hover:text-white"
              >
                Already have an account? Sign in
              </a>
            </form>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  New workspace
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  From prompts to programmable monochrome output.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Join the early HackerzArt system and start building visual
                  assets across hacker, keygen, gothic, baroque, and terminal
                  rendering modes.
                </p>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-4">
                <pre className="text-[10px] leading-[1.2] text-white/75">
{`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@%#*+=-:.   H A C K E R Z A R T   .:-=+*#%@@@@
@@@@%+-         new creator workspace ready       -+%@
@@@#:   sign up to save renders and presets         :#@
@@@#:   build identity visuals and signal systems   :#@
@@@#:   expand into gallery, API, and workflows     :#@
@@@@%+-                                            -+%@
@@@@@@@%#*+=-:.                            .:-=+*#%@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
