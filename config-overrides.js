const path = require('path')
const { override, fixBabelImports, addWebpackAlias, addBabelPlugins, adjustStyleLoaders } = require('customize-cra')

module.exports = override(
    ...addBabelPlugins(
        [
        '@babel/plugin-proposal-decorators',
        {
            'legacy': true
        }
        ]
    ),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    }),
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes("scss")) {
            rule.use.push({
                loader: require.resolve("sass-resources-loader"),
                options: {
                    resources: "./src/styles/outcolor.scss"
                }
            });
        }
    })
)