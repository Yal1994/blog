const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require("craco-antd");

const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  // webpack: {
  //   alias: {
  //     '@@': pathResolve('.'),
  //     '@': pathResolve('src'),
  //     '@assets': pathResolve('src/assets'),
  //     '@common': pathResolve('src/common'),
  //     '@components': pathResolve('src/components'),
  //     '@pages': pathResolve('src/pages'),
  //     '@utils': pathResolve('src/utils')
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.less$/,
  //         loader: 'less-loader', // compiles Less to CSS
  //       },
  //     ],
  //   },
  // },
  plugins: [
     /* antd组件按需加载&样式覆盖等 */
     {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          "src/styles/antd.theme.less"
        ),
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          }
        },
        // cssLoaderOptions: {
        //   modules: { localIdentName: "[local]_[hash:base64:5]" },
        // },
        // modifyLessRule: function(lessRule, _context) {
        //   lessRule.test = /\.(module)\.(less)$/;
        //   lessRule.exclude = path.join(__dirname, 'node_modules');
        //   return lessRule;
        // },
      },
    },
   
  ],
};