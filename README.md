# AtCoder Clock

**AtCoder Clock** is a lightweight Chrome extension that brings the iconic AtCoder digital timer to any website. Whether you are practicing on Codeforces, LeetCode, or just browsing, you can now keep the contest spirit and precision timing with you at all times.

## Features

* **Universal Compatibility:** Works on any website, not just AtCoder.
* **Persistent & Floating:** Stays fixed in the bottom-right corner as you scroll through long problem statements or documentation.
* **Official Aesthetic:** Faithfully mimics the design, font, and background of the original AtCoder contest clock.
* **Shadow DOM Encapsulated:** Uses a Shadow Root to ensure the clock’s styles never conflict with the website you are visiting.

## 📂 Project Structure

```text
├── _locales/            # Internationalization support
├── assets/
│   ├── fonts/           # Custom font for the official look
│   └── images/          # Clock background assets
├── public/
│   ├── css/             # Clock and settings UI styling
│   └── html/            # Extension settings UI
├── src/
│   ├── clock/           # Core logic (Controller, UI, and Time formatting)
│   └── loader.js        # Content script entry point
└── manifest.json        # Extension configuration

```

## Installation (Developer Mode)

1. **Clone or Download** this repository to your local machine.
2. Open browser and navigate to extensions.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click the **Load unpacked** button.
5. Select the root folder of this project.
6. Refresh any open tab to see the clock in action!

## How to Use

* **Toggle:** Click the extension icon in your toolbar to open the popup and enable/disable the clock.
* **Auto-Sync:** Your preference (Enabled/Disabled) is saved automatically across all tabs.
* **Timezone:** Displays your local system time and UTC offset dynamically.
