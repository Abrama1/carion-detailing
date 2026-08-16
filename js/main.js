(function () {
  "use strict";

  var WA_NUMBER = "995577775892";

  /* ---------- Translations ---------- */
  var I18N = {
    ka: {
      "nav.services": "სერვისები",
      "nav.works": "ნამუშევრები",
      "nav.booking": "დაჯავშნა",
      "nav.contact": "კონტაქტი",
      "nav.book": "დაჯავშნა",
      "hero.eyebrow": "დითეილინგ სტუდია • ვარკეთილი, თბილისი",
      "hero.title": "თქვენი ავტომობილი იმსახურებს სრულყოფილ მოვლას",
      "hero.sub": "სრული ქიმწმენდა, პოლირება, კერამიკული საფარი, ფირის გადაკვრა და შუშების დაბურვა — ერთ სივრცეში, ისთ ფოინთის გვერდით.",
      "hero.ctaBook": "დაჯავშნეთ WhatsApp-ით",
      "hero.badgeGoogle": "Google-ის რეიტინგი",
      "hero.badgeHours": "ყოველდღე",
      "hero.badgeFb": "რეკომენდაცია Facebook-ზე",
      "services.eyebrow": "რას გთავაზობთ",
      "services.title": "სერვისები",
      "services.select": "არჩევა დასაჯავშნად",
      "services.s1.title": "სრული ქიმწმენდა",
      "services.s1.desc": "სალონის ღრმა წმენდა — სავარძლები, ჭერი, იატაკი, ყველა დეტალი. ავტომობილი უბრუნდება „ახალივით“ მდგომარეობას.",
      "services.s2.title": "პოლირება",
      "services.s2.desc": "საღებავის აღდგენა და სარკისებრი ბზინვარება — ნაკაწრებისა და ჰოლოგრამების გარეშე.",
      "services.s3.title": "კერამიკული საფარი",
      "services.s3.desc": "გრძელვადიანი დაცვა ქიმიური და მექანიკური ზემოქმედებისგან — სიღრმისეული ბზინვარებით.",
      "services.s4.title": "ფირის გადაკვრა",
      "services.s4.desc": "დამცავი და დეკორატიული ფირები ავტომობილის ძარისთვის — დაცული საღებავი და განახლებული იერსახე.",
      "services.s5.title": "შუშების დაბურვა",
      "services.s5.desc": "პროფესიონალური ტონირება — კომფორტი, კონფიდენციალურობა და დაცვა მზისგან.",
      "services.custom.title": "ვერ პოულობთ სასურველს?",
      "services.custom.desc": "მოგვწერეთ WhatsApp-ში და შეგირჩევთ საჭირო მომსახურებას.",
      "services.custom.cta": "მოგვწერეთ",
      "works.eyebrow": "შედეგი თავად ამბობს ყველაფერს",
      "works.title": "ჩვენი ნამუშევრები",
      "works.c1": "უსაფრთხო რეცხვა",
      "works.c2": "სალონის ღრმა წმენდა",
      "works.c3": "ძრავის წმენდა",
      "works.c4": "ქიმწმენდამდე",
      "works.c5": "სარკისებრი ბზინვარება",
      "works.before": "მანამდე",
      "works.after": "შედეგი",
      "works.more": "მეტი ვიდეო ჩვენს Instagram-ზე →",
      "booking.eyebrow": "დაჯავშნა 1 წუთში",
      "booking.title": "დაჯავშნეთ ვიზიტი WhatsApp-ით",
      "booking.sub": "აირჩიეთ სერვისი და დრო — ღილაკზე დაჭერით WhatsApp გაიხსნება უკვე შედგენილი შეტყობინებით. დაგიდასტურებთ და გელოდებით!",
      "booking.step1": "აირჩიეთ სერვისი",
      "booking.step2": "მიუთითეთ ავტომობილი და დრო",
      "booking.step3": "გააგზავნეთ WhatsApp-ში",
      "booking.hoursTitle": "სამუშაო საათები",
      "booking.hours": "ყოველდღე 08:00 – 00:00",
      "form.services": "სერვისები *",
      "form.s1": "სრული ქიმწმენდა",
      "form.s2": "პოლირება",
      "form.s3": "კერამიკული საფარი",
      "form.s4": "ფირის გადაკვრა",
      "form.s5": "შუშების დაბურვა",
      "form.car": "ავტომობილი *",
      "form.carPh": "მაგ. Toyota Camry 2022",
      "form.date": "თარიღი *",
      "form.time": "დრო *",
      "form.timePh": "აირჩიეთ დრო",
      "form.name": "თქვენი სახელი *",
      "form.namePh": "მაგ. გიორგი",
      "form.note": "კომენტარი (არასავალდებულო)",
      "form.notePh": "დამატებითი დეტალები...",
      "form.preview": "შეტყობინების გადახედვა:",
      "form.submit": "დაჯავშნა WhatsApp-ში",
      "form.hint": "ღილაკი გახსნის WhatsApp-ს თქვენი შეტყობინებით — გაგზავნას თავად დაადასტურებთ.",
      "form.errService": "გთხოვთ აირჩიოთ მინიმუმ ერთი სერვისი",
      "contact.eyebrow": "გვესტუმრეთ",
      "contact.title": "სად ვართ",
      "contact.addressLabel": "მისამართი",
      "contact.address": "კაკლიანის ქ. 35, თბილისი — სავაჭრო ცენტრ „ისთ ფოინთის“ გვერდით",
      "contact.hoursLabel": "სამუშაო საათები",
      "contact.hours": "ყოველდღე: 08:00 – 00:00",
      "contact.phoneLabel": "ტელეფონი",
      "contact.maps": "გახსენით Google Maps-ში",
      "contact.signCaption": "ჩვენი სტუდია კაკლიანის 35-ზე",
      "footer.tagline": "ავტომობილის სრული ქიმწმენდა / Detailing",
      "footer.address": "კაკლიანის 35, თბილისი",
      "alt.hero": "გაპრიალებული ავტომობილი CARION-ის სტუდიაში",
      "alt.foam": "ქაფით რეცხვის პროცესი",
      "alt.interior": "სალონის ღრმა ქიმწმენდა — დემონტირებული სავარძლებით",
      "alt.engine": "ძრავის ნაწილის წმენდა",
      "alt.before": "სავარძლები ქიმწმენდამდე",
      "alt.result": "საბოლოო შედეგი — გაპრიალებული ავტომობილი",
      "alt.signage": "CARION-ის აბრა — ქიმწმენდა, პოლირება, ფირის გადაკვრა, შუშების დაბურვა",
      "wa.greeting": "გამარჯობა, CARION! 👋",
      "wa.intro": "მინდა ვიზიტის დაჯავშნა:",
      "wa.services": "🔧 სერვისი",
      "wa.car": "🚗 ავტომობილი",
      "wa.date": "📅 თარიღი",
      "wa.time": "🕐 დრო",
      "wa.name": "👤 სახელი",
      "wa.note": "💬 კომენტარი",
      "meta.title": "CARION — ავტო დითეილინგი თბილისში | ქიმწმენდა, პოლირება, კერამიკა",
      "meta.desc": "CARION / ქერიონი — ავტომობილის სრული ქიმწმენდა, პოლირება, კერამიკული საფარი, ფირის გადაკვრა და შუშების დაბურვა თბილისში. კაკლიანის 35, ისთ ფოინთთან. ყოველდღე 08:00–00:00."
    },
    en: {
      "nav.services": "Services",
      "nav.works": "Our Work",
      "nav.booking": "Book Now",
      "nav.contact": "Contact",
      "nav.book": "Book Now",
      "hero.eyebrow": "Detailing Studio • Varketili, Tbilisi",
      "hero.title": "Your Car Deserves Flawless Care",
      "hero.sub": "Full interior detailing, polishing, ceramic coating, protective film and window tinting — all under one roof, right next to East Point.",
      "hero.ctaBook": "Book via WhatsApp",
      "hero.badgeGoogle": "Google rating",
      "hero.badgeHours": "open daily",
      "hero.badgeFb": "recommended on Facebook",
      "services.eyebrow": "What we offer",
      "services.title": "Services",
      "services.select": "Select for booking",
      "services.s1.title": "Full Interior Detailing",
      "services.s1.desc": "Deep cleaning of the entire cabin — seats, headliner, carpets, every detail. Your car comes back feeling brand new.",
      "services.s2.title": "Polishing",
      "services.s2.desc": "Paint correction and a mirror-like shine — free of scratches, swirls and holograms.",
      "services.s3.title": "Ceramic Coating",
      "services.s3.desc": "Long-term protection against chemical and mechanical wear — with a deep, lasting gloss.",
      "services.s4.title": "Protective Film",
      "services.s4.desc": "Protective and decorative films for your car's body — preserved paint and a refreshed look.",
      "services.s5.title": "Window Tinting",
      "services.s5.desc": "Professional tinting — comfort, privacy and protection from the sun.",
      "services.custom.title": "Looking for something else?",
      "services.custom.desc": "Message us on WhatsApp and we'll find the right service for you.",
      "services.custom.cta": "Message us",
      "works.eyebrow": "The result speaks for itself",
      "works.title": "Our Work",
      "works.c1": "Safe wash",
      "works.c2": "Interior deep clean",
      "works.c3": "Engine bay cleaning",
      "works.c4": "the deep clean",
      "works.c5": "Mirror finish",
      "works.before": "Before",
      "works.after": "After",
      "works.more": "More videos on our Instagram →",
      "booking.eyebrow": "Book in 1 minute",
      "booking.title": "Book Your Visit via WhatsApp",
      "booking.sub": "Pick a service and a time — the button opens WhatsApp with a ready-made message. We'll confirm and be expecting you!",
      "booking.step1": "Choose your service",
      "booking.step2": "Tell us your car and preferred time",
      "booking.step3": "Send it via WhatsApp",
      "booking.hoursTitle": "Working hours",
      "booking.hours": "Every day 08:00 – 00:00",
      "form.services": "Services *",
      "form.s1": "Full Interior Detailing",
      "form.s2": "Polishing",
      "form.s3": "Ceramic Coating",
      "form.s4": "Protective Film",
      "form.s5": "Window Tinting",
      "form.car": "Your car *",
      "form.carPh": "e.g. Toyota Camry 2022",
      "form.date": "Date *",
      "form.time": "Time *",
      "form.timePh": "Choose a time",
      "form.name": "Your name *",
      "form.namePh": "e.g. Giorgi",
      "form.note": "Comment (optional)",
      "form.notePh": "Any extra details...",
      "form.preview": "Message preview:",
      "form.submit": "Book via WhatsApp",
      "form.hint": "The button opens WhatsApp with your message — you confirm before sending.",
      "form.errService": "Please select at least one service",
      "contact.eyebrow": "Visit us",
      "contact.title": "Where to Find Us",
      "contact.addressLabel": "Address",
      "contact.address": "35 Kakliani St., Tbilisi — next to East Point shopping center",
      "contact.hoursLabel": "Working hours",
      "contact.hours": "Every day: 08:00 – 00:00",
      "contact.phoneLabel": "Phone",
      "contact.maps": "Open in Google Maps",
      "contact.signCaption": "Our studio at 35 Kakliani St.",
      "footer.tagline": "Full auto detailing / ქიმწმენდა",
      "footer.address": "35 Kakliani St., Tbilisi",
      "alt.hero": "Polished car at the CARION studio",
      "alt.foam": "Foam wash in progress",
      "alt.interior": "Interior deep clean with seats removed",
      "alt.engine": "Engine bay cleaning",
      "alt.before": "Seats before detailing",
      "alt.result": "Final result — a polished car",
      "alt.signage": "CARION signboard — detailing, polishing, film, window tinting",
      "wa.greeting": "Hello, CARION! 👋",
      "wa.intro": "I'd like to book a visit:",
      "wa.services": "🔧 Service",
      "wa.car": "🚗 Car",
      "wa.date": "📅 Date",
      "wa.time": "🕐 Time",
      "wa.name": "👤 Name",
      "wa.note": "💬 Comment",
      "meta.title": "CARION — Auto Detailing in Tbilisi | Interior Cleaning, Polishing, Ceramic Coating",
      "meta.desc": "CARION — full interior detailing, polishing, ceramic coating, protective film and window tinting in Tbilisi. 35 Kakliani St., next to East Point. Open daily 08:00–00:00."
    }
  };

  var SERVICE_LABELS = {
    detailing: { ka: "სრული ქიმწმენდა", en: "Full Interior Detailing" },
    polishing: { ka: "პოლირება", en: "Polishing" },
    ceramic: { ka: "კერამიკული საფარი", en: "Ceramic Coating" },
    film: { ka: "ფირის გადაკვრა", en: "Protective Film" },
    tinting: { ka: "შუშების დაბურვა", en: "Window Tinting" }
  };

  var lang = "ka";
  try {
    var saved = localStorage.getItem("carion-lang");
    if (saved === "en" || saved === "ka") lang = saved;
  } catch (e) { /* storage unavailable */ }

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.ka[key] || key;
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.desc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = lang === "ka" ? "EN" : "ქარ";

    updatePreview();
  }

  /* ---------- Language toggle ---------- */
  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      lang = lang === "ka" ? "en" : "ka";
      try { localStorage.setItem("carion-lang", lang); } catch (e) { /* ignore */ }
      applyLang();
    });
  }

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("navBurger");
  var nav = document.querySelector(".site-nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Time options (open daily 08:00–00:00) ---------- */
  var timeSelect = document.getElementById("time");
  if (timeSelect) {
    for (var h = 8; h <= 23; h++) {
      var hh = (h < 10 ? "0" : "") + h;
      ["00", "30"].forEach(function (mm) {
        var opt = document.createElement("option");
        opt.value = hh + ":" + mm;
        opt.textContent = hh + ":" + mm;
        timeSelect.appendChild(opt);
      });
    }
  }

  /* ---------- Min date = today ---------- */
  var dateInput = document.getElementById("date");
  if (dateInput) {
    var now = new Date();
    var iso = now.getFullYear() + "-" +
      String(now.getMonth() + 1).padStart(2, "0") + "-" +
      String(now.getDate()).padStart(2, "0");
    dateInput.min = iso;
  }

  /* ---------- Service cards pre-select ---------- */
  document.querySelectorAll(".service-select").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-service");
      var box = document.querySelector('.booking-form input[value="' + value + '"]');
      if (box) box.checked = true;
      updatePreview();
      var booking = document.getElementById("booking");
      if (booking) booking.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- WhatsApp message builder ---------- */
  var form = document.getElementById("bookingForm");
  var preview = document.getElementById("waPreview");
  var previewText = document.getElementById("waPreviewText");

  function formatDate(value) {
    if (!value) return "";
    var parts = value.split("-");
    if (parts.length !== 3) return value;
    return parts[2] + "." + parts[1] + "." + parts[0];
  }

  function buildMessage() {
    if (!form) return "";
    var services = Array.prototype.slice
      .call(form.querySelectorAll('input[name="service"]:checked'))
      .map(function (box) { return SERVICE_LABELS[box.value][lang]; });

    var car = form.car.value.trim();
    var date = formatDate(form.date.value);
    var time = form.time.value;
    var name = form.name.value.trim();
    var note = form.note.value.trim();

    var lines = [t("wa.greeting"), t("wa.intro"), ""];
    if (services.length) lines.push(t("wa.services") + ": " + services.join(", "));
    if (car) lines.push(t("wa.car") + ": " + car);
    if (date) lines.push(t("wa.date") + ": " + date);
    if (time) lines.push(t("wa.time") + ": " + time);
    if (name) lines.push(t("wa.name") + ": " + name);
    if (note) lines.push(t("wa.note") + ": " + note);
    return lines.join("\n");
  }

  function hasAnyInput() {
    if (!form) return false;
    return form.querySelectorAll('input[name="service"]:checked').length > 0 ||
      form.car.value.trim() !== "" ||
      form.date.value !== "" ||
      form.time.value !== "" ||
      form.name.value.trim() !== "" ||
      form.note.value.trim() !== "";
  }

  function updatePreview() {
    if (!form || !preview || !previewText) return;
    if (hasAnyInput()) {
      preview.hidden = false;
      previewText.textContent = buildMessage();
    } else {
      preview.hidden = true;
    }
  }

  if (form) {
    form.addEventListener("input", updatePreview);
    form.addEventListener("change", updatePreview);

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var checked = form.querySelectorAll('input[name="service"]:checked');
      if (checked.length === 0) {
        alert(t("form.errService"));
        return;
      }
      var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(buildMessage());
      var win = window.open(url, "_blank", "noopener");
      if (!win) window.location.href = url;
    });
  }

  /* ---------- Year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  applyLang();
})();
