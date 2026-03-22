function searchText() {
      // Remove old highlights
      let content = document.body.innerHTML.replace(/<span class="searchbar-highlight( searchbar-active)?">(.*?)<\/span>/g, "$2");

      let searchValue = document.getElementById("searchbar-input").value;
      if (searchValue) {
        let regex = new RegExp(searchValue, "gi");
        document.body.innerHTML = content.replace(regex, match => `<span class="searchbar-highlight">${match}</span>`);

        let results = document.querySelectorAll(".searchbar-highlight");
        if (results.length > 0) {
          results[0].classList.add("searchbar-active");
          results[0].scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        document.body.innerHTML = content; // reset if empty
      }
    }