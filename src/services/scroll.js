export default function scroll(elemento) {
  const $element = document.getElementById(elemento);
  $element.scrollIntoView({ behavior: "smooth", block: "start" });
}