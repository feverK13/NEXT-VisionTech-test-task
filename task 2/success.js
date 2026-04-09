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

const clickflarePixelUrl =
  "https://globalvisitlog.com/cf/cv?click_id=OPTIONAL&payout=OPTIONAL&txid=OPTIONAL";

console.log("Відправляємо конверсію на:", clickflarePixelUrl);

// Відправляємо запит
fetch(clickflarePixelUrl, {
  method: "GET",
  mode: "no-cors", // Цей параметр ігнорує політику блокування відповідей
})
  .then(() => {
    console.log("Конверсія успішно відправлена в Clickflare!");
  })
  .catch((err) => {
    console.error("Помилка відправки:", err);
  });
