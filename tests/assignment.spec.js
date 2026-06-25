const { test, expect } = require('@playwright/test');

const demoMessage = 'Welcome to TestMu AI';

const urls = {
  simpleForm: 'https://www.testmuai.com/selenium-playground/simple-form-demo/',
  sliderDemo: 'https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/',
  inputForm: 'https://www.testmuai.com/selenium-playground/input-form-demo/',
};

test.describe('TestMu AI Playwright assignment', () => {
  test('simple form demo - enter message and validate output', async ({ page }) => {
    await page.goto(urls.simpleForm, { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(urls.simpleForm);
    await expect(page.locator('input#user-message')).toBeVisible();
    await page.fill('input#user-message', demoMessage);
    await page.click('button:has-text("Get Checked Value")');
    await expect(page.locator('div#user-message p#message')).toHaveText(demoMessage);
  });

  test('drag & drop sliders - change default value 15 to 95', async ({ page }) => {
    await page.goto(urls.sliderDemo, { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(urls.sliderDemo);
    const slider = page.locator('#slider3 input[type=range]').first();
    const output = page.locator('output#rangeSuccess');
    await expect(slider).toBeVisible();
    await slider.focus();
    for (let i = 0; i < 80; i++) {
      await page.keyboard.press('ArrowRight');
    }
    await expect(output).toHaveText('95');
  });

  test('input form submit - required validation and success flow', async ({ page }) => {
    await page.goto(urls.inputForm, { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(urls.inputForm);
    await page.click('button:visible:has-text("Submit")');
    const invalidCount = await page.locator('input:invalid').count();
    expect(invalidCount).toBeGreaterThan(0);

    await page.fill('#name', 'Automated Test');
    await page.fill('#inputEmail4', 'testuser@example.com');
    await page.fill('#inputPassword4', 'Password1!');
    await page.fill('#company', 'TestMu AI');
    await page.fill('#websitename', 'https://www.testmuai.com');
    await page.selectOption('select[name="country"]', { label: 'United States' });
    await page.fill('#inputCity', 'Test City');
    await page.fill('#inputAddress1', '123 Automation Way');
    await page.fill('#inputAddress2', 'Suite 100');
    await page.fill('#inputState', 'Test State');
    await page.fill('#inputZip', '12345');
    await page.click('button:visible:has-text("Submit")');

    await expect(page.locator('p.success-msg')).toHaveText('Thanks for contacting us, we will get back to you shortly.');
  });
});
