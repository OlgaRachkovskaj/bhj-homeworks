const timerlId = setInterval(function () {
  const output = document.getElementById("timer");
  output.textContent--;
  if (Number(output.textContent) === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerlId);
  }
}, 1000);