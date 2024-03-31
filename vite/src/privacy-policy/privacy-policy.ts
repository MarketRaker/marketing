import "../style.scss";

import { loadTranslations, translate } from "../script/i18n";

import { CurrentDates } from "../script/current-dates";
import { MobileBurgerMenu } from "../script/mobile-burger-menu";

export class PrivacyPolicy {
  constructor() {
    this.preloader();
    this.init();
  }

  private init() {
    this.loadTranslations();
    const dates = new CurrentDates();
    dates.current();
    new MobileBurgerMenu().initMobileMenu();
  }

  private preloader() {
    const loadingScreen = document.getElementById("preloader");

    if (!loadingScreen) return;
    setTimeout(() => {
      loadingScreen.style.animation = "bounce 2s infinite";
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 1500);
    }, 700);
  }

  private loadTranslations() {
    loadTranslations('privacy-policy').then(() => {
      document.querySelectorAll('[data-i18n]').forEach(
        (element) => {
          if (element.getAttribute('data-i18n'))
            element.innerHTML = translate(element.getAttribute('data-i18n'), element.innerHTML);
        }
      )
    })
  }
}

new PrivacyPolicy();
