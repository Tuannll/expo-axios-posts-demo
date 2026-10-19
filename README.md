<div align="center">

# 📱 Expo Axios Posts Demo

**Type-safe REST API integration in Expo React Native featuring request cancellation, loading/error states, and retry logic.**

[![CI](https://github.com/Tuannll/expo-axios-posts-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/Tuannll/expo-axios-posts-demo/actions/workflows/ci.yml)
[![Expo](https://img.shields.io/badge/Expo-54-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react&logoColor=black)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Axios](https://img.shields.io/badge/Axios-1.13-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)

**English** | [Tiếng Việt](README.vi.md)

**[✨ Features](#features) • [🚀 Quick Start](#quick-start) • [📁 Structure](#structure) • [🛠️ Tech Stack](#tech-stack) • [❓ FAQ](#faq)**

</div>

---

<a id="features"></a>
## ✨ Features

| Domain | Description |
| --- | --- |
| **Type-Safe REST API** | Strongly typed `getPosts` service returning `Promise<Post[]>` from JSONPlaceholder. |
| **Request Cancellation** | `AbortController` integration automatically cancels pending HTTP requests on component unmount. |
| **Resilient UI States** | Explicit handling of loading spinners, descriptive error messages, and retry actions. |
| **Cross-Platform Support** | Unified codebase running seamlessly across Expo Go, Android, iOS, and Web. |

> [!NOTE]
> The application communicates with `jsonplaceholder.typicode.com`. This is a free public mock API designed for testing and demo purposes, not a production backend.

---

<a id="quick-start"></a>
## 🚀 Quick Start

### Prerequisites

- **Node.js**: `>= 20 LTS` (recommended 22.x)
- **npm**
- **Expo Go** application on physical device or active emulator (Android Studio / iOS Simulator)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/Tuannll/expo-axios-posts-demo.git
cd expo-axios-posts-demo
npm install
```

### 2. Verify TypeScript Types

```bash
npm run typecheck
```

### 3. Launch Application

```bash
# Web browser
npm run web

# Android emulator or device
npm run android

# iOS simulator (macOS required)
npm run ios
```

> [!TIP]
> To test network failure handling and verify the **Retry** button, disable Wi-Fi/network after the initial load and trigger a refresh.

---

<a id="structure"></a>
## 📁 Project Structure

```text
expo-axios-posts-demo/
├── App.tsx                       # Main UI: rendering, loading, error, retry & cancellation
├── src/
│   ├── lib/
│   │   └── axiosInstance.ts      # Configured Axios client with baseURL and timeout
│   ├── services/
│   │   ├── postService.ts        # Typed API service for posts
│   │   └── postService.check.ts  # Service-level verification script
│   └── types/
│       └── api.ts                # TypeScript interfaces (Post data model)
├── assets/                       # Icons and splash screen assets
├── .github/workflows/ci.yml      # CI workflow for typecheck
├── app.json                      # Expo application manifest
└── package.json                  # Dependencies and scripts
```

---

<a id="tech-stack"></a>
## 🛠️ Tech Stack

| Technology | Role |
| --- | --- |
| [Expo](https://expo.dev/) `~54.0.37` | Universal React Native development framework |
| [React Native](https://reactnative.dev/) `0.81.5` | Cross-platform mobile component library |
| [React](https://react.dev/) `19.1.0` | UI declarative rendering engine |
| [TypeScript](https://www.typescriptlang.org/) `~5.9.2` | Static type checking and interface contracts |
| [Axios](https://axios-http.com/) `^1.13.5` | Promise-based HTTP client for browser and node.js |
| [React Native Web](https://necolas.github.io/react-native-web/) `^0.21.4` | Web compatibility layer for React Native components |

---

<a id="faq"></a>
## ❓ FAQ

<details>
<summary><b>1. Is data persisted on a database?</b></summary>
<br/>

No. JSONPlaceholder returns static read-only sample mock data. The application strictly performs read operations (`GET /posts`).
</details>

<details>
<summary><b>2. Why use AbortController with Axios?</b></summary>
<br/>

`AbortController` cancels active HTTP requests when a user navigates away or unmounts the component, preventing memory leaks, race conditions, and unmounted state updates.
</details>

<details>
<summary><b>3. Why does npm run web report missing dependencies?</b></summary>
<br/>

Run `npm install`. Web execution requires `react-dom` and `react-native-web` installed in your `node_modules`.
</details>

<details>
<summary><b>4. How do I point to a custom API backend?</b></summary>
<br/>

Update the `baseURL` property inside `src/lib/axiosInstance.ts` and adjust data models in `src/types/api.ts` accordingly.
</details>

---

<a id="contributing"></a>
## 🤝 Contributing

1. Fork the repository.
2. Create a targeted branch: `git checkout -b feature/your-feature`.
3. Verify type safety: `npm run typecheck`.
4. Commit changes and submit a Pull Request.

---

<a id="security"></a>
## ⚠️ Security

Never commit private API keys, authorization tokens, or sensitive credentials. Review the project dependency tree before production deployment:

```bash
npm audit
```

Avoid running `npm audit fix --force` without verifying dependency peer compatibility.

---

<a id="license"></a>
## 📄 License

This demonstration project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
