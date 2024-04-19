import "../style.scss";

import { CurrentDates } from "../script/current-dates";
import { MobileBurgerMenu } from "../script/mobile-burger-menu";

export class PrivacyPolicy {
  constructor() {
    this.preloader();
    this.init();
  }

  private init() {
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
}

new PrivacyPolicy();
