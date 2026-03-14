// CountryList object. I learned how to compress main JS into an object!
// Now, this can be re-used in other projects for a simple list creation widget
const CountryList = {
  // *********** Element Get Section ***************
  olItems: document.getElementById("country-list"),
  txtAdd: document.getElementById("add-field"),
  addButton: document.getElementById("add-button"),
  clearButton: document.getElementById("clear-button"),

  // Main assignment variable, learning how to manipulate Map objects
  countries: new Map(),

  // ************* Function Section ***************
  addToList: function () {
    this.addButton.addEventListener("click", () => {
      let iteratorArray = Array.from(this.countries.values());

      //   countries.set(1, "Example Country");
      //   console.log(countries.get(1));

      if (!valueMatch(iteratorArray, this.txtAdd.value)) {
        this.olItems.innerHTML = "";
        if (this.txtAdd.value.length > 0)
          this.countries.set(Date.now(), this.txtAdd.value);
        for (let [key, value] of this.countries) {
          let newItem = document.createElement("li");
          newItem.innerHTML = `${value}`;
          this.olItems.append(newItem);
        }
      }
    });

    function valueMatch(iteratorArray, countryValue) {
      if (iteratorArray.includes(countryValue)) {
        return true;
      }
      //   console.log("error! Country was not found");
      return false;
    }
  },

  clearList: function () {
    this.clearButton.addEventListener("click", () => {
      this.olItems.innerHTML = "";
      this.countries.clear();
      console.log(this.countries.size);
    });
  },
};

window.onload = CountryList.addToList();
window.onload = CountryList.clearList();
