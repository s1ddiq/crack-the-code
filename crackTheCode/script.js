function mouseMoved(e) {
  const x = e.clientX;
  const y = e.clientY;

  if (locationEL) {
    locationEL.innerText = `${x}, ${y}`;
  }
  return window.location.hash;
}

document.addEventListener("mousemove", mouseMoved);
