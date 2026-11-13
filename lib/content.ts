/**
 * All page copy and imagery lives here, typed, so it can be replaced
 * without touching the components. Text is the reference template's
 * placeholder copy.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  /** Intrinsic size of the source file, used for aspect ratio and srcset. */
  width: number;
  height: number;
};

export type LinkItem = { label: string; href: string; external?: boolean };

export type ProjectSummary = {
  slug: string;
  title: string;
  role: string;
  date: string;
  thumbnail: ImageAsset;
};

export type ProjectSection = { heading: string; body: string };

export type Project = ProjectSummary & {
  intro: string;
  livePreview: LinkItem;
  hero: ImageAsset;
  overview: ProjectSection;
  challenge: ProjectSection;
  approach: ProjectSection;
  overviewImage: ImageAsset;
  showcase: [ImageAsset, ImageAsset];
  process: { heading: string; steps: { label: string; text: string }[] };
  outcome: ProjectSection;
  reflection: ProjectSection;
  processImage: ImageAsset;
  /** Image used when this project is shown as the "Next Project" teaser. */
  teaser: ImageAsset;
};

const img = (id: string, alt: string, width: number, height: number, ext = "png"): ImageAsset => ({
  src: `https://framerusercontent.com/images/${id}.${ext}`,
  alt,
  width,
  height,
});

export const site = {
  name: "Noah Elliot",
  shortName: "N.ELLIOT",
  title: "Noah Elliot — Designer & Framer Developer Crafting Digital Experience",
  description:
    "Noah Elliot is a digital designer and Framer developer creating refined, human-centered websites for brands, studios, and startups worldwide.",
  email: "hello@nelliot.com",
  emailHref: "mailto:hello@nelliot.com",
  phone: "+1234567890",
  phoneHref: "tel:+1234567890",
};

export const navLinks: LinkItem[] = [
  { label: "PROJECT", href: "/project" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/contact" },
];

export const socials = {
  instagram: { label: "Instagram", href: "https://instagram.com", external: true },
  twitter: { label: "Twitter (X)", href: "https://x.com", external: true },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
  contra: { label: "Contra", href: "https://contra.com", external: true },
} satisfies Record<string, LinkItem>;

export const footer = {
  kicker: "WANNA WORK WITH ME?",
  cta: { label: "GET IN TOUCH", href: "/contact" } satisfies LinkItem,
  columns: [
    [
      { label: "PROJECTS", href: "/project" },
      { label: "ABOUT", href: "/#about" },
      { label: "CONTACT", href: "/contact" },
    ],
    [
      { ...socials.instagram, label: "INSTAGRAM" },
      { ...socials.twitter, label: "TWITTER (X)" },
      { ...socials.linkedin, label: "LINKEDIN" },
    ],
    [
      { ...socials.contra, label: "CONTRA" },
      { label: site.phone, href: site.phoneHref },
      { label: site.email.toUpperCase(), href: site.emailHref },
    ],
  ] satisfies LinkItem[][],
  wordmark: "NOAH ELLIOT",
  image: img("zMyiTqYUsC7ktnxTgGZXyF4PM", "", 1439, 2567),
};

export const home = {
  hero: {
    image: img("arNJ5YwqONMSdoRgxrY4EhsaMxA", "Portrait in a translucent hood and visor", 1440, 1440),
    heading: "Crafting digital experiences that leave a mark.",
    services: ["Brand Design", "Art Direction", "Web Design", "Web Development", "Digital Strategy"],
    cta: { label: "See my Works", href: "/project" } satisfies LinkItem,
    intro:
      "I’m a web designer and Framer developer who helps brands turn ideas into digital products and experiences that connect. I focus on clean layouts, strong visuals, and motion that gives every interaction meaning.",
    wordmark: "NOAH ELLIOT",
  },
  statement:
    "DESIGN, TO ME, IS NOT DECORATION, IT’S TRANSLATION. IT’S THE BRIDGE BETWEEN WHAT A BRAND BELIEVES AND WHAT PEOPLE FEEL WHEN THEY ENCOUNTER IT. I APPROACH EVERY PROJECT WITH THE SAME MINDSET: REFINE UNTIL ONLY WHAT MATTERS REMAINS.",
  about: {
    label: "Behind the Work",
    image: img("FOX3LZRjYAIZfO0AvyluVt1hRc", "Portrait of Noah Elliot", 1124, 1398),
    paragraphs: [
      "I’m Noah, a web designer and Framer developer focused on crafting experiences that feel modern, simple, and emotionally engaging.",
      "I believe great design should be clear, intuitive, and emotionally engaging. I don’t just make things look good — I help brands express who they are through thoughtful digital experiences.",
      "My process usually starts with understanding the essence of a brand, then translating that into visuals, rhythm, and motion.",
      "When I’m not designing, I’m usually exploring new visual styles, tweaking animations, or helping other creatives refine their online presence.",
    ],
    cta: { label: "Reach Out", href: "/contact" } satisfies LinkItem,
  },
  services: {
    label: "Services",
    cta: { label: "Hire me on Contra", href: socials.contra.href, external: true } satisfies LinkItem,
    image: img("eLT8FMEHTyXNv6I1nGoiE9oGag", "", 1440, 1706),
    items: [
      {
        title: "Brand Identity",
        body: "More than just a logo — I craft bold, purposeful brands built to scale. Strategy, visuals, and systems that help you show up with clarity and confidence.",
      },
      {
        title: "Design & Development",
        body: "I design and build websites that look exceptional and perform flawlessly — using Framer, Webflow, or code — crafted to grow with your brand.",
      },
      {
        title: "Art Direction",
        body: "From visuals to voice, I shape how your brand speaks and shows up across every touchpoint — turning ideas into compelling stories.",
      },
      {
        title: "Digital Strategy",
        body: "Creative direction, alignment, and clarity. I help teams and founders make smarter design decisions and elevate their digital presence.",
      },
    ],
  },
};

export const projectsPage = {
  hero: {
    image: img("Bb2AwNf9npuBbkEARYQlYYvMqEs", "Abstract portrait used as the projects page backdrop", 1440, 1631),
    heading: "Work That Speaks Louder Than Words",
    summary:
      "A collection of projects that explore creativity across web design, branding, and development. Each one shaped by curiosity and a focus on creating something people actually feel.",
    cta: { label: "See Works", href: "#projects" } satisfies LinkItem,
    intro:
      "Here’s a collection of works that define my journey as a designer. From experimental concepts to full brand experiences, each one represents a step toward better, more meaningful digital design.",
    wordmark: "PROJECTS",
  },
};

export const contactPage = {
  image: img("F6tCZLYY2ci2X47HtFEDgrP0Y1c", "", 1440, 900),
  heading: "Let’s build something great together.",
  summary:
    "Have an idea, project, or collaboration in mind? I’d love to hear about it. Tell me what you’re working on — or just say hello.",
  email: site.email,
  cta: { label: "Get in touch", href: site.emailHref } satisfies LinkItem,
  socials: [socials.twitter, socials.linkedin, socials.contra, socials.instagram] satisfies LinkItem[],
};

const livePreview: LinkItem = { label: "Live Preview", href: "https://example.com", external: true };

export const projects: Project[] = [
  {
    slug: "arden-studio",
    title: "Arden Studio",
    role: "BRANDING, DESIGN & DEV",
    date: "MAR ’24",
    thumbnail: img("j2XgmkG3wl850LBVjBsew2Xe4Ww", "Arden Studio website preview", 1392, 795),
    hero: img("j2XgmkG3wl850LBVjBsew2Xe4Ww", "", 1392, 795),
    teaser: img("yOTCG35erHYrT84ZGjel8XxwOLM", "Arden Studio website preview", 1360, 1256),
    intro:
      "Arden is a contemporary architecture studio based in Lagos. They wanted a digital presence that mirrored their approach, clean, functional, and timeless. My goal was to translate their design principles into a digital experience that feels architectural.",
    livePreview,
    overview: {
      heading: "Overview",
      body: "Arden Studio is a boutique architecture firm redefining modern living through balance, form, and light. They approached me to design a digital space that mirrors their philosophy — calm, minimal, and timeless.",
    },
    challenge: {
      heading: "Challenge",
      body: "Their previous site was functional but lacked soul. It didn’t reflect their visual discipline or communicate the intentionality behind their work. The goal was to create a website that felt like stepping inside one of their spaces, serene, precise, and human.",
    },
    approach: {
      heading: "Approach",
      body: "I started by studying their architectural photography and language. Everything revolved around space and stillness. The grid system was designed to breathe, with generous white space and a soft typographic rhythm. I paired neutral tones with subtle motion to evoke the feeling of light shifting through a room.",
    },
    overviewImage: img("KCxSGPI0JwRWivIRDWTEs2IbK8", "Arden Studio overview", 1384, 1600),
    showcase: [
      img("5zJbEheISjkl2hWS335LA1HQGcI", "Arden Studio project showcase", 2784, 1600),
      img("IyYc8S9uOfUZ6Y2szgSCi5SsjbY", "Arden Studio project showcase", 2784, 1600),
    ],
    process: {
      heading: "Process",
      steps: [
        { label: "Discovery", text: "Content audit, competitor research, tone alignment" },
        { label: "Design", text: "Moodboards, wireframes, responsive prototypes in Framer" },
        { label: "Build", text: "Clean, CMS-driven layout with focus on speed and subtle animation using Framer Motion" },
        { label: "Testing", text: "Iterative user feedback to refine interaction and performance" },
      ],
    },
    outcome: {
      heading: "Outcome",
      body: "The result was a site that feels more like a digital gallery than a typical architecture website. Arden Studio saw a 40% increase in client inquiries within the first month, and the new platform became a key visual touchpoint for their brand identity.",
    },
    reflection: {
      heading: "Reflection",
      body: "This project reminded me how simplicity isn’t the absence of design — it’s the result of intention. Every detail, when done right, becomes invisible yet deeply felt.",
    },
    processImage: img("xcILASkG7MeyZL9T7YKQMQuNqY", "Arden Studio process", 1384, 1600),
  },
  {
    slug: "muse-creative",
    title: "Muse Creative",
    role: "DESIGN & DEV",
    date: "SEP ’23",
    thumbnail: img("c5CFZO2f9KHqjz537yoRYB1GTqE", "Muse Creative website preview", 1392, 1847),
    hero: img("yOTCG35erHYrT84ZGjel8XxwOLM", "", 1360, 1256),
    teaser: img("yOTCG35erHYrT84ZGjel8XxwOLM", "Muse Creative website preview", 1360, 1256),
    intro:
      "Muse Creative is a boutique agency specializing in brand identity, digital design, and strategy. They craft distinctive visual experiences that help brands stand out and connect deeply with their audiences.",
    livePreview,
    overview: {
      heading: "Overview",
      body: "Muse Creative is a storytelling-driven digital agency helping brands connect emotionally through design and strategy. They reached out for a full rebrand and website redesign that better captured their evolution from a small design collective to a full creative studio.",
    },
    challenge: {
      heading: "Challenge",
      body: "Their previous site was functional but lacked soul. It didn’t reflect their visual discipline or communicate the intentionality behind their work. The goal was to create a website that felt like stepping inside one of their spaces, serene, precise, and human.",
    },
    approach: {
      heading: "Approach",
      body: "Their identity was inconsistent — the visuals didn’t reflect their narrative-driven approach. They needed a brand system that felt expressive yet professional, and a website that showcased their client work without feeling like a typical agency template.",
    },
    overviewImage: img("Ph6yEmQZcXaQHjxeGOCERkfE", "Muse Creative overview", 1384, 1600, "jpg"),
    showcase: [
      img("1QTUnOX1XNxwRv3t3c50cIgTHk", "Muse Creative project showcase", 2784, 1600),
      img("aJ1kAHsIqG0GAPlQOtxjukDX4kc", "Muse Creative project showcase", 2784, 1600),
    ],
    process: {
      heading: "Process",
      steps: [
        { label: "Brand Discovery", text: "Interviews, tone exploration, competitive analysis" },
        { label: "Visual Direction", text: "Typography, logo, and palette definition" },
        { label: "Website Design", text: "Modular design system for scalability" },
        { label: "Development", text: "Framer CMS build with dynamic case studies and motion sequences" },
      ],
    },
    outcome: {
      heading: "Outcome",
      body: "The rebrand helped Muse reposition itself as a design partner for emotionally intelligent brands. Within weeks of launch, they secured two new long-term retainers and gained recognition from design blogs for their new identity.",
    },
    reflection: {
      heading: "Reflection",
      body: "Muse was one of those rare projects where brand and emotion aligned perfectly. It pushed me to design less like a technician and more like a storyteller.",
    },
    processImage: img("fT6H3j1Lk8TWD9Mz9uLJ56HbOCE", "Muse Creative process", 1384, 1600),
  },
  {
    slug: "neuraframe",
    title: "NeuraFrame",
    role: "VISUAL IDENTITY",
    date: "AUG ’23",
    thumbnail: img("k6u0zzaR5BuMWIUQIqEalbdkc", "NeuraFrame website preview", 1392, 804),
    hero: img("5EDSTtphhp4cwnEiU7Nk7GbYtY", "", 1360, 1256),
    teaser: img("5EDSTtphhp4cwnEiU7Nk7GbYtY", "NeuraFrame website preview", 1360, 1256),
    intro:
      "Neuraframe is a modern real estate agency redefining property presentation with elegance and clarity — blending premium visuals, intuitive design, and effortless navigation to help clients find their dream spaces.",
    livePreview,
    overview: {
      heading: "Overview",
      body: "Neuraframe is an AI startup building human-centered productivity tools. Their goal: make artificial intelligence feel intuitive, ethical, and personal. I was brought on to develop their visual identity and launch website, shaping how users first experience the brand.",
    },
    challenge: {
      heading: "Challenge",
      body: "AI brands often fall into cold, hyper-technical aesthetics. Aero wanted the opposite — a brand that feels approachable, warm, and empowering without losing its credibility.",
    },
    approach: {
      heading: "Approach",
      body: "The foundation of Aero’s identity was built around humanity meets intelligence. I used a balance of geometric structure and soft gradients to reflect technology that feels alive. The website was designed around micro-interactions that respond subtly to user behavior, making every scroll and hover feel intentional.",
    },
    overviewImage: img("U6ggFlcPl4l7Jq4Yh06slwHwTk", "NeuraFrame overview", 1384, 1600),
    showcase: [
      img("zIeO4ZCKsCx3mepFl3X1bmKivI", "NeuraFrame project showcase", 2784, 1600),
      img("IyYc8S9uOfUZ6Y2szgSCi5SsjbY", "NeuraFrame project showcase", 2784, 1600),
    ],
    process: {
      heading: "Process",
      steps: [
        { label: "Brand Discovery", text: "Positioning strategy and tone exploration" },
        { label: "Identity Design", text: "Logo mark, type system, color palette" },
        { label: "UI/UX", text: "Framer prototypes, motion exploration" },
        { label: "Development", text: "Production-ready site using Framer CMS and custom interactions" },
      ],
    },
    outcome: {
      heading: "Outcome",
      body: "The launch generated strong traction, with Aero’s beta sign-ups exceeding expectations by 150% in the first two weeks. Investors noted how “the brand feels unlike any AI company out there.”",
    },
    reflection: {
      heading: "Reflection",
      body: "Neuraframe taught me that innovation doesn’t need to feel robotic. The best technology is invisible — it simply feels right.",
    },
    processImage: img("BzNMA3AMNukrgveFa8gpmxQaIs", "NeuraFrame process", 1384, 1600),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return i >= 0 && i < projects.length - 1 ? projects[i + 1] : undefined;
};
