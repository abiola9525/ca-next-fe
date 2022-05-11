// const express = require("express");
// const next = require("next");
// const { createProxyMiddleware } = require("http-proxy-middleware"); //what is this used for?

// const dev = process.env.NODE_ENV != "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app
// 	.prepare()
// 	.then(() => {
// 	const server = express();
// 	// apply proxy in dev mode
// 	if(dev) {
// 		server.use("/api", createProxyMiddleware({
// 			target: "http://localhost:8000",
// 			changeOrigin: true,
// 		}));
// 	}


// 	server.all("*", (req, res) => {
// 		return handle(req, res);
// 	});

// 	server.listen(3000, (err) => {
// 		if(err) throw err;
// 		console.log("> Ready on http://localhost:8000");
// 	})
// })
// .catch((err) => {
// 	console.log("Error", err);
// });

const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});