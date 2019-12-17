export default function transformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.Literal)
    .forEach(path => {
      if (path.value.value === "Finland") {
        path.value.value = "Sweden";
      } else if (path.value.value === "Sweden") {
        path.value.value = "Finland";
      }
    })
    .toSource();
}
