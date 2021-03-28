window.addEventListener("load", () => {
  new hoverEffect({
    parent: document.querySelector("#image1"),
    intensity: 0.9,
    image1: "./Images/im1.jpg",
    image2: "./Images/im2.jpeg",
    displacementImage: "./Images/smoke1.jpg",
  });

  new hoverEffect({
    parent: document.querySelector("#image2"),
    intensity: 0.9,
    image1: "./Images/thor1.jpg",
    image2: "./Images/thor2.jpg",
    displacementImage: "./Images/smoke1.jpg",
  });
});
