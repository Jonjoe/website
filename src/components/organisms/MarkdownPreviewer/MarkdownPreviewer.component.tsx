import React from "react";
import ReactMarkdown from "react-markdown";

import * as Styled from "./MarkdownPreviewer.styles"

interface MarkdownPreviewerProps {
  content: any;
}

function MarkdownPreviewer(props: MarkdownPreviewerProps): JSX.Element {
  const { content } = props;

  return (
    <Styled.Container>
      <ReactMarkdown source={content} />
    </Styled.Container>
  );
}

export default MarkdownPreviewer as React.FC<MarkdownPreviewerProps>;
