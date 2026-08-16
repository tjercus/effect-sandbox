# effect-sandbox

A minimal Deno + [Effect](https://effect.website) playground.

## Install Deno

**macOS / Linux:**

```bash
curl -fsSL https://deno.land/install.sh | sh
```

**Windows (PowerShell):**

```powershell
irm https://deno.land/install.ps1 | iex
```

**Homebrew:**

```bash
brew install deno
```

Verify the install:

```bash
deno --version
```

See the [official install guide](https://docs.deno.com/runtime/getting_started/installation/) for other options.

## Run

```bash
./start.sh          # run once
./watch.sh          # re-run on file changes
```

Or directly:

```bash
deno run main.ts
```

If the program needs I/O or network access, add the relevant flags:

```bash
deno run --allow-read --allow-net main.ts
```

## Project layout

- `main.ts` — entry point, a tiny Effect program.
- `deno.json` — Deno config and npm imports (pulls in `effect`).
- `start.sh` / `watch.sh` — convenience runners.
