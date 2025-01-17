const { readFileSync } = require('fs');
const { src, dest } = require("gulp");
const revRewrite = require("gulp-rev-rewrite");
const projectPath = require("../../lib/projectPath");

function updateHtml(cb) {
	// 4) Update asset references in HTML
	const manifest = readFileSync(projectPath(PATH_CONFIG.dest, "rev-manifest.json"));
	return src(projectPath(PATH_CONFIG.dest, PATH_CONFIG.html.dest, "**/*.html"))
		.pipe(revRewrite({
			manifest
		}))
		.pipe(dest(file => file.base));
}

module.exports = updateHtml;
