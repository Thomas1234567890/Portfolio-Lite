export const get_width = () => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return vw;
};

export const get_height = () => {
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return vh;
};
////on init
// console.log(`height:${get_height()}`);
// console.log(`width:${get_width()}`);

export function show_size() {
  return `height:${get_height()} width:${get_width()}`;
}

// ////on change
// export default window.addEventListener("resize", function(event) {
//   // Write TypeScript code!
//   console.clear();
//   console.log(`height:${get_height()}`);
//   console.log(`width:${get_width()}`);
// });
