import { assertGreater } from "@std/assert";
import { calcDateOnDiet, Sex } from "./tanzverbot_diet.ts";

Deno.test("Tanzverbot Diet - Custom Test for Female", () => {
  const days = calcDateOnDiet(60, 70, 1.70, 30, Sex.Female);
  assertGreater(days, 0.0);
});
