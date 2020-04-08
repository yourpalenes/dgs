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
    return `window-${id}-body`;
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
    var importer = "dgs";
    if (parent) {
      importer = `${parent}`;
    }
    document.getElementById(importer).innerHTML += `
      <a href="#" class="btn" style="margin-left: ${x}; margin-top: ${y}; line-height: ${h}; width: ${w}; height: ${h};"><p>${title}</p></a>
    `;
    return id;
  }
}

const Edit = {
  cache : [],

  create : function(id, x, y, w, h, val, parent) {
    var x = x + "px";
    var y = y + "px";
    var w = w + "px";
    var h = h + "px";
    var value = val.value;
    var placeholder = val.placeholder;
    if (parent) {
      document.getElementById(`${parent}`).innerHTML += `
        <input value="${value}" placeholder="${placeholder}" class="edit" style="margin-left: ${x}; margin-top: ${y}; width: ${w}; height: ${h};">
      `;
    } else {

    }
  }
}

const Memo = {
  cache : [],

  create : function(id, x, y, w, h, val, parent) {
    var x = x + "px";
    var y = y + "px";
    var w = w + "px";
    var h = h + "px";
    var value = val.value;
    var placeholder = val.placeholder;
    if (parent) {
      document.getElementById(`${parent}`).innerHTML += `
        <textarea class="textarea" style="resize: none; margin-left: ${x}; margin-top: ${y}; width: ${w}; height: ${h};">
      `;
    } else {

    }
  }
}

function dgsCreateWindow(id, x, y, w, h, text) {
  return Window.create(id, x, y, w, h, text);
}

function dgsCreateButton(id, x, y, w, h, text, parent) {
  return Button.create(id, x, y, w, h, text, parent);
}

window.addEventListener('DOMContentLoaded', (event) => {
    mta.triggerEvent("dgsViewerDomLoad");
});

//const win = Window.create(1, 100, 250, 500, 500, "Hello DGS");
//const btn = Button.create(1, 5, 25, 150, 40, "Test Button", win);
//const btn2 = Button.create(2, 165, 25, 150, 40, "Test Button", win);
//const edit = Edit.create(1, 5, 75, 200, 30, {placeholder: "Username", value: ""}, win);
//const memo = Memo.create(1, 5, 115, 400, 90, {placeholder: "Textarea", value: ""}, win);

//Window.set(win, "rounded", 5);
