new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true, // Note: only CSS is currently hot reloaded
  publicPath: config.output.publicPath,
  quiet: true,
  proxy: {
        "*": "http://0.0.0.0:8080"
    }
}).listen(8081, '0.0.0.0', function (err, result) {
  if (err) {
      return console.log(err);
    }

  clearConsole();
  console.log(chalk.cyan('Starting the development server...'));
  console.log();
  openBrowser();
});
