import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://yelpcamp-livg.onrender.com/");

  // Get the screen dimensions
  // const { width, height } = await page.evaluate(() => ({
  //   width: window.screen.width,
  //   height: window.screen.height,
  // }));

  // Set the viewport size to the screen dimensions
  await page.setViewportSize({ width, height });

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
  await page.getByText("4 stars").click();
  await page.getByRole("textbox", { name: "Review Text" }).click();
  await page.getByRole("textbox", { name: "Review Text" }).fill("test");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("button", { name: "Delete" }).nth(1).click();
  await page.getByRole("button", { name: "Delete" }).click();
  await page.getByRole("link", { name: "Logout" }).click();
});
