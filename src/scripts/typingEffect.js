const textElement = document.getElementById("typingtext");
const cursorElement = document.getElementById("cursor");
const words = [
  "基礎知識を習得",
  "トレーディング環境整備",
  "投資家マインドを育む",
  "実践スキルを習得する",
  "規律を整える",
  "喜びを分かち合う",
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
