function init() {
  const MANTRA_KEY = "MANTRA";

  const mantraBox = document.querySelector(".mantra");
  const bgImg = document.querySelector(".bg-img");

  // 기존 만트라 불러오기
  const mantra = localStorage.getItem(MANTRA_KEY);
  // 이미 있으면 box에 보여주기
  if (mantra && mantra.trim()) {
    mantraBox.innerHTML = mantra;
  }

  
  mantraBox.addEventListener("click", (e) => {
    mantraBox.setAttribute("contenteditable", true);
    mantraBox.focus();
  });

  // 엔터키 입력
  mantraBox.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        if (!mantraBox.textContent.trim()) {
          mantraBox.innerHTML = "";
        }
        mantraBox.dispatchEvent(new Event("focusout"));
        mantraBox.setAttribute("contenteditable", false);
      }
    }
  });

  mantraBox.addEventListener("focus", (e) => {
    bgImg.classList.add("focus");
  });

  // 새 만트라 입력후 포커스 아웃
  mantraBox.addEventListener("focusout", (e) => {
    localStorage.setItem(MANTRA_KEY, mantraBox.innerHTML);
    bgImg.classList.remove("focus");
  });
};

init();