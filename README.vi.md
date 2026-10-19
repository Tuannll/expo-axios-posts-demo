<div align="center">

# 📱 Expo Axios Posts Demo

**Demo Expo React Native: tích hợp REST API có định kiểu (type-safe), hủy request, quản lý trạng thái loading/lỗi và thử lại.**

[![CI](https://github.com/Tuannll/expo-axios-posts-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/Tuannll/expo-axios-posts-demo/actions/workflows/ci.yml)
[![Expo](https://img.shields.io/badge/Expo-54-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react&logoColor=black)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Axios](https://img.shields.io/badge/Axios-1.13-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)

[English](README.md) | **Tiếng Việt**

**[✨ Tính năng](#features) • [🚀 Khởi động nhanh](#quick-start) • [📁 Cấu trúc](#structure) • [🛠️ Công nghệ](#tech-stack) • [❓ FAQ](#faq)**

</div>

---

<a id="features"></a>
## ✨ Tính năng

| Nhóm | Nội dung |
| ---- | -------- |
| **REST API có type** | Hàm `getPosts` định kiểu chặt chẽ trả về `Promise<Post[]>` từ JSONPlaceholder. |
| **Hủy request an toàn** | Tích hợp `AbortController` tự động hủy HTTP request khi component unmount, tránh rò rỉ bộ nhớ. |
| **Trạng thái UI rõ ràng** | Xử lý đầy đủ vòng đời: hiển thị loading spinner, thông báo lỗi mạng và nút Thử lại (Retry). |
| **Hỗ trợ đa nền tảng** | Cùng một codebase chạy mượt mà trên Expo Go, Android, iOS và Trình duyệt Web. |

> [!NOTE]
> Ứng dụng kết nối tới `jsonplaceholder.typicode.com`. Đây là mock API công khai phục vụ thử nghiệm và demo, không phải backend production và dữ liệu không thuộc phạm vi dự án.

---

<a id="quick-start"></a>
## 🚀 Khởi động nhanh (Quick Start)

### Yêu cầu hệ thống

- **Node.js**: `>= 20 LTS` (khuyên dùng 22.x)
- **npm**
- Ứng dụng **Expo Go** trên thiết bị thật hoặc máy ảo (Android Studio / iOS Simulator)

### 1. Clone repo & Cài đặt dependencies

```bash
git clone https://github.com/Tuannll/expo-axios-posts-demo.git
cd expo-axios-posts-demo
npm install
```

### 2. Kiểm tra kiểu dữ liệu TypeScript

```bash
npm run typecheck
```

### 3. Chạy ứng dụng

```bash
# Trình duyệt Web
npm run web

# Máy ảo hoặc thiết bị Android
npm run android

# iOS Simulator (yêu cầu máy macOS)
npm run ios
```

> [!TIP]
> Để kiểm tra kịch bản xử lý lỗi mạng và nút **Thử lại**, hãy ngắt kết nối mạng sau khi ứng dụng đã tải xong rồi bấm nút refresh/thử lại.

---

<a id="structure"></a>
## 📁 Cấu trúc Thư mục

```text
expo-axios-posts-demo/
├── App.tsx                       # UI chính: hiển thị danh sách, loading, báo lỗi, retry & hủy request
├── src/
│   ├── lib/
│   │   └── axiosInstance.ts      # Axios client với cấu hình baseURL và timeout
│   ├── services/
│   │   ├── postService.ts        # Service gọi API posts có định kiểu
│   │   └── postService.check.ts  # Script kiểm tra service cấp mã nguồn
│   └── types/
│       └── api.ts                # TypeScript interface (Data model cho Post)
├── assets/                       # Icon ứng dụng và màn hình chờ (splash)
├── .github/workflows/ci.yml      # CI workflow tự động kiểm tra typecheck
├── app.json                      # Cấu hình manifest của Expo
└── package.json                  # Khai báo dependencies và script chạy lệnh
```

---

<a id="tech-stack"></a>
## 🛠️ Công nghệ Sử dụng

| Công nghệ | Vai trò |
| --- | --- |
| [Expo](https://expo.dev/) `~54.0.37` | Framework phát triển ứng dụng React Native toàn diện |
| [React Native](https://reactnative.dev/) `0.81.5` | Thư viện UI đa nền tảng cho mobile |
| [React](https://react.dev/) `19.1.0` | Thư viện giao diện người dùng khai báo |
| [TypeScript](https://www.typescriptlang.org/) `~5.9.2` | Kiểm tra kiểu tĩnh và ràng buộc dữ liệu |
| [Axios](https://axios-http.com/) `^1.13.5` | HTTP client dựa trên Promise cho trình duyệt và Node.js |
| [React Native Web](https://necolas.github.io/react-native-web/) `^0.21.4` | Tương thích chạy các component React Native trên nền tảng web |

---

<a id="faq"></a>
## ❓ Câu hỏi Thường gặp (FAQ)

<details>
<summary><b>1. Dữ liệu có được lưu trữ vào database không?</b></summary>
<br/>

Không. JSONPlaceholder chỉ trả về dữ liệu mẫu tĩnh phục vụ đọc. Ứng dụng thực hiện duy nhất thao tác lấy dữ liệu (`GET /posts`).
</details>

<details>
<summary><b>2. Tại sao nên sử dụng AbortController cùng với Axios?</b></summary>
<br/>

`AbortController` giúp hủy request HTTP đang chờ khi người dùng rời màn hình (unmount component), ngăn chặn lỗi memory leak và cảnh báo cập nhật state trên unmounted component.
</details>

<details>
<summary><b>3. Tại sao chạy lệnh npm run web báo thiếu package?</b></summary>
<br/>

Hãy chạy `npm install`. Nền tảng web yêu cầu cài đặt đầy đủ `react-dom` và `react-native-web` trong `node_modules`.
</details>

<details>
<summary><b>4. Có thể đổi sang server API khác được không?</b></summary>
<br/>

Hoàn toàn được. Cập nhật thuộc tính `baseURL` trong `src/lib/axiosInstance.ts` và điều chỉnh lại kiểu dữ liệu trong `src/types/api.ts` tương ứng.
</details>

---

<a id="contributing"></a>
## 🤝 Đóng góp

1. Fork repository về tài khoản cá nhân.
2. Tạo nhánh tính năng mới: `git checkout -b feature/ten-thay-doi`.
3. Kiểm tra kiểu: `npm run typecheck`.
4. Commit thay đổi và mở Pull Request mô tả chi tiết.

---

<a id="security"></a>
## ⚠️ Bảo mật

Tuyệt đối không commit API key riêng tư, access token bí mật hoặc các file `.env*.local`. Trước khi phát hành lên môi trường thực tế, hãy kiểm tra danh sách phụ thuộc:

```bash
npm audit
```

Hạn chế dùng `npm audit fix --force` khi chưa kiểm tra tính tương thích giữa các phiên bản package.

---

<a id="license"></a>
## 📄 Giấy phép

Mã nguồn demo này được phân phối theo giấy phép [MIT License](https://choosealicense.com/licenses/mit/).
