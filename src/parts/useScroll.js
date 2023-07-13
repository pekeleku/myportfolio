export function handleScroll(ref) {
  if (!ref.current) return;
  ref.current.scrollIntoView({ behavior: "smooth" });
}
