/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns shallow copy of an object.
 *
 * @param {Object} obj - an object to copy
 * @return {Object}
 *
 * @example
 *    shallowCopy({a: 2, b: 5}) => {a: 2, b: 5}
 *    shallowCopy({a: 2, b: { a: [1, 2, 3]}}) => {a: 2, b: { a: [1, 2, 3]}}
 *    shallowCopy({}) => {}
 */
function shallowCopy(obj) {
  // throw new Error('Not implemented');
  return Object.fromEntries(Object.entries(obj));
  // return JSON.parse(JSON.stringify(obj));
  // return Object.assign({}, obj);
}
// console.log(shallowCopy({a: 2, b: 5})) // => {a: 2, b: 5})
// console.log(shallowCopy({a: 2, b: { a: [1, 2, 3]}})) // => {a: 2, b: { a: [1, 2, 3]}}
// console.log(shallowCopy({})) // => {}

/**
 * Merges array of objects into a single object. If there are overlapping keys, the values
 * should be summed.
 *
 * @param {Object[]} objects - The array of objects to merge
 * @return {Object} - The merged object
 *
 * @example
 *    mergeObjects([{a: 1, b: 2}, {b: 3, c: 5}]) => {a: 1, b: 5, c: 5}
 *    mergeObjects([]) => {}
 */
function mergeObjects(objects) {
  const temp = {};
  let key;
  let value;
  for (let i = 0; i < objects.length; i += 1) {
    // console.log(...Object.entries(element))
    const arr = Object.entries(objects[i]);
    for (let j = 0; j < arr.length; j += 1) {
      [key, value] = arr[j];
      if (key in temp) {
        temp[key] += value;
      } else {
        temp[key] = value;
      }
    }
  }
  // console.log(...objects)
  return temp;
}
// console.log(mergeObjects([{a: 1, b: 2}, {b: 3, c: 5}])) // => {a: 1, b: 5, c: 5}
// console.log(mergeObjects([])) // => {}

/**
 * Removes a properties from an object.
 *
 * @param {Object} obj - The object from which to remove the property
 * @param {Array} keys - The keys of the properties to remove
 * @return {Object} - The object with the specified key removed
 *
 * @example
 *    removeProperties({a: 1, b: 2, c: 3}, ['b', 'c']) => {a: 1}
 *    removeProperties({a: 1, b: 2, c: 3}, ['d', 'e']) => {a: 1, b: 2, c: 3}
 *    removeProperties({name: 'John', age: 30, city: 'New York'}, 'age') => {name: 'John', city: 'New York'}
 *
 */
function removeProperties(obj, keys) {
  // throw new Error('Not implemented');
  const result = { ...obj };
  if (!Array.isArray(keys)) {
    delete result[keys];
  } else {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i] in result) {
        delete result[keys[i]];
      }
    }
  }
  return result;
}
// console.log(removeProperties({a: 1, b: 2, c: 3}, ['b', 'c'])) // => {a: 1}
// console.log(removeProperties({a: 1, b: 2, c: 3}, ['d', 'e'])) // => {a: 1, b: 2, c: 3}
// console.log(removeProperties({name: 'John', age: 30, city: 'New York'}, 'age')) // => {name: 'John', city: 'New York'}

/**
 * Compares two source objects. Returns true if the objects are equal and false otherwise.
 * There are no nested objects.
 *
 * @param {Object} obj1 - The first object to compare
 * @param {Object} obj2 - The second object to compare
 * @return {boolean} - True if the objects are equal, false otherwise
 *
 * @example
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 2}) => true
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 3}) => false
 */
function compareObjects(obj1, obj2) {
  // throw new Error('Not implemented');
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
// console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 2})); // => true
// console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 3})); // => false

/**
 * Checks if the source object is empty.
 * Returns true if the object contains no enumerable own properties, false otherwise.
 *
 * @param {Object} obj - The object to check
 * @return {boolean} - True if the object is empty, false otherwise
 *
 * @example
 *    isEmptyObject({}) => true
 *    isEmptyObject({a: 1}) => false
 */
function isEmptyObject(obj) {
  // throw new Error('Not implemented');
  return Boolean(!Object.keys(obj).length);
}
// console.log(isEmptyObject({})) // => true
// console.log(isEmptyObject({a: 1})) // => false

/**
 * Makes the source object immutable by preventing any changes to its properties.
 *
 * @param {Object} obj - The source object to make immutable
 * @return {Object} - The immutable version of the object
 *
 * @example
 *    const obj = {a: 1, b: 2};
 *    const immutableObj = makeImmutable(obj);
 *    immutableObj.a = 5;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    delete immutableObj.a;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    immutableObj.newProp = 'new';
 *    console.log(immutableObj) => {a: 1, b: 2}
 */
function makeImmutable(obj) {
  // throw new Error('Not implemented');
  return Object.freeze(obj);
}
// const obj = {a: 1, b: 2};
// const immutableObj = makeImmutable(obj);
// immutableObj.a = 5;
// console.log(immutableObj) // => {a: 1, b: 2}
// delete immutableObj.a;
// console.log(immutableObj) // => {a: 1, b: 2}
// immutableObj.newProp = 'new';
// console.log(immutableObj) // => {a: 1, b: 2}

/**
 * Returns a word from letters whose positions are provided as an object.
 *
 * @param {Object} lettersObject - An object where keys are letters and values are arrays of positions
 * @return {string} - The constructed word
 *
 * @example
 *    makeWord({ a: [0, 1], b: [2, 3], c: [4, 5] }) => 'aabbcc'
 *    makeWord({ H:[0], e: [1], l: [2, 3, 8], o: [4, 6], W:[5], r:[7], d:[9]}) => 'HelloWorld'
 */
function makeWord(lettersObject) {
  // throw new Error('Not implemented');
  // for(const [key, value] of Object.entries(lettersObject)) {
  //   console.log(key, value);
  // };
  const arr = Object.keys(lettersObject);
  // console.log(arr);
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    // console.log(arr[i]);
    for (let j = 0; j < lettersObject[arr[i]].length; j += 1) {
      // console.log(lettersObject[arr[i]]);
      result[lettersObject[arr[i]][j]] = arr[i];
      // console.log(result);
    }
  }
  return result.join('');
  // for (let key in lettersObject) {
  //   console.log(key);
  // }
}
// console.log(makeWord({ a: [0, 1], b: [2, 3], c: [4, 5] })) // => 'aabbcc'
// console.log(makeWord({ H:[0], e: [1], l: [2, 3, 8], o: [4, 6], W:[5], r:[7], d:[9]})) // => 'HelloWorld'

/**
 * There is a queue for tickets to a popular movie.
 * The ticket seller sells one ticket at a time strictly in order and give the change.
 * The ticket costs 25. Customers pay with bills of 25, 50, or 100.
 * Initially the seller has no money for change.
 * Return true if the seller can sell tickets, false otherwise
 *
 * @param {number[]} queue - The array representing the bills each customer pays with
 * @return {boolean} - True if the seller can sell tickets to everyone, false otherwise
 *
 * @example
 *    sellTickets([25, 25, 50]) => true
 *    sellTickets([25, 100]) => false (The seller does not have enough money to give change.)
 */
function sellTickets(queue) {
  // throw new Error('Not implemented');
  let banknotes = 0;
  for (let i = 0; i < queue.length; i += 1) {
    // console.log(i, queue[i], queue[i] - 25 - banknotes)
    if (queue[i] - 25 - banknotes > 0) {
      return false;
    }
    banknotes += 25;
  }
  return true;
}
// console.log(sellTickets([25, 25, 50])) // => true
// console.log(sellTickets([25, 100])) // => false (The seller does not have enough money to give change.)

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  // throw new Error('Not implemented');
  const obj = {
    width,
    height,
    getArea() {
      return this.width * this.height;
    },
  };
  return obj;
}
// const r = new Rectangle(10,20);
// console.log(r.width);       // => 10
// console.log(r.height);      // => 20
// console.log(r.getArea());   // => 200

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  // throw new Error('Not implemented');
  return JSON.stringify(obj);
}
// console.log(getJSON([1,2,3])) //   =>  '[1,2,3]'
// console.log(getJSON({ width: 10, height : 20 })) // => '{"height":10,"width":20}'

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  // throw new Error('Not implemented');
  const obj = JSON.parse(json);
  Object.setPrototypeOf(obj, proto);
  return obj;
}
// const r = fromJSON(Circle.prototype, '{"radius":10}');
// console.log(r)

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(arr) {
  // throw new Error('Not implemented');
  const result = arr.sort((a, b) => {
    return a.country.localeCompare(b.country) || a.city.localeCompare(b.city);
  });
  return result;
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  // throw new Error('Not implemented');
  const result = new Map();
  array.map((element) => {
    const key = keySelector(element);
    if (!result.has(key)) {
      result.set(key, []);
    }
    result.set(key, result.get(key).concat(valueSelector(element)));
    return element;
  });
  return result;
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
  result: '',
  level: 0,
  element(value) {
    // throw new Error('Not implemented');
    // console.log(this.result, value, '=>', /^[a-z]/.test(this.result))
    if (/^[a-z]/.test(this.result)) {
      // if (this.result.includes('table')) {
      // console.log('------');
      // const error =
      //   'Element, id and pseudo-element should not occur more then one time inside the selector';
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    }
    const obj = Object.create(this);
    obj.result += value;
    if (this.level > 1) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    obj.level = 1;
    return obj;
  },

  id(value) {
    // throw new Error('Not implemented');

    if (/#/.test(this.result)) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    }
    const obj = Object.create(this);
    obj.result += `#${value}`;
    if (this.level > 2) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    obj.level = 2;
    return obj;
  },

  class(value) {
    // throw new Error('Not implemented');
    const obj = Object.create(this);
    obj.result += `.${value}`;
    if (this.level > 3) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    obj.level = 3;
    return obj;
  },

  attr(value) {
    // throw new Error('Not implemented');
    const obj = Object.create(this);
    obj.result += `[${value}]`;
    if (this.level > 4) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    obj.level = 4;
    return obj;
  },

  pseudoClass(value) {
    // throw new Error('Not implemented');
    const obj = Object.create(this);
    obj.result += `:${value}`;
    if (this.level > 5) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    obj.level = 5;
    return obj;
  },

  pseudoElement(value) {
    // throw new Error('Not implemented');
    if (/::/.test(this.result)) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    }
    const obj = Object.create(this);
    obj.result += `::${value}`;
    if (this.level > 6) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    obj.level = 6;
    return obj;
  },

  combine(selector1, combinator, selector2) {
    // throw new Error('Not implemented');
    const obj = Object.create(this);
    obj.result = obj.result.concat(
      selector1.stringify(),
      ` ${combinator} `,
      selector2.stringify()
    );
    return obj;
  },
  stringify() {
    // console.log(this.result);
    return this.result;
  },
};

// const builder = cssSelectorBuilder;
// a = builder.pseudoElement('after').id('id')
// console.log(a)
// a = builder.element('div').stringify()
// console.log(a)
// a = builder.id('nav-bar').stringify()
// console.log(a)
// builder.element('table').element('div').stringify();
// a = builder.id('main').class('container').class('editable').stringify()
// // *    => '#main.container.editable'

// a = builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
// //    => 'a[href$=".png"]:focus'
// a = builder.combine(
//       builder.element('div').id('main').class('container').class('draggable'),
//       '+',
//       builder.combine(
//           builder.element('table').id('data'),
//           '~',
//            builder.combine(
//                builder.element('tr').pseudoClass('nth-of-type(even)'),
//                ' ',
//                builder.element('td').pseudoClass('nth-of-type(even)')
//            )
//       )
//   ).stringify()
//     // => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
// console.log(a)

module.exports = {
  shallowCopy,
  mergeObjects,
  removeProperties,
  compareObjects,
  isEmptyObject,
  makeImmutable,
  makeWord,
  sellTickets,
  Rectangle,
  getJSON,
  fromJSON,
  group,
  sortCitiesArray,
  cssSelectorBuilder,
};
