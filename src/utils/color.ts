export function hexToRgb(hex: number) {
  hex = Math.floor(hex as number);
  const r = (hex >> 16) & 255;
  const g = (hex >> 8) & 255;
  const b = hex & 255;
  return [r, g, b];
}

export function hexToRgbNormal(hex: number) {
  const [r, g, b] = hexToRgb(hex);
  return [r / 255, g / 255, b / 255];
}

export const COLOR = {
  hexToRgb,
  hexToRgbNormal,
};
