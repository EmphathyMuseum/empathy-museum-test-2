function showResults() {

  const panel = document.getElementById("resultPanel");
  panel.classList.remove("hidden");

  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("finalResult").classList.add("hidden");

  const bar = document.getElementById("bar");
  bar.style.width = "0%";

  const scores = { A:0, B:0, C:0, D:0, E:0 };

  for (let i = 1; i <= 10; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) scores[selected.value]++;
  }

  setTimeout(() => {
    bar.style.width = "100%";
  }, 100);

  setTimeout(() => {

    let result = "A";
    for (let key in scores) {
      if (scores[key] > scores[result]) result = key;
    }

    const personas = {
      A: ["🧭 Self Explorer", "You are searching for meaning and identity."],
      B: ["🤝 Connector", "You value emotional connection and empathy."],
      C: ["🌱 Healing Searcher", "You are healing gently and honestly."],
      D: ["🧠 Sensitive Thinker", "You live with depth and reflection."],
      E: ["🌍 Outsider", "You long to be seen and included."]
    };

    document.getElementById("loading").classList.add("hidden");
    document.getElementById("finalResult").classList.remove("hidden");

    document.getElementById("personaTitle").innerText = personas[result][0];
    document.getElementById("personaText").innerText = personas[result][1];

  }, 5000);
}
