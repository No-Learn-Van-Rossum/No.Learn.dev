// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to No.Learn',
  tagline: `Sometimes you'll feel small, like you don't deserve to be here. But you're not less for having doubts or learning differently. You're more for continuing to learn, to share, and to lift others as you go. True greatness isn't about been smarter, but about helping those who feel stuck and even inspiring those ahead of you. And if you grow along the way, then you've already won.`
, 
//A veces te sentirás pequeño, como si no merecieras estar aqui. No eres menos por dudar ni por aprender diferente. Eres más por seguir aprendiendo, compartiendo y levantando a otros mientras avanzas. La verdadera grandeza no es saber más, sino colaborar con quien parece estancado y inspirar incluso a quienes van por delante. Si en ese camino tú también creces, ya habrás ganado.
favicon: 'img/page_icon.png',// top page icon 

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dnis-personal-web-page.web.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'No Learn',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-book.png', //Navbar logo
        },
        items: [
              {
          type: 'localeDropdown',
          position: 'right',
        },
         {
            href: 'https://github.com/No-Learn-Van-Rossum',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Reglas',
          },
          
         
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Python',
                to: '/docs/python',
              },
             {
              label: 'Html - Css',
              to: '/docs/html-and-css',
            },
              {
                label: 'JavaScript',
                to: '/docs/javascript',
              },
            ],
          },
          {
            title: 'Trainer pages',
            items: [
              {
                label: 'CodeWars',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/No-Learn-Van-Rossum',
              },
              {
                  label:'Consejos y Motivaciones',
                  to: '/docs/tutorial-extra'
                },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
