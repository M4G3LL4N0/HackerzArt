export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-24">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} HackerzArt
          </p>
          <span className="hidden text-muted-foreground md:block">•</span>
          <p className="text-sm text-muted-foreground">
            A Noaerth Company
          </p>
        </div>
      </div>
    </footer>
  )
}
