// const savedParams = localStorage.getItem("myParams");

// //теж базовий запобіжник
// if (savedParams) {
//   const params = new URLSearchParams(savedParams);
//   const source = params.get("utm_source");

//   //тут на відміну від першого завдання використав махінацію з рядками,
//   // тому що тут мені потрібно було дістати конкретне значення, а там весь source набір параметірв
//   const postbackUrl = `https://tracker.com/postback?status=lead&source=${source}`;

//   console.log("Відправляємо Postback на:", postbackUrl);
//   fetch(postbackUrl, { mode: "no-cors" }); // no-cors щоб провести відрправку без лишніх мені відповідей
// }

window.addEventListener("DOMContentLoaded", () => {
  // 1. Отримуємо параметри з URL (сюди Clickflare сам допише ID)
  const urlParams = new URLSearchParams(window.location.search);

  // Перевіряємо обидва варіанти назви (на всяк випадок)
  const clickId = urlParams.get("cf_click_id") || urlParams.get("click_id");

  if (clickId && clickId !== "OPTIONAL") {
    console.log("Працюємо з реальним ID:", clickId);

    // 2. Формуємо прямий запит до трекера
    const conversionUrl = `https://globalvisitlog.com/cf/cv?click_id=${clickId}`;

    // 3. Відправляємо «тихий» запит, який браузер не заблокує
    fetch(conversionUrl, {
      method: "GET",
      mode: "no-cors",
    })
      .then(() => {
        console.log("Бінго! Конверсія пішла в Clickflare.");
      })
      .catch((err) => console.error("Помилка відправки:", err));
  } else {
    console.warn(
      "ID не знайдено або він дорівнює OPTIONAL. Перевір посилання!",
    );
  }
});
