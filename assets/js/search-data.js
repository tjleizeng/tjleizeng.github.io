// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Research themes in transportation AI, simulation, mobility systems, and security.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Journal articles, conference papers, and preprints.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching-amp-service",
          title: "Teaching &amp; Service",
          description: "Teaching, mentorship, reviewing, and professional service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic appointments, education, research leadership, teaching, service, and honors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-completed-the-ph-d-in-transportation-and-infrastructure-systems-engineering-at-purdue-university",
          title: 'Completed the Ph.D. in Transportation and Infrastructure Systems Engineering at Purdue University.',
          description: "",
          section: "News",},{id: "news-started-as-a-postdoctoral-associate-at-purdue-university-s-transportation-cybersecurity-and-resiliency-center",
          title: 'Started as a Postdoctoral Associate at Purdue University’s Transportation Cybersecurity and Resiliency Center....',
          description: "",
          section: "News",},{id: "news-presented-transportation-cybersecurity-a-network-level-perspective-in-the-tracr-scholar-webinar-series",
          title: 'Presented “Transportation Cybersecurity: A Network-Level Perspective” in the TraCR Scholar Webinar Series.',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/ZengxiangLei_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%65%69%36%37@%70%75%72%64%75%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tjleizeng", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://tjleizeng.github.io", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
