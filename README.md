# hashout-webpack-plugin
Output the build hash from your Webpack builds to a file. 
Configure the file being written to and automatically append or prepend strings.

##Usage
```
const HashOut = require('hashout-webpack-plugin');
...
config.plugins.push(
    new HashOut({
        file: 'dist/hash',
        prepend: '{ hash: "',
        append: '" }',
    })
);

```