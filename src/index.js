import("@dimforge/rapier3d").then((RAPIER) => {
  let gravity = new RAPIER.Vector3(0.0, -9.81, 0.0);
  let world = new RAPIER.World(gravity);

  // Game loop. Replace by your own game loop system.
  let gameLoop = () => {
    world.step();
    setTimeout(gameLoop, 16);
  };

  gameLoop();
});
