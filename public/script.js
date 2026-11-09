const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
const locationLabel = document.querySelector("#workspace-location");

function selectWorkflow(tab) {
  for (const item of tabs) {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  }
  for (const panel of panels) {
    panel.hidden = panel.id !== tab.getAttribute("aria-controls");
  }
  locationLabel.textContent = tab.textContent.trim();
}

for (const [index, tab] of tabs.entries()) {
  tab.addEventListener("click", () => selectWorkflow(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        nextIndex = (index + 1) % tabs.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    selectWorkflow(tabs[nextIndex]);
    tabs[nextIndex].focus();
  });
}

for (const link of document.querySelectorAll("[data-workflow]")) {
  link.addEventListener("click", () => {
    const tab = document.getElementById(`tab-${link.dataset.workflow}`);
    selectWorkflow(tab);
    tab.focus({ preventScroll: true });
  });
}

const mobileLayout = window.matchMedia("(max-width: 760px)");
function updateTabOrientation() {
  document
    .querySelector('[role="tablist"]')
    .setAttribute(
      "aria-orientation",
      mobileLayout.matches ? "horizontal" : "vertical",
    );
}
mobileLayout.addEventListener("change", updateTabOrientation);
updateTabOrientation();
