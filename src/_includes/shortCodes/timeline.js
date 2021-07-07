const timelineItem = require("./timelineItem");

const getItems = (work) => {
  let items = "";
  let side = "right";
  for (const w of work) {
    items = items + timelineItem(side, w.title, w.time, w.description, w.tags);
    if (side === "right") side = "left";
    else side = "right";
  }
  return items;
};

const timeline = (w) => {
  let items = getItems(w);
  return (
    `<div class="bg-white text-forest">
      <div class="container mx-auto flex flex-row justify-center md:flex-row">
        <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div class="container mx-auto w-full h-full">
            <div class="relative wrap overflow-hidden p-10 h-full">
              <div class="bg-sleek absolute h-full w-1 right-1/2"></div>
              <div class="bg-sleek absolute h-full w-1 left-1/2"></div>` +
    items +
    `</div>
          </div>
        </div>
      </div>
    </div>`
  );
};

module.exports = timeline;
