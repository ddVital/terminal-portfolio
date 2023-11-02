import React from "react";
import { csharpIcon, djangoIcon, htmlIcon, jsIcon, nodeJsIcon, pythonIcon, reactIcon } from "./Icons";

// Create a mapping of skill names to icon components
const skillIcons = {
  django: djangoIcon(),
  js: jsIcon(),
  html: htmlIcon(),
  csharp: csharpIcon(),
	react: djangoIcon(), // reactIcon,
	node: djangoIcon(), // nodejsIcon,
	express: djangoIcon(), // expressIcon,
	mongoDB: djangoIcon(), // mongodbIcon,
	python: djangoIcon(), // pythonIcon,
	django: djangoIcon(), // djangoIcon(),
	ruby: djangoIcon(), // railsIcon,
	vue: djangoIcon(), // vueIcon,
	angular: djangoIcon(), // angularIcon,
	sass: djangoIcon(), // sassIcon,
	bootstrap: djangoIcon(), // bootstrapIcon,
	git: djangoIcon(), // gitIcon,
	webpack: djangoIcon(), // webpackIcon,
	graphql: djangoIcon(), // graphqlIcon,
	rest: djangoIcon(), // restApiIcon,
	sQL: djangoIcon(), // sqlIcon,
	firebase: djangoIcon(), // firebaseIcon,
	heroku: djangoIcon() //herokuIcon,
};

export default function SkillIcon({ skillName }) {
  const IconComponent = skillIcons[skillName];

	switch (skillName) {
		case skillName === 'html':
			return htmlIcon();
			break;
		case skillName === 'js':
			return jsIcon();
			break;
		case skillName === 'csharp':
			return csharpIcon();
			break;
		case skillName === 'react':
			return reactIcon();
			break;
		case skillName === 'node.js':
			return nodeJsIcon();
			break;
		case skillName === 'expressIcon':
			return djangoIcon();//expressIcon();
			break;
		case skillName === 'mongodbIcon':
			return djangoIcon();//mongodbIcon();
			break;
		case skillName === 'pythonIcon':
			return pythonIcon();
			break;
		case skillName === 'djangoIcon':
			return djangoIcon();
			break;
		case skillName === 'railsIcon':
			return djangoIcon();// railsIcon();
			break;
		case skillName === 'vueIcon':
			return djangoIcon();// vueIcon();
			break;
		case skillName === 'angularIcon':
			return djangoIcon();// angularIcon();
			break;
		case skillName === 'sassIcon':
			return djangoIcon();// sassIcon();
			break;
		case skillName === 'bootstrapIcon':
			return djangoIcon();// bootstrapIcon();
			break;
		default:
			return pythonIcon();
			break;
	}
  // if (IconComponent) {
  //   // return <IconComponent />;
  //   return jsIcon();
  // } else {
  //   return djangoIcon(); // Or return a default icon if no match found
  // }
}
