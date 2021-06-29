const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');
// 单独测试的babel插件
const sourceCode = `
function func() {
    console.log(2);
}
`;

const ast = parser.parse(sourceCode, {
    sourceType:'unambiguous',
    plugins:['jsx']
});

traverse(ast, {
    CallExpression(path, state) {
        if( types.isMemberExpression(path.node.callee) && path.node.callee.object.name === 'console') {
            const x = 'this is babel-demo';
            path.node.arguments.unshift(types.stringLiteral(`fii:${x}`));
        }
    }
})

const {code, map} = generate(ast);
console.log(code);