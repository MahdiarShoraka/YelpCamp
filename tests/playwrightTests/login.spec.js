import { test, expect } from "@playwright/test";

test("login_success", async ({ page }) => {
  await page.goto("https://yelpcamp-livg.onrender.com/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("amir");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Welcome back!")).toBeVisible();
  await page.getByRole("link", { name: "Logout" }).click();
});

test("login_fail", async ({ page }) => {
  await page.goto("https://yelpcamp-livg.onrender.com/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("aaa");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.getByText("Password or username is incorrect")
  ).toBeVisible();
});
