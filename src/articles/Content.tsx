import Markdown from 'react-markdown';


const markdown = `
# Test

## test2
`;

function Content() {
  return (
    <Markdown>
      {markdown}
    </Markdown>
  );
}

export default 
Content;
