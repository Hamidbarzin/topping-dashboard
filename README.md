# 🚀 Topping Courier Mini Dashboard

داشبورد مدیریتی مدرن برای Topping Courier با تم مشکی-طلایی

## ✨ ویژگی‌ها

- 📝 **کارهای انجام نشده**: مدیریت وظایف با اولویت‌بندی و دسته‌بندی
- 📦 **چک‌لیست لجستیک**: سیستم تیک زدن، امتیازدهی و نوار پیشرفت
- 💻 **توسعه و کدنویسی**: مستندات فنی و پروژه‌های در حال توسعه
- ⚙️ **متد NAS**: توضیح کامل سیستم Network-Adaptive System
- 🌐 **نمایندگان جهانی**: شبکه نمایندگان در سراسر دنیا
- 🧠 **پروپوزال NAS**: سند کامل پیشنهاد پروژه
- 📋 **جدول مجوزها**: مدیریت دسترسی‌های کاربران

## 🎨 طراحی

- **تم**: مشکی-طلایی (Black & Gold)
- **فونت**: Vazirmatn (فارسی)
- **واکنش‌گرا**: کاملاً Responsive
- **انیمیشن**: ترانزیشن‌های نرم و زیبا

## 🚀 نحوه استفاده

### روش 1: اجرای مستقیم

```bash
# باز کردن فایل index.html در مرورگر
open index.html
```

### روش 2: سرور محلی

```bash
# Python
python3 -m http.server 8080

# Node.js
npx http-server -p 8080

# PHP
php -S localhost:8080
```

سپس به آدرس `http://localhost:8080` بروید.

## 📁 ساختار پروژه

```
topping-ideahub/
├── index.html              # صفحه اصلی داشبورد
├── app.js                  # منطق روتینگ و بارگذاری
├── styles.css              # استایل‌های اصلی
├── README.md               # مستندات
└── pages/                  # صفحات داخلی
    ├── todo-tasks.html
    ├── logistics-checklist.html
    ├── dev-hamed.html
    ├── nas-method.html
    ├── representatives.html
    ├── nas-proposal.html
    └── permit-matrix.html
```

## 🌐 Deploy

### GitHub Pages

1. پروژه را به GitHub پوش کنید
2. به Settings > Pages بروید
3. Source را روی `main` branch تنظیم کنید
4. ذخیره کنید و منتظر بمانید

### Vercel

```bash
# نصب Vercel CLI
npm i -g vercel

# Deploy
vercel
```

یا از طریق وب‌سایت Vercel:
1. پروژه را به GitHub پوش کنید
2. به vercel.com بروید
3. Import Project کنید
4. Deploy!

### Netlify

```bash
# نصب Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🔧 تکنولوژی‌ها

- **HTML5**: ساختار صفحات
- **CSS3**: استایل‌دهی و انیمیشن‌ها
- **Vanilla JavaScript**: منطق برنامه (بدون فریمورک)
- **LocalStorage**: ذخیره‌سازی داده‌های محلی
- **Fetch API**: بارگذاری صفحات

## 💾 ذخیره‌سازی داده

داده‌ها در `localStorage` مرورگر ذخیره می‌شوند:

- `checklistProgress`: پیشرفت چک‌لیست
- `todoTasks`: لیست کارها
- `lastPage`: آخرین صفحه بازدید شده

## ⌨️ کلیدهای میانبر

- `Ctrl/Cmd + K`: فوکوس روی جستجو
- `Escape`: پاک کردن جستجو

## 🎯 قابلیت‌های تعاملی

### صفحه چک‌لیست
- ✅ تیک زدن آیتم‌ها
- 📊 امتیازدهی با اسلایدر
- 📈 نوار پیشرفت خودکار
- 🔍 فیلتر بر اساس اولویت
- 💾 ذخیره خودکار

### صفحه To-Do
- ➕ افزودن کار جدید
- ✏️ ویرایش کارها
- 🗑️ حذف کارها
- 🎯 اولویت‌بندی (عادی، مهم، فوری)
- 📂 دسته‌بندی کارها
- 📊 آمار و گزارش

## 🎨 تم رنگی

```css
--bg: #0b0b0f          /* پس‌زمینه اصلی */
--card: #121218        /* کارت‌ها */
--muted: #1a1a22       /* پس‌زمینه کم‌رنگ */
--gold: #d4af37        /* طلایی اصلی */
--text: #e9e9ef        /* متن اصلی */
--sub: #b7b7c7         /* متن فرعی */
```

## 📱 پشتیبانی مرورگرها

- ✅ Chrome/Edge (آخرین نسخه)
- ✅ Firefox (آخرین نسخه)
- ✅ Safari (آخرین نسخه)
- ✅ موبایل (iOS & Android)

## 🤝 مشارکت

برای مشارکت در پروژه:

1. Fork کنید
2. یک branch جدید بسازید
3. تغییرات خود را commit کنید
4. Push کنید
5. Pull Request ایجاد کنید

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

## 👨‍💻 توسعه‌دهنده

**Topping Courier Team**
- 📧 Email: dev@topping-courier.com
- 🌐 Website: https://topping-courier.com
- 💬 Telegram: @ToppingCourier

## 🙏 تشکر

از تمام کسانی که در توسعه این پروژه مشارکت داشتند، تشکر می‌کنیم!

---

**نسخه:** 1.0.0  
**تاریخ:** فروردین 1404  
**وضعیت:** ✅ آماده برای استفاده
