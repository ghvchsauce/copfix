// tg @aborisenko8

// CLASS ADDITION
const navMainItem = document.querySelectorAll('.navigation-main__item');
const navMainAddClasses = [
  'navMainItem1',
  'navMainItem2',
  'navMainItem3',
  'navMainItem4',
  'navMainItem5',
];
navMainItem.forEach((navMainItem, index) => {
  navMainItem.classList.add(navMainAddClasses[index]);
});


const menuItems = document.querySelectorAll('.menu0-item');
const classesToAdd = [
  'menu0-item-dnevnik',
  'menu0-item-chats',
  'menu0-item-tests',
  'menu0-item-portfolio',
  'menu0-item-raspisanie',
  'menu0-item-profile',
];
menuItems.forEach((menuItems, index) => {
  menuItems.classList.add(classesToAdd[index]);
});


const settingsUspev = document.querySelectorAll('.buttons-group');
const buttonAddClass = [
  'buttons-group-firstLine',
  'buttons-group-secondLine'
]
settingsUspev.forEach((settingsUspev, index) => {
  settingsUspev.classList.add(buttonAddClass[index]);
})


const navTopItem = document.querySelectorAll('.navigation-top-item');
const navTopItemAddClass = [
  'nav-top-itemL1',
  'nav-top-itemL2',
  'nav-top-itemL3',
  'nav-top-itemL4',
  'nav-top-itemL5',
  'nav-top-itemL6',
  'nav-top-itemL7',
  'nav-top-itemR1',
  'nav-top-itemR2',
  'nav-top-itemR3',
  'nav-top-itemR4',
  'nav-top-itemR5',
  'nav-top-itemR6'
]
navTopItem.forEach((navTopItem, index) => {
  navTopItem.classList.add(navTopItemAddClass[index]);
})


const navSeparator = document.querySelectorAll('.navigation-top-separator');
const navSeparatorClassAdd = [
  'nav-separator-left',
  'nav-separator-right'
]
navSeparator.forEach((navSeparator, index) => {
  navSeparator.classList.add(navSeparatorClassAdd[index]);
})


// MOVING ELEMENTS

const element = document.querySelector('.nav-top-itemL3');
const target = document.querySelector('.navigation-top__right');
// const firstLink = target.querySelector('a'); has changed
const firstLink = target ? target.querySelector('a') : null;

if (element && target && firstLink) {
  target.insertBefore(element, firstLink);
}

const style = document.createElement('style');


// CLASS COLORS
style.textContent = `
    .button--purple.button--outline {
        --color-text: #5464ff !important;
        --color-text-hover: #fff !important;
        --color-text-disabled: #c0c4cc !important;
        --color-text-active: #fff !important;
        --color-border: #5464ff !important;
        --color-border-hover: #5464ff !important;
        --color-border-focus: #0073bf !important;
        --color-border-disabled: #caced6 !important;
        --color-border-active: #5464ff !important;
        --color-background: #f4f6ff !important;
        --color-background-hover: #0073bf !important;
        --color-background-disabled: #eeeef5 !important;
        --color-background-active: #0065a9 !important;
    }

    .button--purple.button--outline,
    .button--purple {
        color: var(--color-text) !important;
        background-color: var(--color-background) !important;
        border-color: var(--color-border) !important;
    }

    .button--purple.button--outline:hover,
    .button--purple:hover {
        color: var(--color-text-hover) !important;
        background-color: var(--color-background-hover) !important;
        border-color: var(--color-border-hover) !important;
    }

    .button--purple.button--outline:active,
    .button--purple:active {
        color: var(--color-text-active) !important;
        background-color: var(--color-background-active) !important;
        border-color: var(--color-border-active) !important;
    }

    .button--purple.button--outline:disabled,
    .button--purple:disabled {
        color: var(--color-text-disabled) !important;
        background-color: var(--color-background-disabled) !important;
        border-color: var(--color-border-disabled) !important;
    }

    .navigation-main__item:hover {
    background-color: #1a1a1a; !important
    }

    .navigation-main {
    background-color: #252729; !important
    }

    .menu0-item__triangle {
    color: #252729; !important
    }

    .navigation-main__item.active {
    background-color: #1a1a1a !important
    }

    .navigation-top-item {
    color: #575757; !important
    }

    span.navigation-tabs__item.active {
    border-radius: 16px !important;
    background: #f5f5fa !important;
    border-bottom: solid 1px #dbdfe6;
    }

    header.layout-base__header {
    background-color: #ffffff !important;
    border-top: solid 2px #f5f5fa !important;
    }

    .layout-main,
    .grid-header.table_header_container,
    .inside {
    background-color: #f5f5fa !important;
    }

    div#navigation-tabs {
    background: #ffffff !important;
    margin-bottom: 5px !important; 
    }



    .context--yellow {
    --context-background: #ffffff;
    --context-border: #dddddd;
    }


    a.b-href.external-link {
    color: #2688eb !important;
    }

    .message-col--roles {
    background-color: #f5f5fa !important;
    }

    div#mainmenu {
    box-shadow: 0px 1px 7px 2px rgba(0, 0, 0, 0.2);
    }

    .navigation-top {
    background-color: #f5f5fa;
    border-bottom: 1px solid #dbdfe6;
}
    navigation-header {
    border-top: solid 1px #dbdfe6;
    }

    .navigation-main__home.active {
    background-color: #1a1a1a;
    }
`;

// CLASS MOVING
style.textContent += `
    .notice, .ej-accordion {
    border-radius: 16px !important;
    }

    .buttons-group-firstLine {
    margin-bottom: 10px;
    }

    .buttons-group-secondLine,
    .buttons-group-firstLine {
    margin-top: 5px;
    }

    .table_header_fixed {
    position: relative !important;
    }

    a.navigation-tabs__item:hover {
    border-radius: 16px !important;
    border-bottom: solid 1px rgba(12, 119, 195, .25) !important; 
    }

    .dnevnik-mark__value {
    border-radius: 16px !important;
    font-weight: 900 !important;
    padding: 0 12px !important;
    }

    .menu0-item-profile {
    margin-left: 10px;
    }

    .menu0-item-portfolio {
    margin-left: 21px;
    }

    .menu0-item-tests {
    margin-left: 45px;
    }

    .menu0-item-chats {
    margin-left: 35px;
    }

    .dnevnik-day {
    border-radius: 16px; !important
    }

    .navigation-main {
    border-top-left-radius: 16px !important;
    border-top-right-radius: 16px !important;
    border-bottom-left-radius: 16px !important;
    border-bottom-right-radius: 16px !important;
    height: 41px !important;
    }

    .layout-content--header {
    padding-bottom: 8px !important;
    }

    .button--purple.button--outline {
    border-radius: 16px !important;
    }

    .navigation-tabs__items {
    gap: 5px !important;
    }

    .navigation-tabs__item{
    color: #6a7075;
    }

    div.aDCbnfaDZ1UbgcxLomvn {
    gap: 0px; !important
    }

    .context__block {
    border-radius: 16px;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    background: rgba(245, 245, 250, 0.7);
    }
`

// CLASS HIDING
style.textContent += `

    .context__triangle.context__triangle--before{
    display: none;
    }

    div#dnevnik-header {
    display: none;
    }


    .nav-top-itemL1,
    .nav-top-itemL4,
    .nav-top-itemL3,
    .nav-top-itemL5,
    .nav-top-itemR1,
    .nav-top-itemR4,
    .nav-top-itemR5,
    .nav-separator-left {
    display: none !important;
    }

    .navMainItem5,
    .YgGDIgX4UnCMxIDV5lXb,
    .xQ1EV2wqnUrjHVrywTWi.sbZRdHKe4qTfX_qNUCs0,
    a.fcLi9BZtUSuGnxmDQ91Q.fmwT93fxHyikcrhmFerr,
    .c6Sjixx4DRfr9uIqwQt2  {
    display: none;
    }

    a.navigation-top-item.navigation-top-item--icon.navigation-top-item--warning,
    a.navigation-top-item.navigation-top-item--important,
    a.navigation-top-item.navigation-top-item--icon.navigation-top-item--important2,
    a.menu0-item.menu0-item-chats,
    a.menu0-item.menu0-item-tests,
    a.menu0-item.menu0-item-raspisanie,
    .page-print__item,
    .notice.notice--green {

    display: none !important;

    }
`
document.head.appendChild(style);


// ХЗ Ч ЭТО
const elements = document.querySelectorAll('.dnevnik-day');
elements.forEach(element => {
  element.style.boxShadow = '0px 0px 9px 0px rgba(0,0,0,0.15)';
});

// fade effect
const fade = document.createElement('div');

Object.assign(fade.style, {
  position: 'fixed',
  left: '0',
  right: '0',
  bottom: '0',
  height: '30px',
  pointerEvents: 'none',
  zIndex: '999999',
  background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.7))'
});

document.body.appendChild(fade);


// WEEK SWICHER
// actually chatgpt's shit
if (window.location.href.includes('https://cop.admhmao.ru/journal-app')) {
  const weekSwitchBack = document.createElement('button');
  weekSwitchBack.textContent = '←';
  weekSwitchBack.className = 'weekSwitchBack';
  const weekSwitchCss = `
    padding: 6px 14px;
    font-size: 14px;
    background: rgba(245, 245, 250, 0.8);
    color: black;
    border: 1px solid rgba(215, 215, 215, 0.9);
    border-radius: 16px;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    cursor: pointer;
    transition: 0.2s ease;
    user-select: none;
  `;
  weekSwitchBack.style.cssText = weekSwitchCss;

  const weekSwitchNext = document.createElement('button');
  weekSwitchNext.textContent = '→';
  weekSwitchNext.className = 'weekSwitchNext';
  weekSwitchNext.style.cssText = weekSwitchCss;

  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 999999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
  `;

  wrapper.appendChild(weekSwitchBack);
  wrapper.appendChild(weekSwitchNext);
  document.body.appendChild(wrapper);

  (function () {
    const nextBtn = document.querySelector('.weekSwitchNext');
    const backBtn = document.querySelector('.weekSwitchBack');
    if (!nextBtn && !backBtn) return;

    const base = 'https://cop.admhmao.ru/journal-app/u.3728/week.';

    const parseWeekFromUrl = () => {
      const m = window.location.href.match(/week\.(-?\d+)/);
      if (!m) return null;
      return Number(m[1]); // e.g. 2 or -2
    };

    const computeNext = (cur) => {
      if (cur === null) return -1;           // no week in url -> go to -1
      if (cur === 1) return 0;               // special case: week.1 -> week.0
      if (cur > 1) return cur - 1;           // 5 -> 4, 2 -> 1
      // cur <= -1
      return cur - 1;                        // -1 -> -2, -2 -> -3
    };

    const computeBack = (cur) => {
      if (cur === null) return 1;            // no week in url -> go to 1
      if (cur === -1) return 0;              // special case: week.-1 -> week.0
      if (cur >= 1) return cur + 1;          // 1 -> 2, 2 -> 3
      // cur <= -2
      return cur + 1;                        // -3 -> -2, -2 -> -1
    };

    const goToWeek = (n) => {
      const target = base + String(n);
      window.location.href = target;
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cur = parseWeekFromUrl();
        const nxt = computeNext(cur);
        goToWeek(nxt);
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cur = parseWeekFromUrl();
        const prev = computeBack(cur);
        goToWeek(prev);
      });
    }
  })();

  const checkScroll = () => {
    if (window.scrollY > 250) {
      wrapper.style.opacity = '1';
      wrapper.style.pointerEvents = 'auto';
    } else {
      wrapper.style.opacity = '0';
      wrapper.style.pointerEvents = 'none';
    }
  };

  weekSwitchBack.onmouseenter = () => {
    weekSwitchBack.style.transform = 'scale(1.1)';
  };
  weekSwitchBack.onmouseleave = () => {
    weekSwitchBack.style.transform = 'scale(1)';
  };

  weekSwitchNext.onmouseenter = () => {
    weekSwitchNext.style.transform = 'scale(1.1)';
  };
  weekSwitchNext.onmouseleave = () => {
    weekSwitchNext.style.transform = 'scale(1)';
  };


  window.addEventListener('scroll', checkScroll);

  checkScroll();
}


// UP BUTTON
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '10px';
scrollTopBtn.style.right = '14px';
scrollTopBtn.style.padding = '8px';
scrollTopBtn.style.width = '40px';
scrollTopBtn.style.height = '40px';
scrollTopBtn.style.fontSize = '20px';
scrollTopBtn.style.background = 'rgba(245, 245, 250, 0.7)';
scrollTopBtn.style.color = 'black';
scrollTopBtn.style.border = '1px solid rgba(215, 215, 215, 0.9)';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.backdropFilter = 'blur(3px)';
scrollTopBtn.style.webkitBackdropFilter = 'blur(3px)';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.zIndex = '999999';
scrollTopBtn.style.transition = '0.3s ease, transform 0.2s ease';
scrollTopBtn.style.userSelect = 'none';
scrollTopBtn.style.opacity = '0';
scrollTopBtn.style.pointerEvents = 'none';
scrollTopBtn.style.transform = 'none';
document.body.appendChild(scrollTopBtn);

// плавное появление при скролле
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.pointerEvents = 'auto';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.pointerEvents = 'none';
  }
});

// smooth scroll
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// hover
scrollTopBtn.onmouseenter = () => {
  scrollTopBtn.style.background = 'rgba(255,255,255,0.2)';
  scrollTopBtn.style.transform = 'scale(1.1)';
};
scrollTopBtn.onmouseleave = () => {
  scrollTopBtn.style.background = 'rgba(245, 245, 250, 0.7)';
  scrollTopBtn.style.transform = 'scale(1)';
};




// NEXT DAY BUTTON

if (window.location.href.includes('https://cop.admhmao.ru/journal-app')) {
  const btn = document.createElement('button');
    btn.className = 'btn-nextday';
    btn.textContent = 'к следующему дню';
    btn.style.cssText = `
      position: fixed;
      bottom: 10px;
      padding: 10px 16px;
      font-size: 14px;
      background: rgba(245, 245, 250, 0.7);
      color: black;
      border: 1px solid rgba(215, 215, 215, 0.9);
      border-radius: 16px;
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      cursor: pointer;
      z-index: 999999;
      transition: 0.2s ease;
      user-select: none;
      left: 50%;
      transform: translateX(-50%);
    `;

    btn.onmouseenter = () => {
      btn.style.background = 'rgba(255,255,255,0.2)';
      btn.style.transform = 'translateX(-50%) scale(1.1)';
    };
    btn.onmouseleave = () => {
      btn.style.background = 'rgba(255,255,255,0.1)';
      btn.style.transform = 'translateX(-50%) scale(1)';
    };

    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
      const now = new Date();
      let day = now.getDay();

      if (day === 5 || day === 6 || day === 0) {
      const base = window.location.href.replace(/week\.[^/]+/, '').replace(/\/$/, '');
      window.location.href = `${base}/week.-1`;
      return;
      } 

      if (day === 6) {
        day = 0;
      }

      const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
      const nextDay = days[(day + 1) % 7].toLowerCase();

      const el = [...document.querySelectorAll('*')]
        .find(e => {
          const t = e.textContent?.trim().toLowerCase();
          return t && t.startsWith(nextDay);
        });

      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        alert(`"${nextDay}" not found`);
      }
    });
}
