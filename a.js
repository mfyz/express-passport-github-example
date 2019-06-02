const axios = require('axios')

axios({
	url: 'https://api.github.com/gists',
	headers: { "Authorization": `token 3d003a22e907686923144e04805123abf31d14c1` }
})
	.then((response) => {
		// console.log('github api call respnse', response)
		console.log(JSON.stringify(response.data, null, 4))
		// res.render('respositories', { respositories: response.data })
	})
	.catch((err) => {
		console.log('github api call returned with err', err)
	})