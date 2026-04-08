export default function GeneratePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            HackerzArt / Generate
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Generate Signal
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-white/65">
            Turn prompts and source images into terminal-born monochrome output.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="prompt"
                  className="text-xs uppercase tracking-[0.22em] text-white/45"
                >
                  Prompt
                </label>
                <textarea
                  id="prompt"
                  rows={8}
                  placeholder="Describe the hacker, keygen, gothic, or terminal composition you want to generate..."
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="style"
                    className="text-xs uppercase tracking-[0.22em] text-white/45"
                  >
                    Style
                  </label>
                  <select
                    id="style"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
                    defaultValue="hacker"
                  >
                    <option value="hacker">Hacker</option>
                    <option value="keygen">Keygen</option>
                    <option value="gothic">Gothic</option>
                    <option value="baroque">Baroque</option>
                    <option value="terminal">Terminal</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="width"
                    className="text-xs uppercase tracking-[0.22em] text-white/45"
                  >
                    Width
                  </label>
                  <select
                    id="width"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
                    defaultValue="120"
                  >
                    <option value="80">80</option>
                    <option value="100">100</option>
                    <option value="120">120</option>
                    <option value="160">160</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="density"
                    className="text-xs uppercase tracking-[0.22em] text-white/45"
                  >
                    Density
                  </label>
                  <select
                    id="density"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
                    defaultValue="high"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="extreme">Extreme</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contrast"
                    className="text-xs uppercase tracking-[0.22em] text-white/45"
                  >
                    Contrast
                  </label>
                  <select
                    id="contrast"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
                    defaultValue="dramatic"
                  >
                    <option value="soft">Soft</option>
                    <option value="balanced">Balanced</option>
                    <option value="dramatic">Dramatic</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="upload"
                  className="text-xs uppercase tracking-[0.22em] text-white/45"
                >
                  Source Image
                </label>
                <input
                  id="upload"
                  type="file"
                  className="block w-full rounded-2xl border border-dashed border-white/15 bg-black/30 px-4 py-6 text-sm text-white/70 file:mr-4 file:rounded-xl file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-medium file:text-black"
                />
              </div>

              <button 
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={false} // TODO: Connect to actual loading state
              >
                Generate Artwork
                {false && ( // TODO: Connect to actual loading state
                  <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                )}
              </button>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Live Preview
                </p>
                <h2 className="mt-2 text-lg font-medium">Terminal Output</h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                Demo Render
              </span>
            </div>

            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-4 text-[10px] leading-[1.2] text-white/80">
{`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@%#*++==--::..   ..::--==++*#%@@@@@@@@@@
@@@@@@@@@@@@@@@@%*+=-:.                           .:-=+*%@@@@@
@@@@@@@@@@@@@#+-.     H A C K E R Z A R T   S I G N A L      .-+#@
@@@@@@@@@@#=.          machine-rendered monochrome             .=#@
@@@@@@@@@*:      #######%%%%%%%@@@@@@@%%%%%%%#######             :*@
@@@@@@@@%-      ###***+++====-----:::-----====+++***###           -%@
@@@@@@@@#:      **   gothic / keygen / terminal / baroque         :#@
@@@@@@@@#:      **   prompt-driven aesthetic generation           :#@
@@@@@@@@%-      ###***+++====-----:::-----====+++***###           -%@
@@@@@@@@@*:             preview pipeline placeholder              :*@
@@@@@@@@@@#=.                                               .=#@@@@@@
@@@@@@@@@@@@@#+-.                                       .-+#@@@@@@@@@
@@@@@@@@@@@@@@@@%*+=-:.                           .:-=+*%@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@%#*++==--::..   ..::--==++*#%@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`}
            </pre>
          </section>
        </div>
      </div>
    </main>
  )
}
