import themes from "daisyui/src/theming/themes";

const config = {
  appName: "Minimal Market",
  appDescription:
    "A collection of digital minimalist tools to help you reduce distractions and increase productivity.",
  domainName: "minimalmarket.app",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `GoodMornin <noreply@mg.minimalmarket.app>`,
    fromAdmin: `Matt at GoodMornin <matt@mg.minimalmarket.app>`,
    supportEmail: "matt@mg.minimalmarket.app",
    forwardRepliesTo: "matthewtiti@gmail.com",
  },
  colors: {
    theme: "dark",
    main: themes["light"]["primary"],
    toast: "#eab308",
  },
  googleAnalyticsId: "",
  screenTimeProjects: [
    {
      id: 1,
      name: "RescueTime",
      tagline: "Understand your habits",
      picture: "/rescue/rescuetime_logo.jpeg",
      images: [
        "/features-2.png",
        "/features-2.png",
        "/features-2.png",
        "/features-2.png",
        "/features-2.png",
      ],
      description: [
        "Tracks app and website usage to reduce screen time",
        "Provides detailed reports and insights",
        "Helps you set goals and improve productivity",
        "Works across multiple devices",
      ],
      types: ["Web", "Mobile"],
      siteUrl: "https://www.rescuetime.com",
    },
    {
      id: 2,
      name: "Freedom",
      tagline: "Limit digital distractions everywhere",
      picture: "/freedom/freedom_app_logo.webp",
      description: [
        "Blocks distracting websites and apps across all your devices",
        "Customizable blocklists and schedules",
        "Syncs across multiple platforms",
        "Helps you stay focused and productive",
      ],
      types: ["Mobile", "Web", "Extension"],
      siteUrl: "https://freedom.to",
    },
    {
      id: 3,
      name: "Forest",
      tagline: "Grow your focus, one tree at a time",
      picture: "/forest/forest_logo.png",
      description: [
        "Encourages you to stay off your phone by planting virtual trees",
        "Trees grow as you stay focused",
        "Withered trees if you leave the app prematurely",
        "Contributes to real-world reforestation initiatives",
      ],
      types: ["Mobile"],
      siteUrl: "https://www.forestapp.cc",
    },
    {
      id: 4,
      name: "Stay Focused",
      tagline: "Block apps that drain your time",
      picture: "/stay/stay_focused_logo.png",
      description: [
        "Helps you block apps and websites that waste your time",
        "Set daily usage limits for specific apps",
        "Prevents access to apps once you've exceeded your limit",
        "Customizable blocking schedules",
      ],
      types: ["Mobile"],
      siteUrl: "https://play.google.com/store/apps/details?id=com.stayfocused",
    },
    {
      id: 5,
      name: "Flipd",
      tagline: "Stay motivated with community support",
      picture: "/flipd/flipd_logo.png",
      description: [
        "Offers productivity tracking and motivational content",
        "Join productivity challenges with others",
        "Community-driven app for staying focused",
        "Share your progress with like-minded users",
      ],
      types: ["Mobile"],
      siteUrl: "https://www.flipdapp.co",
    },
  ],
  productivityProjects: [
    {
      id: 6,
      name: "Todoist",
      tagline: "Master task management effortlessly",
      picture: "/todoist/todoist_logo.png",
      description: [
        "Popular task management tool for individuals and teams",
        "Features include due dates, labels, and recurring tasks",
        "Keeps you on top of your workload across devices",
        "Integrates with many other productivity tools",
      ],
      types: ["Mobile", "Web"],
      siteUrl: "https://todoist.com",
    },
    {
      id: 7,
      name: "Notion",
      tagline: "Your all-in-one workspace",
      picture: "/notion/notion_logo.webp",
      description: [
        "Versatile productivity tool for notes, documents, and projects",
        "Customizable templates for every need",
        "Perfect for personal use or team collaboration",
        "Combines multiple tools into one platform",
      ],
      types: ["Web"],
      siteUrl: "https://notion.so",
    },
    {
      id: 8,
      name: "Trello",
      tagline: "Visualize your workflow with ease",
      picture: "/trello/trello_logo.png",
      description: [
        "Uses a Kanban-style board system for task organization",
        "Create boards for different projects",
        "Add cards for tasks and move them through custom workflows",
        "Offers clear visual task management",
      ],
      types: ["Web"],
      siteUrl: "https://trello.com",
    },
    {
      id: 9,
      name: "Be Focused",
      tagline: "Boost productivity with timed intervals",
      picture: "/focused/befocused_logo.webp",
      description: [
        "Pomodoro timer app for focused work intervals",
        "Track your progress and manage tasks",
        "Set up personalized work/rest cycles",
        "Helps maximize productivity through structured time management",
      ],
      types: ["Mobile"],
      siteUrl: "https://xwavesoft.com/be-focused-for-ios.html",
    },
    {
      id: 10,
      name: "Habitica",
      tagline: "Turn productivity into a game",
      picture: "/habitica/habitica-logo.png",
      description: [
        "Gamifies your daily tasks and to-dos",
        "Complete tasks to earn rewards and level up your avatar",
        "Adds a fun, engaging element to productivity",
        "Join guilds and participate in challenges with other users",
      ],
      types: ["Web", "Mobile"],
      siteUrl: "https://habitica.com",
    },
  ],
  replacementProjects: [
    {
      id: 11,
      name: "GoodMornin",
      tagline: "Start your day informed, not distracted",
      picture: "/goodmornin/gm-icon.png",
      description: [
        "Sends a daily text with the most important news and information",
        "Includes weather, sports, and other customizable content",
        "Provides a concise summary to start your day",
        "Reduces the need for endless scrolling through social media",
      ],
      types: ["Web"],
      siteUrl: "https://goodmornin.app",
    },
    {
      id: 12,
      name: "Pocket",
      tagline: "Curate and save content for later",
      picture: "/pocket/pocket-logo.webp",
      description: [
        "Save articles, videos, and web content to view later",
        "Eliminates distractions by allowing you to focus on current tasks",
        "Provides flexibility to consume content when you have time",
        "Offers offline reading and content recommendations",
      ],
      types: ["Mobile", "Web"],
      siteUrl: "https://getpocket.com",
    },
    {
      id: 13,
      name: "Cold Turkey",
      tagline: "Take drastic action against distractions",
      picture: "/cold/cold_logo.png",
      description: [
        "Powerful tool for blocking distractions",
        "Block specific apps, websites, or your entire device",
        "Set schedules for focused work periods",
        "Offers strict blocking options for serious productivity",
      ],
      types: ["Desktop"],
      siteUrl: "https://getcoldturkey.com",
    },
    {
      id: 14,
      name: "LeechBlock",
      tagline: "Set limits on distracting websites",
      picture: "/leech/leech_logo.jpg",
      description: [
        "Browser extension to block time-wasting websites",
        "Fully customizable blocking periods",
        "Set different rules for different times of day",
        "Helps control how long and when you can access distracting sites",
      ],
      types: ["Extension"],
      siteUrl:
        "https://chromewebstore.google.com/detail/leechblock-ng/blaaajhemilngeeffpbfkdjjoefldkok?hl=en",
    },
    {
      id: 15,
      name: "BlockSite",
      tagline: "Keep distractions out of sight",
      picture: "/block/block_logo.jpeg",
      description: [
        "Prevents access to distracting websites and apps",
        "Features include scheduling and custom blocklists",
        "Works across multiple platforms",
        "Ideal solution for increasing productivity",
      ],
      types: ["Extension"],
      siteUrl: "https://blocksite.co",
    },
    {
      id: 16,
      name: "InboxWhenReady",
      tagline: "Control when you check your email",
      picture: "/inbox/inbox_logo.png",
      description: [
        "Hides your Gmail inbox until you're ready to check it",
        "Reduces the urge to constantly check email",
        "Helps you focus on work instead of inbox management",
        "Customizable settings for inbox visibility",
      ],
      types: ["Extension"],
      siteUrl: "https://inboxwhenready.org",
    },
    {
      id: 17,
      name: "Streaks",
      tagline: "Build lasting, positive habits",
      picture: "/streaks/streaks_logo.jpg",
      description: [
        "Helps you develop and maintain healthy habits",
        "Daily tracking and reminders for your goals",
        "Clean and intuitive interface",
        "Motivates you by building streaks as you complete daily tasks",
      ],
      types: ["Mobile"],
      siteUrl: "https://streaksapp.com",
    },
  ],
};

export default config;
