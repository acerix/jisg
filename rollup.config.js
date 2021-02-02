import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/jisg.js'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            "presets": [ "@babel/preset-env" ],
            "env": {
                "production": {
                    "presets": ["minify"]
                }
            },
            "plugins": [
                [
                    "@babel/plugin-proposal-class-properties"
                ],
                [
                    "@babel/plugin-transform-runtime"
                ]
            ],
            comments: false,
            "ignore": [],
            "sourceMaps": true,
            "retainLines": true
        })
    ]
}
