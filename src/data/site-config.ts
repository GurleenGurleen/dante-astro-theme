export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Gurleen',
    subtitle: 'Data Analyst',
    description: 'portfolio',
    image: {
        src: '/flower.jpg',
        alt: 'flower'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/gurleen01/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/gu.rleen01/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/GurleenGurleen'
        }
    ],
    hero: {
        title: 'Hi, from the another side & Welcome to My home in the internet!',
        text: "I'm **Gurleen**, emerging data analyst with a keen eye for details. I am also an independent artist, web developer and CEO of <a href= 'https://magpiewings.tech/' target='_blank'>**Magpie Digital Wings**</a>",
        
        image: {
            src: '/cloud.jpg',
            alt: 'A Beautiful girl sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
