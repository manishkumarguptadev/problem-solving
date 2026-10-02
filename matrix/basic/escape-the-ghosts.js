function escapeGhosts(ghosts, target) {
  const [targetX, targetY] = target;

  // Calculate player's distance to target (starting from origin [0, 0])
  const playerDistanceToTarget = Math.abs(targetX) + Math.abs(targetY);

  // Check if any ghost can reach the target before or at the same time as the player
  for (const ghost of ghosts) {
    const [ghostX, ghostY] = ghost;

    // Calculate Manhattan distance from current ghost to target
    const ghostDistanceToTarget =
      Math.abs(targetX - ghostX) + Math.abs(targetY - ghostY);

    // If ghost can reach target before or at same time as player, escape is impossible
    if (ghostDistanceToTarget <= playerDistanceToTarget) {
      return false;
    }
  }

  // All ghosts are too far to intercept, player can escape successfully
  return true;
}
