function openLauncher() {
  var win = window.open()
  var url = "https://whyisthesheep.github.io/"
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
