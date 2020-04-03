import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownPreviewerProps {
  content: any;
}

function MarkdownPreviewer(props: MarkdownPreviewerProps): JSX.Element {
  const { content } = props;
  return <ReactMarkdown source={content} />;
}

export default MarkdownPreviewer as React.FC<MarkdownPreviewerProps>;
