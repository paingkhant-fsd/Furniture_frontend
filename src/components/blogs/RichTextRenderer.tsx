import Dompurity from "dompurify";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    content: string;
    className?: string;
}
function RichTextRenderer({content, className} : Props) {
    const sanitizedContent = Dompurity.sanitize(content);
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} className={className}/>
  )
}

export default RichTextRenderer