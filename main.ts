import { Effect, Console } from "effect"

const program = Effect.gen(function* () {
  yield* Console.log("Hello from Effect and Deno!")
  return 42
})

Effect.runPromise(program).then(console.log)