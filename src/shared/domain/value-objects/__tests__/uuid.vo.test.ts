import { InvalidUuidError, Uuid } from "../uuid.vo";
import { validate as uuidValidate } from "uuid";

describe("Uuid Unit Tests", () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");

  test("should throw error when uuid is invalid", () => {
    expect(() => {
      new Uuid("invalid-uuid");
    }).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  test("should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });

  test("should accept a valid uuid", () => {
    const uuid = new Uuid("c460e1ed-cca8-44e7-ad1e-9a1415fe393f");
    expect(uuid.id).toBe("c460e1ed-cca8-44e7-ad1e-9a1415fe393f");
    expect(validateSpy).toHaveBeenCalled();
  });
});
