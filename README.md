Temporary Container
===================

Simple minimal implementation of a container that keeps up a specified difference between the newest and oldest elements.

If the time difference between the added element and the oldest elements is bigger than the specified one, the oldest elements are deleted.

## Installation

```shell
  npm install temporary-container --save
```

## Usage

```js
  const {TemporaryContainer} = require("temporary-container");
  let collect = new TemporaryContainer(5*1000); //5 seconds
  setInterval( () => {
    let dataItem = new Date().toString();
    let timestamp = new Date().getTime();
    collect.put(dataItem, timestamp);
    console.log(collect.toArray());
  }, 1000);
```

## API

### TemporaryContainer(maxTimeMs)

#### maxTimeMs

Type: `number|Long`

The maximum milliseconds between the oldest and the newest value.

### Instance

#### .put(item, timestampMs)

Put the item with `timestampMs` unix timestamp in milliseconds value.

##### item

Type: `any`

The item to put.

##### timestampMs

Type: `number|Long|Date`

The timestamp of the item to put.

#### .toArray()

Convert a `TemporaryContainer` into array of container elements without a timestamps.

Returns an `Array` of container elements.

## Contributing

Any ideas, as well as refactoring and comments on improving the code are welcome.

## Todo

Make tests

## Release History

* 0.1.0 Initial release

## License

ISC © Yevhen Stohniienko
