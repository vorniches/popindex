# popindex

A JavaScript package to manage z-index values on a page.

## Installation

To use the `popindex`, you would first need to install the package using npm install. Then, you can import it into your JavaScript code using the import keyword.

```
npm install popindex
```

Import the class into your JavaScript code

```JavaScript
import popindexManager from 'popindex';
```

## Usage

To use the `popindex`, first create an instance of it:

```JavaScript
const popindexManager = new popindex();
```

You can then call the getMaxZIndex() method to get the next available z-index value:

```JavaScript
const nextZIndex = popindexManager.getMaxZIndex();
```

This method will return the maximum z-index on the page plus one, by looping through all elements on the page and finding the maximum z-index value.

## Examples

Here is an example of how to use the `popindex` to set the z-index of an element:

```JavaScript
const popindexManager = new popindex();

// Get the next available z-index
const nextZIndex = popindexManager.getMaxZIndex();

// Set the z-index of an element
const element = document.querySelector('.my-element');
element.style.zIndex = nextZIndex;
```

This example gets the next available z-index using the getMaxZIndex() method, and then sets the z-index of an element using the returned value.

## Contributing

If you find a bug or have an idea for a new feature, please open an issue or pull request on the GitHub repository.

## License

The `popindex` is released under the [MIT License](https://opensource.org/licenses/MIT).
