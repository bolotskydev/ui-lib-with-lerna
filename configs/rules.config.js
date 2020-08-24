const autoprefixer = require("autoprefixer");

const rules = [
  {
    exclude: /node_modules/,
    test: /\.module\.scss$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: [
            autoprefixer({
              grid: "autoplace",
            }),
          ],
        },
      },
      "sass-loader",
    ],
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/react"],
      },
    },
  },
  {
    test: /\.inline.svg$/,
    exclude: /node_modules/,
    use: {
      loader: "@svgr/webpack",
    },
  },
  {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: {
      loader: "svg-inline-loader",
      options: {
        limit: 10000,
      },
    },
  },
];

module.exports = rules;
