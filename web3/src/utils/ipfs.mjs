import {create} from 'ipfs-http-client';
//import request from "request";

const GATEWAY = "https://gateway.pinata.cloud/";

export async function getLinks(folder_cid) {
    const headers = {
        "Host": "gateway.pinata.cloud",
        "Accept-Encoding": "gzip, deflate, br",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Upgrade-Insecure-Requests": "1",
        "Sec-GPC": "1",
    }

    const ipfs = create({url: GATEWAY, headers: headers});
    const links = [];
    for await (const link of ipfs.ls(folder_cid)) {
        links.push(link);
    }
    return links;
}

// export async function getIpfsImagesWithCaptionsTODO(root_cid, caption_language) {
//     const all_metadata = await getLinks(root_cid);
//     const results = [];
//     for (const metadata of all_metadata) {
//         const name = metadata.name;
//         const cid = metadata.cid;
//         const json_request = `${GATEWAY}/ipfs/${cid.toString()}?filename=${name}`;
//         await request(json_request, function (error, response, body) {
//             if (!error && response.statusCode === 200) {
//                 const json_body = JSON.parse(body);
//                 console.log(json_body.captions.languages[caption_language])
//                 // TODO cat image from ipfs
//                 results.push({
//                     image: metadata.image,
//                     caption: metadata.captions.languages[caption_language]
//                 })
//             } else {
//                 console.log("Error ", response.statusCode);
//             }
//         });
//     }
//     return results;
// }

export function getIpfsImagesWithCaptions() {
    return [{
        "image": "https://i.imgur.com/YV8WFRg.jpeg",
        "caption": "コーヒー",
    },
        {
            "image": "https://i.imgur.com/RDTytPN.jpeg",
            "caption": "アボカド",
        },
        {
            "image": "https://i.imgur.com/3UIHDyj.jpeg",
            "caption": "ぶどう",
        },
        {
            "image": "https://i.imgur.com/hiZ1OqK.jpeg",
            "caption": "レモン",
        },
        {
            "image": "https://i.imgur.com/1rgj9us.jpeg",
            "caption": "さくらんぼ",
        },
        {
            "image": "https://i.imgur.com/VjuN31h.png",
            "caption": "ココナッツ",
        },
        {
            "image": "https://i.imgur.com/2LgSdHh.jpeg",
            "caption": "グレープフルーツ",
        },
        {
            "image": "https://i.imgur.com/xh2p2Tu.jpeg",
            "caption": "パイナップル",
        },
        {
            "image": "https://i.imgur.com/qFqHDj4.jpeg",
            "caption": "いちご",
        },
        {
            "image": "https://i.imgur.com/Ed6cmJ7.jpeg",
            "caption": "マンゴー",
        },
        {
            "image": "https://i.imgur.com/0bb0Ypk.jpeg",
            "caption": "マンゴー",
        },
        {
            "image": "https://i.imgur.com/qSJq8lm.jpeg",
            "caption": "マンゴー",
        }];
}
