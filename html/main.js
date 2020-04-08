const Window = {
  cache : [],

  create : function(id, x, y, w, h, title) {
    var x = x + "px";
    var y = y + "px";
    var w = w + "px";
    var h = h + "px";
    document.getElementById("dgs").innerHTML += `
      <div class="dgsWindow" id="window-${id}" style="margin-left: ${x}; margin-top: ${y}; width: ${w}; height: ${h}; min-width: ${w}; min-height: ${h}; max-width: ${w}; max-height: ${h};">
        <div class="title">
          ${title}
        </div>
        <div class="body" id="window-${id}-body">

        </div>
      </div>
    `;
    return id;
  },

  set : function(id, key, value) {
    if (key == "rounded") {
      document.getElementById(`window-${id}`).style += `border-radius: ${value}px;`;
    }
  }
}

const Button = {
  cache : [],

  create : function(id, x, y, w, h, title, parent) {
    var x = x + "px";
    var y = y + "px";
    var w = w + "px";
    var h = h + "px";
    if (parent) {
      document.getElementById(`window-${parent}-body`).innerHTML += `
        <a href="#" class="btn" style="margin-left: ${x}; margin-top: ${y}; width: ${w}; height: ${h};">${title}</a>
      `;
    } else {

    }
    return id;
  }
}

const win = Window.create(1, 100, 250, 500, 500, "Hello DGS");
const btn = Button.create(1, 5, 25, 150, 20, "Test Button", win);
const btn2 = Button.create(2, 5, 75, 150, 20, "Test Button", win);
//Window.set(win, "rounded", 5);
