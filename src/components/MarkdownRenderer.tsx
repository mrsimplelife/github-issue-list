import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

type MarkdownRendererProps = {
  content: string;
};
function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default MarkdownRenderer;
