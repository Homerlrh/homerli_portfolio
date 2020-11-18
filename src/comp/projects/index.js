import p1 from "../../image/project/hbMain.png";
import p2 from "../../image/project/appleMusic.png";
import p3 from "../../image/project/craigslist.png";
import p4 from "../../image/project/Farmily.png";
export const projects = [
	{
		name: "Health Bro",
		description:
			"Meal planning app, base on meal type, dietary restriction and calorie",
		image: p1,
		fe: "ejs, bootstrap 4, bulma ",
		be: "express js, nodeJs",
		db: "mongo atlas",
		api: "Edamam, Spoonacular",
		link: "https://healthbro.herokuapp.com/",
		github: "https://github.com/cee-elle/fswd-agile-final-project",
	},
	{
		name: "Apple music clone",
		description:
			"music web streaming platform, user can upload their own songs",
		image: p2,
		fe: "html, bootstrap 4",
		be: "flask, python3",
		db: "SQlite, S3 bucket-aws",
		api: "lastFM",
		link: "https://github.com/emo8355/apple_music",
		github: "https://github.com/emo8355/apple_music",
	},
	{
		name: "Craigslist redesign",
		description: "A redesign of the current Craigslist",
		image: p3,
		fe: "ejs, bootstrap 4, sass, jQuery, Vanilla JS",
		be: "express js, nodeJs, Socket io",
		db: "MySql, S3 bucket-aws",
		api: "lastFM",
		link: "https://idsp-craigslist-redesign.herokuapp.com/",
		github: "https://github.com/emo8355/IDSP-2020-Team-2077",
	},
	{
		name: "Farmily",
		description: "Platform for farmers to trade products and communicate",
		image: p4,
		fe: "React native, scss",
		be: "Node js",
		db: "Firebase",
		link: "https://expo.io/@apd112/projects/Farmily",
		github: "https://github.com/emo8355/ElephantGarlic-Farmily",
	},
];
