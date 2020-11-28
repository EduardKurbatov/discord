export const STORAGE = {
  /**
   * Set value to store in localStorage
   * @param {string} key name of the key
   * @param {any} value value to set in localStorage
   */
  setValue: (key, value) => {
    if (typeof key !== 'string') {
      console.error('setValue: wrong argument type(s)');
      return;
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  /**
   * Get value by key from localStorage
   * @param {string} key property name to get value from
   * @returns returns parsed value from storage
   */
  getValue: (key) => {
    if (typeof key !== 'string') {
      console.error(
        `getValue: wrong argument type. Must be "string", but got "${typeof key}"`
      );
      return;
    } else {
      const item = localStorage.getItem(key);
      let value;
      try {
        value = JSON.parse(item);
      } catch (err) {
        console.warn(err);
        value = item;
      }
      return value;
    }
  },
};
