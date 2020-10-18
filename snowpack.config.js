module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  installOptions: {
    rollup: {
      plugins: [require("@rollup/plugin-wasm")()],
    },
  },
  // plugins: ["snowpack-plugin-wasm"],
};
