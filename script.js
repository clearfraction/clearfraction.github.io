var copyrightHTML = document.querySelector("span#copyright").innerHTML;
var extendedHTML =
  'Created by <a class="footer-link" target="_blank" href="https://github.com/paulcarroty">@paulcarroty</a> using <a class="footer-link" target="_blank" href="https://feathericons.com">feathericons</a>, <a class="footer-link" target="_blank" href="https://github.com/intel/clear-sans">Clear Sans</a>';
var logoHTML =
  'Wallpaper by <a class="footer-link" target="_blank" href="https://www.vecteezy.com/vector-art/2617070-pink-evening-mars-landscape-with-starry-sky-large-planet-on-the-horizon-and-coniferous-forest-cosmic-landscape-with-meteors-in-the-sky-and-a-planets">ddevicee</a>';
var items = [copyrightHTML, extendedHTML, logoHTML];
for (count = 0; count <= 30; count++) {
  (function (count) {
    setTimeout(function () {
      document.querySelector("span#copyright").innerHTML = items[count % 3];
    }, 3000 * count);
  })(count);
}
