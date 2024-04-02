
WIDGETS["punkiologo"]={
  area:"tl",
  width: Bangle.CLOCK?70:0,
  draw: function () {
    if (!Bangle.CLOCK != !this.width) { // if we're the wrong size for if we have a clock or not...
      this.width = Bangle.CLOCK?70:0;
      return setTimeout(Bangle.drawWidgets,1); // widget changed size - redraw
    }
    if (!this.width) return;
    g.reset().setColor(g.theme.dark?"#fff":"#000").drawImage(
      atob("YRDB/wAA//8AAAAAAAAAAAAAAAA//48Aef4H3gP4AAAf/+eAfv8D74P4AAAP//vAPn/B98P4AAAH//3gH7/w++P4AD8D4D7wD5/8fff4PP/x8B94B89+Pv/4Hv/4//+8A+efn3/4D3/+f//eAfPH77/8B74fP//PAPnj/9//A94Pn//nwHzw/++fwe8Hz//D//54P/fH+PfH58AB//88H/vh/nv/4+AAf/8eB/3wP73/8fAAH/8PAf7wD/5/8AAAAAAAAAAAAAAAAA=="),
      this.x+8,
      this.y+4
    )
  }
};
