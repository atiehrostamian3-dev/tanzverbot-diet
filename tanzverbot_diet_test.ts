import { assertGreater } from "@std/assert";
import { calcDateOnDiet, Sex, dietFoods } from "./tanzverbot_diet.ts";

Deno.test("Tanzverbot Diet - Original Test", () => {
//Wir haben die Liste „dietFoods“ als ersten Parameter hinzugefügt.
  assertGreater(calcDateOnDiet(dietFoods, 74, 100, 1.86, 38, Sex.Male), 0.0);
});

Deno.test("Tanzverbot Diet - Custom Test for Female", () => {
  const days = calcDateOnDiet(dietFoods, 60, 70, 1.70, 30, Sex.Female);
  assertGreater(days, 0.0);
});