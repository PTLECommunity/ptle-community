import React from "react";
import Logo from "./components/Logo";
import Trophy from "./components/Trophy";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: Logo,
	project: {
		icon: Trophy,
		link: "https://www.speedrun.com/ptle",
	},
	chat: {
		link: "https://discord.gg/CevFbzDBfy",
	},
	docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
	footer: {
		text: "Nextra Docs Template",
	},
};

export default config;
