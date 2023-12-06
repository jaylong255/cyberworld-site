import Article from "components/Article";

const content = `
# Test

## test2
`;

function test() {
  return (
    <Article>
        {content}
    </Article>
  );
}   

export default test;