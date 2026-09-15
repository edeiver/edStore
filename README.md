<div align="center">

# edStore

**A modern fashion e-commerce app built with React Native & Expo**

Browse curated collections, filter and search products in real time, and manage a shopping bag — all powered by a clean component architecture and a live product API.

[![Expo](https://img.shields.io/badge/Expo-~57-000020?logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.86-61DAFB?logo=react&logoColor=white)](https://reactnative.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

</div>

---

## Screenshots

<table>
  <tr>
    <td><img src="assets/screenshots/home.png" width="220" alt="Home screen" /></td>
    <td><img src="assets/screenshots/explore.png" width="220" alt="Explore screen" /></td>
    <td><img src="assets/screenshots/bag.png" width="220" alt="Bag screen" /></td>
    <td><img src="assets/screenshots/profile.png" width="220" alt="Profile screen" /></td>
  </tr>
  <tr>
    <td align="center">Home</td>
    <td align="center">Explore</td>
    <td align="center">Bag</td>
    <td align="center">Profile</td>
  </tr>
</table>

> Replace the placeholders above with real captures from a simulator, device, or `expo start --web`. See [Adding your screenshots](#adding-your-screenshots) below.

## About the project

edStore is a personal portfolio project built to practice and showcase real-world React Native patterns: navigating between authenticated/unauthenticated flows, consuming a REST API, managing global state with Context, persisting data on-device, and building a fully custom, themeable UI kit from scratch (no UI library).

Product and category data comes live from the **[Fake Store API](https://fakestoreapi.com)** — a free, public REST API for e-commerce demos and prototypes — so the catalog, prices, and ratings you see in the app are real API responses, not mocked/hardcoded data. All product, category, user, and login requests in `src/api/index.js` hit `https://fakestoreapi.com` directly; no API key or backend of your own is required to run this project.

## Features

- **Home** — hero banner, horizontally scrollable category chips, and a two-column product grid pulled live from the Fake Store API.
- **Explore** — search by title, category or description, filter by department, and sort by price, rating, or "recommended".
- **Bag** — add/remove items, adjust quantities, see a live order summary (subtotal, estimated taxes, total) and a cart badge on the tab bar.
- **Persistent cart** — the bag survives an app restart: `CartContext` automatically loads and saves the cart to `AsyncStorage` on every change.
- **Profile** — account overview and a menu of account sections (personal info, address, order history, wishlist).
- **Custom design system** — a single `theme.js` (colors, typography, spacing, radius) driving every screen and component, with Manrope + Playfair Display custom fonts.

### Work in progress

This is an actively evolving portfolio project. A few things are intentionally left as scaffolding for now:

- **Login / Register screens** exist and are wired into an `AuthNavigator`, but the screens themselves are still placeholders and the app currently always boots straight into the authenticated app (see `AppNavigation.js`). The Fake Store API's `/auth/login` endpoint is already implemented in `src/api/index.js`, just not yet connected to a real form.
- **Checkout, voucher codes, and profile actions** (edit profile, sign out) are present in the UI but not yet wired to real logic.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | [Expo](https://expo.dev) (SDK 57) + [React Native](https://reactnative.dev) 0.86 |
| UI library | React 19 |
| Navigation | [React Navigation](https://reactnavigation.org) — native stack + bottom tabs, with a fully custom tab bar |
| State management | React Context API (`CartContext`) |
| Persistence | `@react-native-async-storage/async-storage` — the cart is saved on-device and restored on launch |
| Data source | **[Fake Store API](https://fakestoreapi.com)** (REST, no auth key needed) — products, categories, users, and a demo login endpoint |
| Fonts / Icons | `@expo-google-fonts` (Manrope, Playfair Display), `@expo/vector-icons` |

## Project structure

```
edStore/
├── App.js                     # Font loading, providers, entry point
├── app.json                   # Expo app config
├── src/
│   ├── api/                   # Fake Store API client (products, categories, users, auth)
│   ├── components/            # Reusable UI: Button, Input, Header, Hero, ProductCard, ...
│   ├── contexts/               # CartContext (global cart state + AsyncStorage persistence)
│   ├── navigation/             # AppNavigation, AuthNavigator, MainNavigator
│   ├── screens/                 # Home, Explore, Bag, Profile
│   │   └── auth/                # Login, Register (in progress)
│   ├── style/                  # theme.js (design tokens) + globalStyles.js
│   └── assets/img/              # Local images (hero banner, etc.)
└── assets/                     # App icons and splash assets
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 18 or newer
- npm (bundled with Node)
- The [Expo Go](https://expo.dev/go) app on your phone (easiest way to run it), **or** an Android/iOS simulator set up locally

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/edeiver/edStore.git
cd edStore

# 2. Install dependencies
npm install

# 3. Start the Expo dev server
npm start
```

This opens the Expo developer tools in your terminal with a QR code. From there you can:

```bash
npm run android   # open in a connected device/emulator with Android
npm run ios       # open in the iOS simulator (macOS only)
npm run web       # open in your browser
```

Or scan the QR code with the **Expo Go** app on your phone for the fastest way to try it on a real device — no build step required.

No environment variables or API keys are needed: the app talks directly to the public Fake Store API (`https://fakestoreapi.com`).

## Adding your screenshots

1. Run the app (`npm start` → open on a simulator, device, or `npm run web`).
2. Capture the Home, Explore, Bag, and Profile screens.
3. Save the images under `docs/screenshots/` in this repo (create the folder if it doesn't exist), using the same file names referenced at the top of this README (`home.png`, `explore.png`, `bag.png`, `profile.png`) — or update the paths in the [Screenshots](#screenshots) section to match your file names.
4. Commit and push — the images will render directly in the table above on GitHub.

## Roadmap

- [ ] Build out real Login / Register forms and connect the auth flow
- [ ] Wire up checkout, voucher codes, and profile actions
- [ ] Add product detail screen
- [ ] Add automated tests

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.

---

<div align="center">
Built by <a href="https://github.com/edeiver">Edeiver Barranco</a> as a front-end/mobile development portfolio piece.
</div>
