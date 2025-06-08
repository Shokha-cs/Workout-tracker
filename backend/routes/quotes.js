const express = require("express");
const router = express.Router();

const quotes = [
  "The last three or four reps is what makes the muscle grow. — Arnold Schwarzenegger",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  "No pain, no gain. Shut up and train. — Unknown",
  "Push yourself, because no one else is going to do it for you. — Unknown",
  "You don’t have to be extreme, just consistent. — Unknown",
  "The only bad workout is the one that didn’t happen. — Unknown",
  "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
  "The clock is ticking. Are you becoming the person you want to be? — Greg Plitt",
  "Motivation is what gets you started. Habit is what keeps you going. — Jim Ryun",
  "If something stands between you and your success, move it. — Dwayne Johnson",
  "Whether you think you can, or you think you can’t, you’re right. — Henry Ford",
  "The secret of getting ahead is getting started. — Mark Twain",
  "Do what you have to do until you can do what you want to do. — Oprah Winfrey",
  "I hated every minute of training, but I said, ‘Don’t quit.’ — Muhammad Ali",
  "A year from now you may wish you had started today. — Karen Lamb",
  "The difference between the impossible and the possible lies in a person’s determination. — Tommy Lasorda",
  "Your body can stand almost anything. It’s your mind that you have to convince. — Unknown",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
  "De aanhouder wint. — Nederlands gezegde",
  "Wie niet waagt, die niet wint. — Nederlands gezegde",
  "Geen woorden maar daden. — Rotterdams gezegde",
  "Oefening baart kunst. — Nederlands gezegde",
  "Een gezonde geest in een gezond lichaam. — Juvenalis (Latijns)",
  "Harakatda baraka. — O‘zbek maqoli",
  "Sog‘liq — eng katta boylik. — O‘zbek maqoli",
  "Mehnat qilgan odam hech qachon yomon yashamaydi. — O‘zbek maqoli",
  "Vaqt — bebaho boylik. — O‘zbek maqoli",
  "Bilim — kuch, kuch — g‘alaba. — O‘zbek maqoli",
];

router.get("/", (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[random] });
  console.log(`It is working this is the quote: ${quotes[random]}`);
});

module.exports = router;
