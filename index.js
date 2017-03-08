const FileSystem = require('fs');

const opts = {
    file: '',
    prepend: '',
    append: '',
};

function HashOut(options) {
    Object.assign(opts, options);
}

HashOut.prototype.apply = (compiler) => {
    compiler.plugin('done', (data) => {
        if (!opts.file || data.errors) {
            return;
        }

        FileSystem.writeFileSync(
            opts.file,
            `${opts.prepend}${data.hash}${opts.append}`
        );

        console.log(`HashOut: Wrote hash to "${opts.file}"`);
    });
};

module.exports = HashOut;
