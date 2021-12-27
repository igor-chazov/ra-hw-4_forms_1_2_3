export default function convert(hex) {
  const
    r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5), 16);

  return `rgb(${r}, ${g}, ${b})`;
}
