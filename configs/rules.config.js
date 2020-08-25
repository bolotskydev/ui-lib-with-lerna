const autoprefixer = require("autoprefixer");
const path = require("path");

const rules = [
  {
    test: /\.module\.scss$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          import: true,
          modules: {
            localIdentName: "[path][name]__[local]",
          },
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
      {
        loader: "sass-loader",
        options: {
          sassOptions: {
            includePaths: path.resolve(__dirname, "../styles"),
          },
        },
      },
      {
        loader: "sass-resources-loader",
        options: {
          resources: path.resolve(__dirname, "../styles/styles.scss"),
        },
      },
    ],
  },
  {
    test: /\.scss$/,
    exclude: /\.module.(scss)$/,
    include: path.resolve(__dirname, "../"),
    use: [
      "style-loader",
      {
        loader: "css-loader",
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
      {
        loader: "sass-loader",
        options: {
          sassOptions: {
            includePaths: path.resolve(__dirname, "../styles"),
          },
        },
      },
      "resolve-url-loader",
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
    use: {
      loader: "@svgr/webpack",
    },
  },
  {
    test: /\.svg$/,
    use: {
      loader: "svg-inline-loader",
      options: {
        limit: 10000,
      },
    },
  },
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    use: [{ loader: "file-loader?name=[name].[ext]" }],
    include: path.resolve(__dirname, "../fonts"),
  },
];

module.exports = rules;
