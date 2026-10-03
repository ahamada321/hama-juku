const textElement = document.getElementById("typingtext");
const cursorElement = document.getElementById("cursor");
const words = [
  "①基礎コースを学ぶ",
  "②添削を受ける",
  "③認識ズレを正す",
  "④判断軸を構築する",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 100 : 150);
  }
}

if (textElement && cursorElement) {
  type();
}
