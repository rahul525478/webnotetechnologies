import { chromium } from "playwright";

const VIEWPORTS = [
  { name: "320px (Mobile Extra Small)", width: 320, height: 640 },
  { name: "360px (Android Compact)", width: 360, height: 640 },
  { name: "375px (iPhone SE)", width: 375, height: 667 },
  { name: "390px (iPhone 14/15)", width: 390, height: 844 },
  { name: "430px (iPhone 15 Pro Max)", width: 430, height: 932 },
  { name: "768px (iPad / Tablet)", width: 768, height: 1024 },
  { name: "1024px (Tablet Landscape)", width: 1024, height: 768 },
  { name: "1366px (Laptop Standard)", width: 1366, height: 768 },
  { name: "1440px (Desktop Large)", width: 1440, height: 900 },
];

const ROUTES = [
  "/",
  "/what-we-do",
  "/what-we-do/web-development",
  "/what-we-do/mobile-app-development",
  "/technicals",
  "/technicals/react-nextjs",
  "/portfolio",
  "/portfolio/fintech-global-platform",
  "/career",
  "/blogs",
  "/blogs/future-of-ai-agents-enterprise",
  "/contact",
  "/terms",
  "/privacy-policy",
  "/cookie-policy",
];

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

async function runTests() {
  console.log("=== STARTING COMPREHENSIVE RESPONSIVE AUDIT ===");
  console.log(`Base URL: ${BASE_URL}`);

  const browser = await chromium.launch({ headless: true });
  let totalTests = 0;
  let passedTests = 0;
  let overflowIssues = 0;
  const failureDetails = [];

  for (const vp of VIEWPORTS) {
    console.log(`\nTesting Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    const consoleErrors = [];
    page.on("pageerror", (err) => consoleErrors.push(err.message));

    for (const route of ROUTES) {
      totalTests++;
      const url = `${BASE_URL}${route}`;

      try {
        const response = await page.goto(url, {
          waitUntil: "domcontentloaded",
          timeout: 15000,
        });

        // Small pause for layout stabilization and canvas initialization
        await page.waitForTimeout(300);

        const status = response ? response.status() : 0;
        const layoutCheck = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body ? body.scrollWidth : 0);
          const innerWidth = window.innerWidth;
          const overflowX = scrollWidth > innerWidth + 1;

          // Find offending elements if any
          let offendingElement = null;
          if (overflowX) {
            const allElements = document.querySelectorAll("*");
            for (const el of allElements) {
              const rect = el.getBoundingClientRect();
              if (rect.right > innerWidth + 2) {
                offendingElement = `${el.tagName.toLowerCase()}.${el.className.split(" ").slice(0, 3).join(".")} (right: ${rect.right}px)`;
                break;
              }
            }
          }

          return {
            scrollWidth,
            innerWidth,
            overflowX,
            offendingElement,
            hasHeading: !!document.querySelector("h1"),
          };
        });

        if (layoutCheck.overflowX) {
          overflowIssues++;
          failureDetails.push({
            viewport: vp.name,
            route,
            type: "Horizontal Overflow",
            detail: `ScrollWidth ${layoutCheck.scrollWidth}px > InnerWidth ${layoutCheck.innerWidth}px (offender: ${layoutCheck.offendingElement})`,
          });
          console.log(`  ❌ [${vp.width}px] ${route} -> Overflow: ${layoutCheck.scrollWidth}px > ${layoutCheck.innerWidth}px`);
        } else if (status >= 400) {
          failureDetails.push({
            viewport: vp.name,
            route,
            type: `HTTP ${status}`,
            detail: `Status code ${status}`,
          });
          console.log(`  ❌ [${vp.width}px] ${route} -> HTTP ${status}`);
        } else {
          passedTests++;
          console.log(`  ✅ [${vp.width}px] ${route} -> OK (Width: ${layoutCheck.innerWidth}px, H1: ${layoutCheck.hasHeading})`);
        }
      } catch (err) {
        failureDetails.push({
          viewport: vp.name,
          route,
          type: "Load Error",
          detail: err.message,
        });
        console.log(`  ❌ [${vp.width}px] ${route} -> Load failed: ${err.message}`);
      }
    }

    // On mobile viewports (<1024px), test mobile menu interaction
    if (vp.width < 1024) {
      try {
        console.log(`  Testing mobile menu at ${vp.width}px...`);
        await page.goto(`${BASE_URL}/`, { waitUntil: "domcontentloaded" });
        await page.waitForTimeout(300);

        const menuButton = await page.$('button[aria-label="Open navigation menu"]');
        if (menuButton) {
          await menuButton.click();
          await page.waitForTimeout(400);

          const mobileMenuVisible = await page.evaluate(() => {
            const menu = document.querySelector('[role="dialog"][aria-label="Mobile Navigation Menu"]');
            return !!menu;
          });

          if (mobileMenuVisible) {
            console.log(`  ✅ Mobile menu opens successfully at ${vp.width}px`);

            // Test What We Do accordion toggle
            const subMenuToggle = await page.$('button[aria-label="Toggle What We Do submenu"]');
            if (subMenuToggle) {
              await subMenuToggle.click();
              await page.waitForTimeout(200);
              const subMenuOpened = await page.evaluate(() => {
                return !!document.querySelector('a[href="/what-we-do/web-development"]');
              });
              if (subMenuOpened) {
                console.log(`  ✅ Mobile menu submenu expanded successfully at ${vp.width}px`);
              }
            }

            // Test close button
            const closeBtn = await page.$('button[aria-label="Close navigation menu"]');
            if (closeBtn) {
              await closeBtn.click();
              await page.waitForTimeout(300);
              const closed = await page.evaluate(() => {
                return !document.querySelector('[role="dialog"][aria-label="Mobile Navigation Menu"]');
              });
              if (closed) {
                console.log(`  ✅ Mobile menu closes successfully at ${vp.width}px`);
              }
            }
          }
        }
      } catch (menuErr) {
        console.warn(`  ⚠️ Mobile menu test warning: ${menuErr.message}`);
      }
    }

    await context.close();
  }

  await browser.close();

  console.log("\n=============================================");
  console.log("             TEST RESULTS SUMMARY            ");
  console.log("=============================================");
  console.log(`Total Route/Viewport Tests: ${totalTests}`);
  console.log(`Passed Tests: ${passedTests}`);
  console.log(`Horizontal Overflow Issues: ${overflowIssues}`);
  console.log(`Failures: ${failureDetails.length}`);

  if (failureDetails.length > 0) {
    console.log("\nFailure Details:");
    failureDetails.forEach((f, idx) => {
      console.log(`  ${idx + 1}. [${f.viewport}] ${f.route}: ${f.type} - ${f.detail}`);
    });
    process.exit(1);
  } else {
    console.log("\n🎉 ALL ROUTES PASSED 100% RESPONSIVE AND ZERO OVERFLOW AUDIT!");
    process.exit(0);
  }
}

runTests();
