export default function checkPlayersHealts(player) {
  if (player.health > 50) {
    return 'healthy';
  }
  if (player.health <= 50 && player.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
