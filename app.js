const PAGES = [
  { id: "todo-tasks", title: "کارهای انجام نشده", file: "pages/todo-tasks.html", icon: "📝" },
  { id: "logistics-checklist", title: "چک‌لیست راه‌اندازی", file: "pages/logistics-checklist.html", icon: "📦" },
  { id: "dev-hamed", title: "توسعه و کدنویسی (Dev Hamed)", file: "pages/dev-hamed.html", icon: "💻" },
  { id: "nas-method", title: "متد NAS", file: "pages/nas-method.html", icon: "⚙️" },
  { id: "nas-protocol", title: "قانون اساسی متد NAS™", file: "Topping_NAS_Protocol.html", icon: "📜" },
  { id: "agency-program", title: "سیستم نمایندگی انحصاری", file: "Topping_Agency_Program.html", icon: "🌐" },
  { id: "representatives", title: "نمایندگان و همکاران", file: "pages/representatives.html", icon: "🌐" },
  { id: "nas-proposal", title: "پروپوزال NAS", file: "pages/nas-proposal.html", icon: "🧠" },
  { id: "permit-matrix", title: "جدول مجوزها (Permit Matrix)", file: "pages/permit-matrix.html", icon: "📋" }
];

const menu = document.getElementById("menu");
const content = document.getElementById("content");
const search = document.getElementById("search");
const spinner = document.getElementById("spinner");

function renderMenu() {
  menu.innerHTML = "";
  PAGES.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `${p.icon} <span>${p.title}</span>`;
    li.dataset.id = p.id;
    li.addEventListener("click", () => {
      location.hash = "#" + p.id;
    });
    menu.appendChild(li);
  });
}

function setActive(id) {
  menu.querySelectorAll("li").forEach(li => {
    li.classList.toggle("active", li.dataset.id === id);
  });
}

async function loadPage(id) {
  const page = PAGES.find(p => p.id === id);
  if (!page) {
    content.innerHTML = `<div class="error">صفحه مورد نظر یافت نشد</div>`;
    return;
  }
  
  setActive(id);
  spinner.style.display = "block";
  content.innerHTML = "";
  
  try {
    const res = await fetch(page.file);
    if (!res.ok) {
      throw new Error(`خطا در بارگذاری فایل: ${res.status}`);
    }
    const html = await res.text();
    
    // Extract styles and body content
    const styleMatch = html.match(/<style[^>]*>[\s\S]*?<\/style>/i);
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    
    let cleanHtml = '';
    if (styleMatch) {
      cleanHtml += styleMatch[0];
    }
    if (bodyMatch) {
      cleanHtml += bodyMatch[1];
    } else {
      // Fallback: remove DOCTYPE, html, head, body tags
      cleanHtml = html
        .replace(/<!DOCTYPE[^>]*>/i, '')
        .replace(/<html[^>]*>/i, '')
        .replace(/<\/html>/i, '')
        .replace(/<head[^>]*>[\s\S]*?<\/head>/i, '')
        .replace(/<body[^>]*>/i, '')
        .replace(/<\/body>/i, '')
        .trim();
    }
    
    content.innerHTML = cleanHtml;
    
    // Execute scripts manually (innerHTML doesn't execute scripts)
    const scripts = content.querySelectorAll('script');
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
    
    localStorage.setItem("lastPage", id);
    
    // Update page title
    document.title = `${page.title} - Topping Courier Dashboard`;
    
  } catch (err) {
    console.error("Error loading page:", err);
    content.innerHTML = `<div class="error">خطا در بارگذاری صفحه: ${err.message}</div>`;
  } finally {
    spinner.style.display = "none";
  }
}

function handleRoute() {
  const hash = location.hash.replace("#", "");
  const pageId = hash || localStorage.getItem("lastPage") || PAGES[0].id;
  loadPage(pageId);
}

// Search functionality
search.addEventListener("input", e => {
  const term = e.target.value.toLowerCase().trim();
  menu.querySelectorAll("li").forEach(li => {
    const text = li.textContent.toLowerCase();
    const match = text.includes(term);
    li.style.display = match ? "flex" : "none";
  });
});

// Keyboard shortcuts
document.addEventListener("keydown", e => {
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    search.focus();
  }
  
  // Escape to clear search
  if (e.key === "Escape" && document.activeElement === search) {
    search.value = "";
    search.dispatchEvent(new Event("input"));
    search.blur();
  }
});

// Initialize
window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", () => {
  renderMenu();
  handleRoute();
});

// Handle offline/online status
window.addEventListener("online", () => {
  console.log("اتصال اینترنت برقرار شد");
});

window.addEventListener("offline", () => {
  console.log("اتصال اینترنت قطع شد");
});
