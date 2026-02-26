<p align="center">
  <img src="https://github.com/user-attachments/assets/b11906b2-48ed-446a-af72-d82d0d7f173f" width="160" />
</p>

<h1 align="center">AtCoder Clock</h1>

<p align="center">
  A floating AtCoder-style contest clock for any website.
</p>

<p align="center">
  <a href="https://microsoftedge.microsoft.com/addons/detail/bdphnfadobjhikldnpkomncchgfkodbi">
    <img src="https://img.shields.io/badge/Microsoft-Edge%20Add--ons-0078D7?logo=microsoftedge&logoColor=white" />
  </a>
</p>

<img width="1919" height="1030" alt="Screenshot 2026-02-25 003838" src="https://github.com/user-attachments/assets/3f9a5674-7bd7-490f-85ff-ec7359077fa5" />

---

**AtCoder Clock** is a lightweight Chrome extension that brings the iconic AtCoder digital timer to any website. Whether you are practicing on Codeforces, LeetCode, or just browsing, you can now keep the contest spirit and precision timing with you at all times.

## Features

* **Universal Compatibility:** Works on any website, not just AtCoder.
* **Persistent & Floating:** Stays fixed in the bottom-right corner as you scroll.
* **Official Aesthetic:** Mimics the design, font, and background of the original AtCoder contest clock.
* **Shadow DOM Encapsulated:** Styles are fully isolated from the host website.
* **Dual Mode Support:** Live Clock Mode and Countdown Timer Mode.
* **Direct On-Clock Interaction:** Control behavior by clicking directly on the clock element.

## Clock Interaction (On the Clock Itself)

The clock is fully interactive. You do **not** need to use the extension popup for mode switching.

| Action                        | Behavior                                                       |
| ----------------------------- | -------------------------------------------------------------- |
| **Single Click on the Clock** | Toggles fade (reduces opacity to minimize distraction)         |
| **Double Click on the Clock** | Switches between Live Clock Mode and Timer Mode (resets timer) |

## Modes

### 🕒 Clock Mode

Displays:

```
YYYY-MM-DD (Day)
HH:MM:SS ±TZ
```

Shows:

* Local system date
* Live time
* UTC offset dynamically

### ⏳ Timer Mode

Displays a 30-minute countdown:

```
Timer
MM : SS
```

* Starts from 30:00
* Counts down every second
* Automatically resets when switching modes

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
* **Timezone Support**: Displays your local system time and UTC offset dynamically.
* **Quick Interaction**: Click directly on the clock for fade control or mode switching.
