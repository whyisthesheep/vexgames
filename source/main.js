function openLauncher() {
  var win = window.open()
  var url = "incognito-old.whyisthesheep.repl.co/"
  var iframe = win.document.createElement('iframe')
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = url
  win.document.body.appendChild(iframe)
}
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
