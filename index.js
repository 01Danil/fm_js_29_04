"use strict";

const site = {
  title: "Green site", ///
  headers: ["title 1", "About us", "Portfolio"],
  showHeaders() {
    // console.log(this)
    this.headers.forEach((header) => {
      // console.log(this)
      console.log(header, "|", this.title);

      const test = () => {
        console.log(this);
      };
      test();
    });
  },
};

site.showHeaders();
