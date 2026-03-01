const form = document.getElementById("loveForm");
const resultText = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const boy = document.getElementById("boy").value.trim();
    const girl = document.getElementById("girl").value.trim();

    if (!boy || !girl) {
        resultText.textContent = "❌ Please enter both names";
        return;
    }

    const loveScore = Math.floor(Math.random() * 41) + 60; // 60–100%

    let message = "";

    if (loveScore > 85) {
        message = "💖 Perfect match! Made for each other 💍";
    } else if (loveScore > 70) {
        message = "😍 Strong love connection 💕";
    } else {
        message = "😊 Sweet friendship with love vibes 💫";
    }

    resultText.textContent = `❤️ Love Score: ${loveScore}% — ${message}`;
    form.reset();
});
