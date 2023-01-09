import ZIndexManager from '../src/ZIndexManager';

describe('ZIndexManager', () => {
  let zIndexManager;

  beforeEach(() => {
    zIndexManager = new ZIndexManager();
  });

  describe('getMaxZIndex', () => {
    it('should return the maximum z-index on the page', () => {
      // You could use jsdom or a similar library to create a virtual DOM
      // and set some elements with different z-index values
      // Then you can use zIndexManager.getMaxZIndex() to check that it returns the correct value
    });
  });

  describe('getMaxZIndexFromUrl', () => {
    it('should return the maximum z-index on the page at the specified URL', () => {
      // You could use a mock fetch library or a real server to set up the HTML at the specified URL
      // Then you can use zIndexManager.getMaxZIndexFromUrl() to check that it returns the correct value
    });
  });
});
