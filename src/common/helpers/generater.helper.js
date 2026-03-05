export function generateOrderCode(id) {
  return `ORD${id.toString().padStart(3, "0")}`;
}