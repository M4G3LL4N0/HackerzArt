export default function AccountPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            HackerzArt / Account
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Account Settings
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-white/65">
            Manage your profile, defaults, and future workspace preferences for
            HackerzArt.
          </p>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-lg font-medium">Profile</h2>
              <p className="text-sm text-white/60">
                Account identity, email, and workspace metadata will live here.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Default Style
                </p>
                <p className="mt-2 text-base text-white">Hacker</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Theme
                </p>
                <p className="mt-2 text-base text-white">Monochrome Dark</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
