const { test, expect } = require('@playwright/test');

test.describe('Social Proof Toast', () => {
  test('should cycle through messages correctly', async ({ page }) => {
    // 1. Install clock to control time BEFORE navigation
    await page.clock.install();

    // 2. Navigate to the page
    await page.goto('/');

    // 3. Verify initial state: toast is hidden
    const toast = page.locator('#socialProofToast');
    await expect(toast).not.toHaveClass(/active/);

    // 4. Advance time by 20s (initial delay)
    // The code says: setTimeout(..., 20000)
    await page.clock.fastForward(20000);

    // 5. Verify first toast appears
    await expect(toast).toHaveClass(/active/);
    await expect(toast.locator('.toast-text')).toHaveText('Someone from Montreal just enrolled! 🎉');

    // 6. Advance time by 4s (toast hides)
    // setTimeout(..., 4000) inside showToast
    await page.clock.fastForward(4000);
    await expect(toast).not.toHaveClass(/active/);

    // 7. Verify the cycle
    // The next showToast is called by setInterval(..., 45000)
    // The setInterval was started at T+20s.
    // So it fires at T+20s+45s = T+65s.
    // Current time is T+24s.
    // We need to advance by 65s - 24s = 41s.
    await page.clock.fastForward(41000);

    // 8. Verify second toast
    await expect(toast).toHaveClass(/active/);
    await expect(toast.locator('.toast-text')).toHaveText('3 people signed up this week');

    // 9. Advance time by 4s (toast hides)
    await page.clock.fastForward(4000);
    await expect(toast).not.toHaveClass(/active/);
  });
});
