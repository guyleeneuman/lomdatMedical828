// ============================
// INIT SESSION (ספר ראשון פתוח)
// ============================
if (!sessionStorage.getItem("progress")) {
  sessionStorage.setItem("progress", "1");
}

const progress = parseInt(sessionStorage.getItem("progress"));

// ============================
// LIBRARY PAGE LOGIC
// ============================
const books = document.querySelectorAll(".book");

books.forEach(book => {
  const bookNum = parseInt(book.dataset.book);

  // אם הספר נעול
  if (bookNum > progress) {
    book.classList.add("locked");
  }

  // אם הספר פתוח
  if (bookNum <= progress) {
    book.addEventListener("click", () => {
      window.location.href = `${bookNum}.html`;
    });
  }
});

// ============================
// FUNCTION לפתיחת ספר הבא
// ============================
function unlockNextBook(currentBook) {
  const saved = parseInt(sessionStorage.getItem("progress"));

  if (currentBook >= saved) {
    sessionStorage.setItem("progress", currentBook + 1);
  }
}

// ============================
// חזרה לספרייה
// ============================
function goToLibrary(bookNumber) {
  unlockNextBook(bookNumber);
  window.location.href = "libary.html";
}

//thank you button
function showThankYou() {
    const thankYouImg = document.querySelector(".thankYou");

    // מציג את התמונה
    thankYouImg.style.display = "block";

    // מעלים אחרי 3 שניות
    setTimeout(() => {
        thankYouImg.style.display = "none";
    }, 3000);
}

