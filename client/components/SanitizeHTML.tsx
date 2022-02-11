import sanitizeHtml from 'sanitize-html';

interface Props {
  dirtyHtml: string;
  options?: { [key: string]: any };
}

const SanitizeHTML = ({ dirtyHtml, options }: Props) => (
  <div
    dangerouslySetInnerHTML={{
      __html: sanitizeHtml(dirtyHtml, options),
    }}
    className="ck-content"
  />
);

export default SanitizeHTML;
