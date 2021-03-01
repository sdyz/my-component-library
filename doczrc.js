// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "React UI 组件库",
  files: ["./src/**/*.{md,markdown,mdx}"],
  ignore: [
    "readme.md",
    "changelog.md",
    "code_of_conduct.md",
    "contributing.md",
    "license.md",
  ], // Default
  typescript: true, // Default false. This option is used if you need to import Typescript components inside your .mdx files.
  port: 8888,
};
