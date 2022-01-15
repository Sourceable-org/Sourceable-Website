import {earthquake_json_data}  from './Constants.mjs';

import fs from 'fs';
import util from 'util';

const random_data = [
	{
		url: 'https://d2lo9qrcc42lm4.cloudfront.net/Images/News/_contentLarge/Child-rescued-after-attack-in-Eastern-Ghouta.jpg?mtime=20180111134738',
		type: 'photo'
	},
	{
		url: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F06d8c51c-59a9-11ea-abe5-8e03987b7b20?fit=scale-down&source=next&width=700',
		type: 'photo'
	},
	{
		url: 'https://drive.google.com/file/d/1c-5al6HbqXZqbmZCkuEhFdJG66cbN-gH/view?usp=sharing',
		type: 'video'
	},
	{
		url: 'https://drive.google.com/file/d/1MXLC6biiWp5bV38rgu5fx-jd1fOxrXlK/view?usp=sharing',
		type: 'video'
	}
]

for (let i = 0; i < earthquake_json_data['features'].length; i++) {
	const random_index = Math.floor(Math.random() * 100) % 4;
	earthquake_json_data['features'][i]['properties']['file'] = random_data[random_index]
}

fs.writeFileSync('Data.js', util.inspect(earthquake_json_data, {showHidden: true, depth: 4, maxArrayLength: 10000}), 'utf-8')

console.log(util.inspect(earthquake_json_data, {showHidden: true, depth: 4, maxArrayLength: 10000}))