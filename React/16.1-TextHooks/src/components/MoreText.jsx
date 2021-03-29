import React, { useState } from "react";

const MoreText = ({ text, maxLength }) => {
  const [textParagraph, setText] = useState(false);

  const term = () => {
    const linkType = textParagraph ? "Read Less <<<" : "Read More >>>";

    return (
      <div>
        <p className="moreText">{textParagraph ? text : text.slice(0, maxLength)}</p>
        <a
          className="readMoreLink"
          onClick={() => {
            setText(!textParagraph);
          }}
        >
          {linkType}
        </a>
      </div>
    );
  };
  return <div>{term()}</div>;
};

export default MoreText;
