/**
 * @param {string} [baseUrl] - The base URL to use for resolving relative URLs when analyzing pages from a URL.
 */

class ZIndexManager {
    constructor(baseUrl) {
        this.maxZIndex = 0;
        this.baseUrl = baseUrl;
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

    async getMaxZIndexFromUrl() {
        // Fetch the HTML content of the page
        const response = await fetch(this.baseUrl);
        const html = await response.text();

        // Parse the HTML into a DOM tree
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Get all elements in the DOM tree
        const elements = doc.querySelectorAll('*');

        // Loop through each element and find the maximum z-index
        let maxZIndex = 0;
        for (let element of elements) {
            const zIndex = element.style.zIndex;
            if (zIndex && parseInt(zIndex, 10) > maxZIndex) {
                maxZIndex = parseInt(zIndex, 10);
            }
        }

        // Return the maximum z-index + 1
        return maxZIndex + 1;
    }
}

export default ZIndexManager;