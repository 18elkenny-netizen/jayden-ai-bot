
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("JAYDEN AI 🤖 est en ligne !");
});
app.get("/test", (req, res) => {
  const message = req.query.message || "!help";

  res.json({
    bot: "JAYDEN AI",
    commande: message,
    reponse: traiterCommande(message)
  });
});
// Commandes commençant par !
function traiterCommande(texte) {
  const cmd = texte.trim().toLowerCase();

  if (cmd === "!help" || cmd === "!aide") {
    return [
      "🌌 JAYDEN AI",
      "",
      "!help — Liste des commandes",
      "!bal — Image (prochaine étape)",
      "!jeu — Devinette",
      "!quiz — Question quiz",
      "!ia [message] — Assistant IA (à connecter)"
    ].join("\n");
  }

  if (cmd === "!bal") {
    return "🖼️ La fonction image sera activée prochainement !";
  }

  if (cmd === "!jeu") {
    return "🎮 Devinette : qu'est-ce qui a des touches mais n'ouvre aucune porte ?";
  }

  if (cmd === "!quiz") {
    return "🧠 Quelle est la planète rouge ? A) Vénus B) Mars C) Jupiter";
  }

  if (cmd === "b" || cmd === "mars") {
    return "✅ Bonne réponse : Mars ! 🌌";
  }

  if (cmd.startsWith("!ia ")) {
    return "🧠 L'intelligence artificielle conversationnelle sera connectée dans une prochaine étape.";
  }

  if (cmd.startsWith("!")) {
    return "❓ Commande inconnue. Tape !help.";
  }

  return null;
}

// Test local du bot
app.post("/test", (req, res) => {
  const texte = req.body.message;

  if (typeof texte !== "string") {
    return res.status(400).json({
      error: "Envoie un champ message sous forme de texte."
    });
  }

  res.json({
    bot: "JAYDEN AI",
    commande: texte,
    reponse: traiterCommande(texte)
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("JAYDEN AI prêt sur le port " + PORT);
});
  
