export default function toComma(e) {
  const parts = e.toString().split('.');
  parts[0] = parts[0].replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}