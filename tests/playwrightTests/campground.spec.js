import { test, expect } from "@playwright/test";

test("campground_success", async ({ page }) => {
  await page.goto("https://yelpcamp-livg.onrender.com/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("amir");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Add Campground" }).click();
  await page.getByRole("textbox", { name: "Title" }).click();
  await page.getByRole("textbox", { name: "Title" }).fill("test");
  await page.getByRole("textbox", { name: "Location" }).click();
  await page.getByRole("textbox", { name: "Location" }).fill("test");
  await page.getByRole("textbox", { name: "price" }).click();
  await page.getByRole("textbox", { name: "price" }).fill("12");
  await page.getByRole("textbox", { name: "Description" }).click();
  await page.getByRole("textbox", { name: "Description" }).fill("test");
  await page.getByRole("button", { name: "Add Campground" }).click();
  await page.getByRole("button", { name: "Delete" }).click();

  await expect(page.getByText("Successully deleted the")).toBeVisible();

  await page.getByRole("link", { name: "Logout" }).click();
});

test("campground_fail", async ({ page }) => {
  await page.goto("https://yelpcamp-livg.onrender.com/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("amir");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Add Campground" }).click();
  await page.getByRole("textbox", { name: "Title" }).click();
  await page.getByRole("textbox", { name: "Title" }).fill("test");
  await page.getByRole("textbox", { name: "price" }).click();
  await page.getByRole("textbox", { name: "price" }).fill("12");
  await page.getByRole("textbox", { name: "Description" }).click();
  await page.getByRole("textbox", { name: "Description" }).fill("test");
  await page.getByRole("button", { name: "Add Campground" }).click();

  await expect(page.locator("#location")).toBeVisible();

  await page.getByRole("link", { name: "Logout" }).click();
});
