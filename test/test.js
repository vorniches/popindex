describe('popindexManager', () => {
    let popindexManager;
  
    beforeEach(() => {
        popindexManager = new popindexManager();
    });
  
    it('should get the next available z-index', () => {
        // Set the maximum z-index on the page
        document.body.innerHTML = '<div style="z-index: 1000"></div>';
  
        // Get the next available z-index
        const nextZIndex = popindexManager.getMaxZIndex();

        // Expect the next z-index to be 1001
        expect(nextZIndex).toEqual(1001);
    });
});