module.exports = {
	plugins: [
		require('precss'),
		require('postcss-cssnext'), //cssnext 中已经包含了 Autoprefixer
        //require('autoprefixer')
    ]
}