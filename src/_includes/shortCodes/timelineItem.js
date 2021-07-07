const timelineItem = (side, title, time, description, tags) => {
  // side is right or left
  return side === "right"
    ? `<div
      class="mb-8 
      flex 
      justify-between
    items-center
    w-full
    right-timeline"
    >
      <div class="order-1 w-5/12"></div>
      <div class="order-1 w-5/12 px-1 py-4 text-left">
        <p class="mb-3 text-base text-marine">${time}</p>
        <h4 class="mb-3 font-bold text-lg md:text-2xl">${title}</h4>
        <p class="text-sm md:text-base text-black leading-snug">${description}</p>
      </div>
    </div>`
    : `<div
      class="
                mb-8
                flex
                justify-between
                flex-row-reverse
                items-center
                w-full
                left-timeline
              "
    >
      <div class="order-1 w-5/12"></div>
      <div class="order-1 w-5/12 px-1 py-4 text-right">
        <p class="mb-3 text-base text-marine">${time}</p>
        <h4 class="mb-3 font-bold text-lg md:text-2xl">${title}</h4>
        <p class="text-sm md:text-base text-black leading-snug">${description}</p>
      </div>
    </div>`;
};

module.exports = timelineItem;
