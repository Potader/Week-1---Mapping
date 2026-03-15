// CountryList object. I learned how to compress the main JS into an object!
// Now, this can be re-used in other projects for a simple list creation widget (if you want an extremely rudimentary one)
const CountryList = {
  // *********** Element Get Section ***************
  olItems: document.getElementById("country-list"),
  txtAdd: document.getElementById("add-field"),
  addButton: document.getElementById("add-button"),
  clearButton: document.getElementById("clear-button"),

  //   Main assignment variable, learning how to manipulate Map objects
  //   Outside of main flow; Needs semi-permanence. Function addToList needs it to be stable
  //   to consistently update, clearList needs to clear it to allow for brand new lists.
  countries: new Map(),

  // ************* Function Section ***************
  addToList: function () {
    this.addButton.addEventListener("click", () => {
      // Complex. First creates Iterator object with Map.values, then generates an iterable array
      let iteratorArray = Array.from(this.countries.values());
      // Trims input just to clean up accidental spaces
      let trimmedValue = this.txtAdd.value.trim();

      //   countries.set(1, "Example Country"); testing Map key-value pair
      //   console.log(countries.get(1)); and testing entry/obtaining of value from key

      // valueMatch will take iteratorArray (array) and scan for matching value countryValue
      function valueMatch(iteratorArray, countryValue) {
        if (iteratorArray.includes(countryValue)) {
          return true;
        }
        //   console.log("error! Country was not found"); test to see if false would work
        return false;
      }

      // Calls valueMatch, if match is not found in array, checks for value in txtAdd input field
      // If input field has value, adds text to map with Date.now key, and adds value to ordered list on page
      if (!valueMatch(iteratorArray, trimmedValue)) {
        this.olItems.textContent = "";
        if (this.txtAdd.value.length > 0)
          this.countries.set(Date.now(), trimmedValue);
        for (let [key, value] of this.countries) {
          let newItem = document.createElement("li");
          newItem.textContent = `${value}`;
          this.olItems.append(newItem);
        }
      }
    });
  },

  // Function that adds event listener to clear button.
  // Upon click, clears ordered list, countries Map, and input text box
  clearList: function () {
    this.clearButton.addEventListener("click", () => {
      this.olItems.textContent = "";
      this.countries.clear();
      // console.log(this.countries.size); test for map clear
      this.txtAdd.value = "";
    });
  },
};

// Calls functions from CountryList object. Unsure if there is a better way.
// My old code would just be something like "addToList();" at the end.
window.onload = CountryList.addToList();
window.onload = CountryList.clearList();
