import { describe, it, expect } from "vitest";
import { sumTen, max, FizzBuzz, Factorial } from "../src/basic";

describe("sumTen", () => {
  it("should return 30 when a and b are Number", () => {
    const a = 10;
    const b = 10;

    const result = sumTen(a, b);

    expect(result).toBe(30);
  });

  it("should return NaN when a or b is not provided", () => {
    const b = 10;

    const result = sumTen(b);

    expect(result).toBeNaN();
  });
});

describe("max", () => {
  it("should return the first argument if its greater than the second", () => {
    expect(max(10, 5)).toBe(10);
  });

  it("should return the second argument if its greater than the first", () => {
    expect(max(5, 10)).toBe(10);
  });

  it("should return the first argument if they are equal", () => {
    expect(max(10, 10)).toBe(10);
  });

  it("should return NaN it either argument is not a NaN", () => {
    expect(max("ten", 5)).toBeNaN();
  });

  it("should return NaN if both arguments are not numbers", () => {
    expect(max("ten", "five")).toBeNaN();
  });
});

describe("FizzBuzz", () => {
  it("should return Fizz if n is divisible by 3", () => {
    expect(FizzBuzz(3)).toBe("Fizz");
  });

  it("should return Buzz if n is divisible by 5", () => {
    expect(FizzBuzz(5)).toBe("Buzz");
  });

  it("should return FizzBuzz if n is divisible by 3 and 5", () => {
    expect(FizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return n if n is not divisible by 3 or 5", () => {
    expect(FizzBuzz(7)).toBe(7);
  });
});

describe("Factorial", () => {
  it("should return 120 if n is 5", () => {
    expect(Factorial(5)).toBe(120);
  });

  it("should return 1 if n is 0", () => {
    expect(Factorial(0)).toBe(1);
  });

  it("should return NaN if n is not a number", () => {
    expect(Factorial("ten")).toBeNaN();
  });

  it("should return NaN if n is negative", () => {
    expect(Factorial(-5)).toBeNaN();
  });

  it("should return NaN if n is not provided", () => {
    expect(Factorial()).toBeNaN();
  });
});
