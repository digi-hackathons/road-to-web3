import {create} from 'ipfs-http-client';

export async function getLinks(folder_cid, gateway = "https://gateway.pinata.cloud/") {
    const ipfs = create({url: gateway})
    const links = []
    for await (const link of ipfs.ls(folder_cid)) {
        links.push(link);
    }
    return links
}

export async function getIpfsImagesWithCaptions(root_cid, caption_language) {
    const all_metadata = await getLinks(root_cid);
    const results = [];
    for (const metadata of all_metadata) {
        results.push({
            image: metadata.image,
            caption: metadata.captions.languages[caption_language]
        })
    }
    return results;
}

export function getFakeIpfsImagesForTesting() {
    return [{
        "image": "https://images.unsplash.com/photo-1629567508174-f59400e6d329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80",
        "caption": "コーヒー"
    },
        {
            "image": "https://images.unsplash.com/photo-1612506266679-606568a33215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "caption": "アボカド"
        },
        {
            "image": "https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "caption": "ココナッツ"
        }];
}
