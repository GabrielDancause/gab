from playwright.sync_api import sync_playwright
import os

def test_blog_filter(page):
    # Determine the file path
    current_dir = os.getcwd()
    blog_index_path = os.path.join(current_dir, 'blog', 'index.html')
    file_url = f"file://{blog_index_path}"

    print(f"Loading {file_url}")
    page.goto(file_url)

    # Check initial count
    initial_count = page.locator('#blog-count').text_content()
    print(f"Initial count: {initial_count}")

    # Take initial screenshot
    page.screenshot(path="/home/jules/verification/initial_state.png")

    # Click 'Automation' filter
    print("Clicking 'Automation' filter...")
    automation_btn = page.locator('button[data-filter="Automation"]')
    automation_btn.click()

    # Wait for JS to execute
    page.wait_for_timeout(500)

    # Check visible posts
    visible_count_text = page.locator('#blog-count').text_content()
    print(f"Visible count text: {visible_count_text}")

    # Take screenshot of filtered state
    page.screenshot(path="/home/jules/verification/filtered_state.png")

    # Click 'All' filter
    print("Clicking 'All' filter...")
    all_btn = page.locator('button[data-filter="all"]')
    all_btn.click()
    page.wait_for_timeout(500)

    # Check reset count
    reset_count = page.locator('#blog-count').text_content()
    print(f"Reset count: {reset_count}")

    # Take screenshot of reset state
    page.screenshot(path="/home/jules/verification/reset_state.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_blog_filter(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
