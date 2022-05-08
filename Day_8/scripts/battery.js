const levelEl = document.getElementById("battery-level");
const statusEl = document.getElementById("battery-status");

async function main() {
  const battery = await navigator.getBattery();

  levelEl.textContent = battery.level * 100 + '%'
  statusEl.textContent = battery.charging ? 'Charging' : 'Not Charging'

  console.log("battery:", battery);
}

main();
