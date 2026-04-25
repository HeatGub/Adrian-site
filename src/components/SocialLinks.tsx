interface SocialLinkDef {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  links?: SocialLinkDef[];
  className?: string;
  itemClassName?: string;
}

const DEFAULT_LINKS: SocialLinkDef[] = [
  { href: "https://facebook.com", label: "Facebook", icon: <FacebookIcon /> },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  { href: "https://youtube.com", label: "YouTube", icon: <YouTubeIcon /> },
];

export default function SocialLinks({
  links = DEFAULT_LINKS,
  className = "flex items-center gap-5",
  itemClassName = "w-9 h-9 rounded-full border border-(--border-default)/40 flex items-center justify-center text-(--text-secondary) hover:border-(--accent-primary) hover:text-(--accent-primary) transition-all duration-200",
}: SocialLinksProps) {
  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={itemClassName}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="black" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
