# popindex

A JavaScript package to manage z-index values on a page.

## Installation

To use the `popindex`, you would first need to install the package using npm install. Then, you can import it into your JavaScript code using the import keyword.

```
npm install popindex
```
## Usage

To use `popindex`, import it in your JavaScript file and create a new instance of `ZIndexManager`:

```javascript
import ZIndexManager from 'popindex';

const zIndexManager = new ZIndexManager();
```

## ZIndexManager

### Properties

- `baseUrl`: The base URL to use for resolving relative URLs when analyzing pages from a URL.

### Methods

- `getMaxZIndex()`: Returns the maximum z-index on the current page.
- `getMaxZIndexFromUrl()`: Returns the maximum z-index on the page at the specified URL.

## Examples

```javascript
import ZIndexManager from 'popindex';

// Create a new ZIndexManager instance
const zIndexManager = new ZIndexManager();

// Get the maximum z-index on the current page
const maxZIndex = zIndexManager.getMaxZIndex();
console.log(maxZIndex); // Outputs the maximum z-index + 1

// Get the maximum z-index on the page at the specified URL
const baseUrl = 'http://example.com';
const maxZIndexFromUrl = await zIndexManager.getMaxZIndexFromUrl(baseUrl);
console.log(maxZIndexFromUrl); // Outputs the maximum z-index + 1
```

## Contributing

If you find a bug or have an idea for a new feature, please open an issue or pull request on the [GitHub repository](https://github.com/vorniches/popindex).

## License

The `popindex` is released under the [MIT License](https://opensource.org/licenses/MIT).
