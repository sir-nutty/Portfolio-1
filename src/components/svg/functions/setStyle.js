export default function setStyle(id, animation, timing) {
  // Sets styling animation for SVG Paths

  const svgPaths = document.querySelectorAll("".concat("#", id, " path")); // Get all SVG Paths
  timing = timing / 10;
  const timingInc = timing;

  for (let i = 0; i < svgPaths.length; i++) {
    const svgLength = svgPaths[i].getTotalLength() + "px"; // Get length of the path
    var svgAnimation = animation;

    svgPaths[i].style.strokeDasharray = svgLength;
    svgPaths[i].style.strokeDashoffset = svgLength;

    if (i > 0) {
      // Skip first path
      if (i > 1) timing = timing + timingInc; // Increment timing after second path

      svgAnimation = svgAnimation + " " + timing + "s";
    }

    svgPaths[i].style.animation = svgAnimation;
  }
}
