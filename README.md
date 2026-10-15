<div align="center">

# Expo Axios Posts Demo

**Demo Expo React Native: gọi REST API có type, hủy request, loading, lỗi và thử lại.**

[![Expo](https://img.shields.io/badge/Expo-54.0.37-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Axios](https://img.shields.io/badge/Axios-1.13.5-5A29E4?style=flat-square&logo=axios&logoColor=white)](https://axios-http.com/)

[**Bắt đầu**](#bắt-đầu) · [**Tính năng**](#tính-năng) · [**Cấu trúc**](#cấu-trúc) · [**FAQ**](#faq)

</div>

---

<a id="tính-năng"></a>

## ✨ Tính năng

| Nhóm | Nội dung |
| ---- | -------- |
| **REST API có type** | `getPosts` trả `Promise<Post[]>` từ JSONPlaceholder. |
| **Hủy request** | `AbortController` hủy request khi màn hình unmount. |
| **Trạng thái rõ ràng** | Hiển thị loading, lỗi mạng và nút thử lại. |
| **Web + mobile** | Chạy trên Expo Go, Android, iOS và web. |

> [!NOTE]
> API dùng `jsonplaceholder.typicode.com`. Đây là API mock công khai, không phải backend production và dữ liệu không thuộc dự án.

---

<a id="bắt-đầu"></a>

## 🚀 Bắt đầu

### Yêu cầu

- Node.js 20 LTS hoặc mới hơn
- npm
- Expo Go nếu chạy trên thiết bị Android/iOS

### Cài đặt

```bash
git clone https://github.com/USER/REPO.git
cd expo-axios-posts-demo
npm install
```

### Kiểm tra TypeScript

```bash
npm run typecheck
```

### Chạy ứng dụng

```bash
npm run web
npm run android
npm run ios
```

`npm run ios` cần macOS. Với Android/iOS, quét QR code bằng Expo Go sau khi chạy lệnh.

> [!TIP]
> Muốn kiểm tra lỗi và nút **Thử lại**, tắt mạng sau khi app đã mở rồi reload trang/app.

---

<a id="cấu-trúc"></a>

## 📁 Cấu trúc

```text
expo-axios-posts-demo/
├── App.tsx                       # UI, loading, lỗi, retry, cancellation
├── src/
│   ├── lib/axiosInstance.ts       # Axios client
│   ├── services/postService.ts    # API posts có type
│   ├── services/postService.check.ts
│   └── types/api.ts               # Post type
├── assets/                        # App icons
├── app.json                       # Expo config
└── package.json
```

---

<a id="faq"></a>

## ❓ FAQ

**Dữ liệu có được lưu không?**  
Không. JSONPlaceholder trả dữ liệu mẫu. Repository chỉ đọc danh sách bài viết.

**Vì sao dùng `AbortController`?**  
Để hủy HTTP request sau khi component unmount, tránh cập nhật state từ request cũ.

**Vì sao `npm run web` báo thiếu package?**  
Chạy `npm install`. Project cần `react-dom` và `react-native-web` để chạy web.

**Có thể đổi API không?**  
Có. Cập nhật `baseURL` trong `src/lib/axiosInstance.ts` và type/service tương ứng.

---

## 🛠️ Công nghệ

- Expo `~54.0.37`
- React Native `0.81.5`
- React `19.1.0`
- TypeScript `~5.9.2`
- Axios `^1.13.5`
- React Native Web `^0.21.4`

---

## 🤝 Đóng góp

1. Fork repository.
2. Tạo branch theo thay đổi.
3. Chạy `npm run typecheck`.
4. Mở pull request, mô tả rõ thay đổi và cách kiểm tra.

---

## ⚠️ Bảo mật

Không commit API key, token hoặc file `.env*.local`. Trước khi phát hành production, kiểm tra dependency tree:

```bash
npm audit
```

Không dùng `npm audit fix --force` khi chưa kiểm tra breaking change.

---

## 📄 License

Chưa có license. Thêm [MIT License](https://choosealicense.com/licenses/mit/) nếu muốn người khác tái sử dụng code demo.
