/** @format */

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
                debug: false,
                targets: {
                    node: 'current',
                    browsers: ['> 8%', 'last 2 versions', 'not ie <= 8']
                },
                modules: false
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3,
                helpers: true
            }
        ],
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ],
        [
            '@babel/plugin-proposal-class-properties',
            {
                loose: true
            }
        ],
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
            }
        ],
        process.env.NODE_ENV === 'development' && 'react-refresh/babel'
    ].filter(Boolean),
    sourceMaps: true
};
