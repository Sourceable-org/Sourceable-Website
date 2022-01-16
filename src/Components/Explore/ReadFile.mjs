// this file has a script to modify the object properties for the Data.js file
// Used for development purpose only

import {incidents_json_data}  from './Constants.mjs';

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
		url: 'https://firebasestorage.googleapis.com/v0/b/sourcable-34a9c.appspot.com/o/Videos%2FDozens%20Killed%20After%20Bomb%20Blast%20Outside%20Kabul%20High%20School%20_%20NBC%20News(480P).mp4?alt=media&token=ca960abd-860f-4680-8dec-28832c170738',
		type: 'video'
	},
	{
		url: 'https://firebasestorage.googleapis.com/v0/b/sourcable-34a9c.appspot.com/o/Videos%2FAfghanistan%20attack_%20Kabul%20airport%20suicide%20bombs%20kill%20dozens(480P).mp4?alt=media&token=d5208ea4-15d4-4738-9ebe-ac79886355d2',
		type: 'video'
	}
]

for (let i = 0; i < incidents_json_data['features'].length; i++) {
	const random_index = Math.floor(Math.random() * 100) % 4;
	incidents_json_data['features'][i]['properties']['file'] = random_data[random_index]
}

fs.writeFileSync('Data.js', util.inspect(incidents_json_data, {showHidden: true, depth: 4, maxArrayLength: 10000}), 'utf-8')

console.log(util.inspect(incidents_json_data, {showHidden: true, depth: 4, maxArrayLength: 10000}))