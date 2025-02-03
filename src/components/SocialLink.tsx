declare const fathom: {
  trackEvent: (eventName: string, data?: object) => void;
};

import LinkedIn from "@/icons/LinkedIn";
import Email from "@/icons/Email";
import CircleMask from "@/components/CircleMask";

type IconType = "linkedin" | "email"

const icons = {
  linkedin: <LinkedIn />,
  email: <Email />,
}

type SocialLinkProps = {
  title: string
  href: string
  icon: IconType
}

export default function SocialLink({ title, href, icon }: SocialLinkProps) {
  const trackEvent = () => {
    if (typeof fathom === 'undefined') {
      return;
    }

    fathom.trackEvent(`${title} click`, {
      title,
      href,
    })
  }

  return (
    <a
      className="flex items-center relative justify-center h-[76px] w-[76px] rounded-full bg-gradient-to-b from-[#3A414C] to-[#444C59] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group"
      href={href}
      onClick={trackEvent}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{title}</span>
      {icons[icon]}
      <CircleMask
        size={76}
        borderWidth={2}
        color="#2C2F36"
        className="absolute -bottom-1 -left-1 pointer-events-none group-focus:opacity-0"
      />
    </a>
  )
}
