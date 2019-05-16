// Temporary container class
// Copyright (C) 2019 Yevhen Stohniienko <yeuhen.stohniyenko@ukr.net>

/**
 * Deletes the oldest item and returns the timestamp of item that became the oldest after deleting.
 * All time params must be in one format, generally in milliseconds.
 * @param {object} object - The object to delete items in.
 * @param {number} maxTime - The maximum time between oldest and newest value.
 * @param {number} firstKey - The oldest value timestamp.
 * @param {number} lastKey - The newest value timestamp.
 * @returns {number} The oldest value timestamp after deleting.
 */
function DeleteOldItems(object, maxTime, firstKey, lastKey) {
  if (lastKey - firstKey > maxTime) {
    let newFirstKey;
    for (let key in object) {
      if (lastKey - Number(key) > maxTime) {
        delete object[key];
        newFirstKey = key;
      }
      else
      {
        newFirstKey = firstKey;
        break;
      }
    }
    return Number(newFirstKey);
  }
  else {
    return Number(firstKey);
  }
}

/** Class representing a container. */
class TemporaryContainer {
    /**
     * Create a container.
     * @param {number|Long} maxTimeMs - The maximum milliseconds between oldest and newest value.
     */
    constructor(maxTimeMs) {
        this.content = {};
        this.maxTime = Number(maxTimeMs);
        this.firstKey = 0;
        this.lastKey = 0;
    }

    /**
     * Put the item with timestampMs unix timestamp in milliseconds value.
     * @param {any} item - The item to put.
     * @param {number|Long|Dates} timestampMs - The timestamp of item.
     * @return {undefined} undefined.
     */
    put(item, timestampMs) {
        const timestamp = Number(timestampMs);
        this.content[timestamp] = item;
        this.lastKey = Number(timestamp);
        this.firstKey = DeleteOldItems(this.content, this.maxTime, this.firstKey, this.lastKey);
    }

    /**
     * Convert a TemporaryContainer into array of container elements without a timestamps.
     * @return {Array} A Array of container elements.
     */
    toArray() {
        return Object.values(this.content);
    }

}

exports.TemporaryContainer = TemporaryContainer;
