import { getOwnerName } from "../helpers/helpers";

test("getOwnerName function true", () => {
  const ownerName = getOwnerName("test name true (UK)");
  expect(ownerName).toBe("UK");
});

test("getOwnerName function false", () => {
  const ownerName = getOwnerName("test name false");
  expect(ownerName).toBe("N/A");
});

test("getOwnerName function missing parenthesis", () => {
  const ownerName = getOwnerName("test name parenthesis missing UK)");
  expect(ownerName).toBe("N/A");
});

test("getOwnerName function missing second parenthesis", () => {
  const ownerName = getOwnerName("test name parenthesis missing (UK");
  expect(ownerName).toBe("N/A");
});
