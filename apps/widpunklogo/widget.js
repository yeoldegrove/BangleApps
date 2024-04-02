
WIDGETS["punklogo"]={
  area:"tl",
  width: Bangle.CLOCK?70:0,
  draw: function () {
    if (!Bangle.CLOCK != !this.width) { // if we're the wrong size for if we have a clock or not...
      this.width = Bangle.CLOCK?70:0;
      return setTimeout(Bangle.drawWidgets,1); // widget changed size - redraw
    }
    if (!this.width) return;
    g.reset().setColor("#3ff").drawImage(
      atob("XxPB////AAD///////////////8AAHwf/BgD/g4P8A4AADA/+DAD/AgfwBwAACB/8GAD+BA/APgAAED/4MAD8CB8A/AAAIH/wYAH4EDwD+B/wQP/gwAHwIHAP8D/ggf/BgQHgQAA/4H/BA/+DAwPAgAD/wAACB/8GBgOBAAP/gAAED/4MDgMCAAP/AAAIH/wYHgIEAAP+AAAwP/AwPAQIHAP8AADwH8BgfAAQPAP4H//gAADA/AAgfAHwP//AAAGB/ABA/gHgf//AAAcD+ACB/gHB///AAB4H+AED/gH///////////////4"),
      this.x+8,
      this.y+4
    )
  }
};
