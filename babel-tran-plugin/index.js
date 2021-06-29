const parser = require('@babel/parser');
const babel = require('@babel/core');// 引入babel核心
const babelranPlugin = require('./babel-tran-plugin');

const sourceCode = `
function func() {
    console.log(2);
}
`;

const ast = parser.parse(sourceCode, {
    sourceType:'unambiguous',
    plugins:['jsx']
})

const { code } = babel.transformFromAst(ast, sourceCode,{
    plugins:[babelranPlugin]
});

console.log(code);