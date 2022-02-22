module.exports = [
	{
		//代理到后台地址
		"/react": {
			target: "http://10.30.10.35:8080",
			changeOrigin: true,
		},
	},
	{
		//代理到mock
		"/mock/*": {
			target: "http://localhost:9090",
			pathRewrite: { "^/mock": "" },
		},
	},
];
