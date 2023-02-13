import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const renderRichText = (text) => {
  const parsedRichText = documentToHtmlString(text);

  const styledRichText = parsedRichText.replace(
    "<ul>",
    "<ul style='list-style-type: circle;'>"
  );

  return styledRichText;
};
