const size = {
  xs: "320px",
  sm: "768px",
  lg: "1200px",
};

export default function (key, css) {
  return `@media only screen and (min-width: ${size[key]}) { ${css} }`;
}
