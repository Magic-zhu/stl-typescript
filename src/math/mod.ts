// compute euclidean modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
export function euclideanModulo(n, m) {
  return ((n % m) + m) % m
}
