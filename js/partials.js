// ============================================================
// PARTIALS SYSTEM - Injects Shared Header & Footer
// ============================================================

const HeaderHTML = `
<!-- Top Bar -->
<div class="topbar">
  <div class="container topbar__inner">
    <div class="topbar__emergency">
      <span><i class="fas fa-shield-alt"></i> الشرطة: <strong>19</strong></span>
      <span><i class="fas fa-fire-extinguisher"></i> الوقاية المدنية: <strong>15</strong></span>
      <span><i class="fas fa-moon"></i> الدرك الملكي: <strong>177</strong></span>
      <span><i class="fas fa-exclamation-triangle"></i> مكافحة الفساد: <strong>0537718888</strong></span>
    </div>
    <div class="topbar__links">
      <a href="#"><i class="fas fa-globe"></i> الأمانة العامة للحكومة</a>
      <a href="https://www.rokhas.ma" target="_blank"><i class="fas fa-file-signature"></i> رُخَص</a>
      <a href="https://www.chikaya.ma" target="_blank"><i class="fas fa-comment-dots"></i> شكايات</a>
    </div>
  </div>
</div>

<!-- Main Header -->
<header class="site-header-wrapper" id="siteHeader">
  <div class="container">
    <div class="site-header">
      <div class="site-header__inner">
        <!-- Logo -->
        <a href="index.html" class="site-logo">
          <img src="assets/img/logo-martil.png" alt="شعار جماعة مرتيل" style="width:75px;height:75px;border-radius:8px">
          <div class="site-logo__text">
            <h1>جماعة مرتيل</h1>
            <span style="font-family:sans-serif">Commune de Martil | ⵜⴰⴳⵔⴰⵡⵜ ⵏ ⵎⴰⵔⵜⵉⵍ</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="main-nav" aria-label="الملاحة الرئيسية">
          <ul class="nav-list">
            <li class="nav-item"><a href="index.html" class="nav-link" data-path="home">الرئيسية</a></li>
            <li class="nav-item">
              <a href="commune.html" class="nav-link" data-path="commune">الجماعة <i class="fas fa-chevron-down" style="font-size:0.7rem"></i></a>
              <ul class="nav-dropdown">
                <li><a href="commune.html#history">تقديم الجماعة</a></li>
                <li><a href="commune.html#potential">المؤهلات السياحية والثقافية</a></li>
                <li><a href="commune.html#features">المميزات</a></li>
              </ul>
            </li>
            <li class="nav-item"><a href="council.html" class="nav-link" data-path="council">المجلس الجماعي</a></li>
            <li class="nav-item"><a href="governance.html" class="nav-link" data-path="governance">الحكامة <i class="fas fa-chevron-down" style="font-size:0.7rem"></i></a>
              <ul class="nav-dropdown">
                <li><a href="governance.html#jurisdiction">الاختصاصات</a></li>
                <li><a href="governance.html#structure">الهيكلة</a></li>
                <li><a href="governance.html#jobs">التوظيف</a></li>
              </ul>
            </li>
            <li class="nav-item"><a href="budget.html" class="nav-link" data-path="budget">الميزانية المفتوحة</a></li>
            <li class="nav-item"><a href="services.html" class="nav-link" data-path="services">خدمات للمواطنين</a></li>
            <li class="nav-item"><a href="participation.html" class="nav-link" data-path="participation">المشاركة المواطنة</a></li>
            <li class="nav-item"><a href="publishing.html" class="nav-link" data-path="publishing">النشر الاستباقي</a></li>
          </ul>
          <button class="nav-toggle" id="navToggle" aria-label="القائمة" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </div>
  </div>
</header>

<!-- Mobile Drawer -->
<div class="drawer-overlay" id="drawerOverlay"></div>
<div class="mobile-drawer" id="mobileDrawer">
  <div class="mobile-drawer__header">
    <div style="display:flex;align-items:center;gap:10px">
      <img src="assets/img/logo-martil.png" alt="شعار جماعة مرتيل" style="width:55px;height:55px;border-radius:6px">
      <div class="site-logo__text">
        <h1 style="font-size:1.2rem;color:var(--primary);font-weight:700;margin-bottom:0px">جماعة مرتيل</h1>
      </div>
    </div>
    <button class="drawer-close" id="drawerClose"><i class="fas fa-times"></i></button>
  </div>
  <nav class="mobile-drawer__nav" style="flex:1;overflow-y:auto">
    <a href="index.html" class="mobile-nav-link" style="display:block">الرئيسية</a>
    <div class="mobile-nav-item">
      <button class="mobile-nav-link w-full text-right flex justify-between" style="width:100%;text-align:right;display:flex;justify-content:space-between;align-items:center" onclick="this.nextElementSibling.classList.toggle('open')">
        الجماعة <i class="fas fa-chevron-down"></i>
      </button>
      <div class="mobile-sub-list">
        <a href="commune.html">تقديم الجماعة</a>
        <a href="commune.html#potential">المؤهلات السياحية والثقافية</a>
        <a href="commune.html#features">المميزات</a>
      </div>
    </div>
    <a href="council.html" class="mobile-nav-link" style="display:block">المجلس الجماعي</a>
    <div class="mobile-nav-item">
      <button class="mobile-nav-link w-full text-right flex justify-between" style="width:100%;text-align:right;display:flex;justify-content:space-between;align-items:center" onclick="this.nextElementSibling.classList.toggle('open')">
        الحكامة <i class="fas fa-chevron-down"></i>
      </button>
      <div class="mobile-sub-list">
        <a href="governance.html">الاختصاصات</a>
        <a href="governance.html">الهيكلة</a>
        <a href="governance.html">التوظيف</a>
      </div>
    </div>
    <a href="budget.html" class="mobile-nav-link" style="display:block">الميزانية المفتوحة</a>
    <a href="services.html" class="mobile-nav-link" style="display:block">خدمات للمواطنين</a>
    <a href="participation.html" class="mobile-nav-link" style="display:block">المشاركة المواطنة</a>
    <a href="publishing.html" class="mobile-nav-link" style="display:block">النشر الاستباقي</a>
  </nav>
  <div style="padding:1.5rem;background:rgba(0,0,0,0.02)">
    <div style="display:flex;gap:10px;justify-content:center">
      <a href="#" style="width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;color:var(--primary);box-shadow:0 2px 10px rgba(0,0,0,0.05)"><i class="fab fa-facebook-f"></i></a>
      <a href="#" style="width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;color:var(--primary);box-shadow:0 2px 10px rgba(0,0,0,0.05)"><i class="fab fa-youtube"></i></a>
      <a href="#" style="width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;color:var(--primary);box-shadow:0 2px 10px rgba(0,0,0,0.05)"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</div>
`;

const FooterHTML = `
<footer class="footer-smart">
  <div class="footer-info-bar">
    <div class="container grid">
      <div style="display:flex;align-items:center;gap:15px">
        <i class="fas fa-map-marker-alt" style="font-size:2rem;color:var(--accent)"></i>
        <div>
          <h4 style="font-weight:700;margin-bottom:4px">العنوان</h4>
          <p style="font-size:0.85rem;color:rgba(255,255,255,0.7)">شارع الحسن الثاني، مقر الجماعة<br>مرتيل، المملكة المغربية</p>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:15px">
        <i class="fas fa-phone-alt" style="font-size:2rem;color:var(--accent)"></i>
        <div>
          <h4 style="font-weight:700;margin-bottom:4px">الهاتف</h4>
          <p style="font-size:0.85rem;color:rgba(255,255,255,0.7)" dir="ltr">+212 539 97 00 00<br>+212 539 97 00 01</p>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:15px">
        <i class="fas fa-envelope" style="font-size:2rem;color:var(--accent)"></i>
        <div>
          <h4 style="font-weight:700;margin-bottom:4px">البريد الإلكتروني</h4>
          <p style="font-size:0.85rem;color:rgba(255,255,255,0.7)">contact@martil.gov.ma<br>info@martil.gov.ma</p>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-main container">
    <div class="footer-grid">
      <div class="footer-widget">
        <div class="footer-logo">
          <img src="assets/img/logo-martil.png" alt="شعار جماعة مرتيل" style="width:85px;margin-bottom:1rem;border-radius:8px;">
          <h3 style="font-size:1.4rem;font-weight:700;margin-bottom:5px">جماعة مرتيل</h3>
          <p style="font-family:sans-serif;font-size:0.8rem;color:rgba(255,255,255,0.5);margin-bottom:1rem">Commune de Martil</p>
        </div>
        <p style="color:rgba(255,255,255,0.7);font-size:0.9rem;line-height:1.8;margin-bottom:1.5rem">بوابة تفاعلية ذكية لتقريب الإدارة من المواطن وتعزيز المشاركة والانفتاح لإرساء أسس المدينة الذكية.</p>
        <div class="social-glass">
          <a href="#" aria-label="فيسبوك"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="يوتيوب"><i class="fab fa-youtube"></i></a>
          <a href="#" aria-label="إنستغرام"><i class="fab fa-instagram"></i></a>
        </div>
      </div>

      <div class="footer-widget">
        <h4>روابط سريعة</h4>
        <div class="footer-list">
          <a href="council.html"><i class="fas fa-angle-left"></i> المجلس الجماعي</a>
          <a href="services.html"><i class="fas fa-angle-left"></i> الخدمات الإدارية</a>
          <a href="budget.html"><i class="fas fa-angle-left"></i> الميزانية المفتوحة</a>
          <a href="participation.html"><i class="fas fa-angle-left"></i> المشاركة المواطنة</a>
          <a href="governance.html"><i class="fas fa-angle-left"></i> الحكامة</a>
        </div>
      </div>

      <div class="footer-widget">
        <h4>منصات وطنية</h4>
        <div class="footer-list">
          <a href="https://www.rokhas.ma" target="_blank"><i class="fas fa-external-link-alt" style="font-size:0.75rem"></i> رُخَص للتعمير والأنشطة</a>
          <a href="https://www.watiqa.ma" target="_blank"><i class="fas fa-external-link-alt" style="font-size:0.75rem"></i> بوابة الوثائق الإدارية</a>
          <a href="https://www.chikaya.ma" target="_blank"><i class="fas fa-external-link-alt" style="font-size:0.75rem"></i> البوابة الوطنية للشكايات</a>
          <a href="https://www.marchespublics.gov.ma" target="_blank"><i class="fas fa-external-link-alt" style="font-size:0.75rem"></i> الصفقات العمومية</a>
        </div>
      </div>

      <div class="footer-widget">
        <h4>النشرة الإخبارية</h4>
        <p style="color:rgba(255,255,255,0.7);font-size:0.9rem;margin-bottom:1rem">اشترك للتوصل بآخر الأخبار وإعلانات الجماعة مباشرة إلى بريدك الإلكتروني.</p>
        <form class="form-glass" onsubmit="event.preventDefault(); alert('تم الاشتراك بنجاح!');">
          <input type="email" placeholder="البريد الإلكتروني..." required>
          <button type="submit">اشتراك</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} جماعة مرتيل. جميع الحقوق محفوظة.</p>
      <div style="display:flex;gap:15px;font-size:0.85rem">
        <a href="#" style="color:rgba(255,255,255,0.7)">شروط الاستخدام</a>
        <a href="#" style="color:rgba(255,255,255,0.7)">سياسة الخصوصية</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject and set active nav
document.addEventListener('DOMContentLoaded', () => {
  if(document.body.dataset.inject === "true") {
    const headerMount = document.getElementById('site-header-mount');
    const footerMount = document.getElementById('site-footer-mount');
    if(headerMount) headerMount.innerHTML = HeaderHTML;
    if(footerMount) footerMount.innerHTML = FooterHTML;

    // Set Active Link
    const currentPage = document.body.dataset.page;
    if(currentPage) {
      const activeLink = document.querySelector(`.nav-link[data-path="${currentPage}"]`);
      if(activeLink) activeLink.classList.add('active');
    }
  }
});
