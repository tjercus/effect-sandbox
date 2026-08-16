import { Effect, pipe } from "effect"

const program = pipe(
  Effect.succeed("hello, effect!"),
  Effect.map(msg => msg.toUpperCase()),
  Effect.tap(msg => Effect.log(msg))
)

Effect.runPromise(program)