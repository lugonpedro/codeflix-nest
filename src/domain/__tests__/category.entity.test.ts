import { Category } from "../category.entity";

describe("Category Unit Tests", () => {
  describe("constructor", () => {
    test("should create a category with default values", () => {
      const category = new Category({
        name: "Movie",
      });

      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test("should create a category with default values", () => {
      const created_at = new Date();

      const category = new Category({
        name: "Movie",
        description: "Movie description",
        is_active: false,
        created_at,
      });

      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBe(created_at);
    });
  });

  describe("methods", () => {
    test("should create a category", () => {
      const category = Category.create({
        name: "Movie",
      });

      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test("should change category name", () => {
      const category = Category.create({
        name: "Movie",
      });

      category.changeName("TV Show");
      expect(category.name).toBe("TV Show");
    });

    test("should change category description", () => {
      const category = Category.create({
        name: "Movie",
      });

      category.changeDescription("Movie description");
      expect(category.description).toBe("Movie description");
    });

    test("should activate a category", () => {
      const category = Category.create({
        name: "Movie",
        is_active: false,
      });

      expect(category.is_active).toBeFalsy();

      category.activate();

      expect(category.is_active).toBeTruthy();
    });

    test("should deactivate a category", () => {
      const category = Category.create({
        name: "Movie",
        is_active: true,
      });

      expect(category.is_active).toBeTruthy();

      category.deactivate();

      expect(category.is_active).toBeFalsy();
    });
  });
});
