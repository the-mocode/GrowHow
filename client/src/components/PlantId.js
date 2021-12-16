import * as fs from 'fs'
import axios from "axios";

// const baseURL = ""

// export default function Identify () {

// }



const files = ['../img/photo1.jpg', '../img/photo2.jpg', '../img/photo3.jpg'];

const base64files = files.map(file => fs.readFileSync(file, 'base64'));

const data = {
    api_key: process.env.REACT_APP_API_KEY,
    images: base64files,
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    /* plant details info: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
    plant_details: ["common_names",
        "url",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms"]
};


export function Identify () {
axios.post('https://api.plant.id/v2/identify', data).then(res => {
    console.log('Success:', res.data);
}).catch(error => {
    console.error('Error: ', error)
})

console.log(data)
}