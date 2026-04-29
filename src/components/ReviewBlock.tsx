type ReviewBlockProps = {
  author: string;
  originalQuote: string;
  translatedQuote?: string;
  className?: string;
  translatedFrom?: string;
  bottomBorder?: boolean;
};

export function ReviewBlock({
  author,
  originalQuote,
  translatedQuote,
  className = "",
  translatedFrom,
  bottomBorder = true,
}: ReviewBlockProps) {
  return (
    <figure
      className={`
        px-2 md:px-8
        text-center
        space-y-4
        py-6 md:py-10
        ${bottomBorder ? "border-b border-(--accent-primary)" : ""}
        ${className}
      `}
    >
      <blockquote
        className={`
          md:text-lg
          leading-relaxed
          tracking-wide
          font-light
          ${translatedQuote ? "italic" : ""}
          ${translatedQuote ? "" : "font-(family-name:--font-secondary)"}  
        `}
      >
        „{originalQuote}”
      </blockquote>

      {translatedQuote && (
        <blockquote
          className="
          md:text-lg
          leading-relaxed
          tracking-wide
          font-(family-name:--font-secondary)
          font-light
        "
        >
          „{translatedQuote}”
        </blockquote>
      )}
      <div
        className={`flex items-center ${translatedFrom ? "justify-between" : "justify-end"}`}
      >
        {translatedFrom && (
          <div
            className="
            text-left
            text-xs md:text-sm
            text-(--text-secondary)
            font-medium
            overflow-hidden
            italic
            pr-1
          "
          >
            ({translatedFrom})
          </div>
        )}
        <figcaption
          className="
          text-right
          text-sm md:text-base
          tracking-[0.12em]
          text-(--text-secondary)
          font-medium
        "
        >
          — {author}
        </figcaption>
      </div>
    </figure>
  );
}
