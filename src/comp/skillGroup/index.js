function importAll(r) {
	return r.keys().map(r);
}

export const skillArray = [
	{
		name: "Front-End",
		images: importAll(
			require.context("../../image/fe", false, /\.(png|jpe?g|svg)$/)
		),
	},
	{
		name: "CSS",
		images: importAll(
			require.context("../../image/css", false, /\.(png|jpe?g|svg)$/)
		),
	},
	{
		name: "Back-End",
		images: importAll(
			require.context("../../image/be", false, /\.(png|jpe?g|svg)$/)
		),
	},
	{
		name: "Other languages",
		images: importAll(
			require.context("../../image/other", false, /\.(png|jpe?g|svg)$/)
		),
	},
	{
		name: "Database",
		images: importAll(
			require.context("../../image/db", false, /\.(png|jpe?g|svg)$/)
		),
	},
	{
		name: "Web Hosting",
		images: importAll(
			require.context("../../image/wh", false, /\.(png|jpe?g|svg)$/)
		),
	},
];
