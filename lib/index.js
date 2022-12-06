class popindexManager {
  constructor() {
    this.maxZIndex = 0;
  }

  // Method to get the current maximum z-index on the page
  getMaxZIndex() {
    // Get all elements on the page
    const elements = document.querySelectorAll('*');

    // Loop through each element and find the maximum z-index
    for (let element of elements) {
      const zIndex = window.getComputedStyle(element, null).getPropertyValue('z-index');
      if (zIndex && parseInt(zIndex, 10) > this.maxZIndex) {
        this.maxZIndex = parseInt(zIndex, 10);
      }
    }

    // Return the maximum z-index + 1
    return this.maxZIndex + 1;
  }
}