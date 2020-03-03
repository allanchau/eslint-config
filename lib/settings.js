export default {
  "import/resolver": {
    node: {
      extensions: [".js", ".jsx"],
    },
  },
  linkComponents: [{ linkAttribute: "href", name: "Link" }],
  react: {
    pragma: "React",
    version: "detect",
  },
};
