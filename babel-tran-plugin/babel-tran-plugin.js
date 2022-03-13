
// 插件
const babelranPlugin = ( {types, template}, options, dirname ) => {
    return {// 返回一个对象
        visitor: {
            CallExpression(path, state) {
                if( types.isMemberExpression(path.node.callee) && path.node.callee.object.name === 'console') {
                    const x = 'this is prompt function';
                    path.node.arguments.unshift(types.stringLiteral(`fii:${x}`));
                }
            }
        }
    }
}

module.exports = babelranPlugin;