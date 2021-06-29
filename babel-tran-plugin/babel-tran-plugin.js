

const babelranPlugin = ( {types, template}, options, dirname ) => {
    return {
        visitor: {
            CallExpression(path, state) {
                if( types.isMemberExpression(path.node.callee) && path.node.callee.object.name === 'console') {
                    const x = 'this is babel';
                    path.node.arguments.unshift(types.stringLiteral(`fii:${x}`));
                }
            }
        }
    }
}

module.exports = babelranPlugin;