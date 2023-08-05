const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        "60px": "60px",
      },
      width: {
        "76px": "76px",
      },
      height: {
        "18px": "18px",
        "400px": "400px",
        "600px": "600px",
        "52px": "52px",
        "66px": "66px",
        "60px": "60px",
        "480px": "480px",
      },
      margin: {
        "-10px": "-10px",
        "60px": "60px",
      },
      lineHeight: {
        1.55: "1.55",
        1.2: "1.2",
        1.3: "1.3",
        1.4: "1.4",
      },
      colors: {
        "footer-text": "#8b95a1",
        "email-text": "#08f",
        "footer-strong": "#4e5968",
        "login-btn": "#484848",
        "product-card-desc": "rgba(26, 26, 26, .5)",
        "al-black": "#1a1a1a",
        "mobilemenu-border": "#f2f4f6",
      },
      fontSize: {
        h4: "15px",
        "product-card-desc": "10px",
        "h2-pc": "40px",
      },
      minWidth: {
        productCard: "90px",
      },
      flexBasis: {
        productCard: "90px",
      },
      boxShadow: {
        "product-card":
          "0 0 2px rgba(0,0,0,.08), 4px 12px 36px rgba(0,0,0,.09)",
        "header-dropdwon-box":
          "0 0 1px rgba(0,0,0,.25), 0 8px 20px rgba(0,0,0,.15)",
      },
      backgroundSize: {
        "50%": "50%",
      },
      borderRadius: {
        "pc-28px": "28px",
        "10px": "10px",
      },
      backgroundIage: {
        "icon-slate-open": "url('../img/dropdown-arrow.svg')",
        "mobileMenu-banner": "linear-gradient(90deg, #ff6746, #ff477e)",
        "main-slide-01-m": "url(../img/img_mainSlide_1_m.png)",
        "main-slide-01": "url(../img/img_mainSlide_1_pc.png)",
        "main-slide-02-m": "url(../img/img_mainSlide_2_m.png)",
        "main-slide-02": "url(../img/img_mainSlide_2_pc.png)",
        "main-slide-03-m": "url(../img/img_mainSlide_3_m.png)",
        "main-slide-03": "url(../img/img_mainSlide_3_pc.png)",
        "mobileMenu-bannner-arrow": "url('../img/mobilemenu-banner-arrow.svg')",
        "mobileMenu-bannner-arrow": "url('../img/product-quick-arrow.svg')",
        "ad-zero-m": "url('../img/bg_adzero_subscribe_m.png')",
        "ad-zero-pc": "url('../img/bg_adzero.subscribe.png')",
        "business-m": "url('../img/bg_business_mobile.png')",
        "business-pc": "url('../img/bg_business_pc.png')",
        "promotion-navigation": "url('../img/promotion-swiper-button.svg')",
      },
    },
    screens: {
      sm: "576px",
      lg: "1024px",
      xl: "1240px",
    },
    container: {
      screens: {
        sm: "100%",
      },
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "40px",
        xl: "40px",
      },
      margin: {
        sm: "auto",
        md: "0",
        lg: "0px",
        xl: "0px",
      },
      width: "100%",
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    // ...
  ],
};
