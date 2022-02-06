/** Only used for prototyping and testing. */
import {create} from 'ipfs-http-client';
import * as fs from 'fs';

async function getLinks(ipfsPath) {
    const url = 'https://gateway.pinata.cloud/'
    const ipfs = create({url})
    const links = []
    for await (const link of ipfs.ls(ipfsPath)) { links.push(link) }
    console.log(links)
    return links
}

const links = await getLinks("QmRqcTyPLu2PCfAwQEZN121myWEYpb5E5udKLygBYYUVVL")

for (const l of links) {
    const name = l.name.replace(/\.[^/.]+$/, "");
    const cid = l.cid;
    const json_template = `{
        "captions": {
            "languages": {
                "portuguese": "x",
                "japanese": "x",
                "english": "${name}"
            }
        },
        "image": "ipfs://${cid}/${name}"
    }`;
    console.log(json_template)

    const filename = `./metadata-out/${name}_metadata.json`;
    try {
        fs.unlinkSync(filename);
    }
    catch (e) {}

    fs.writeFileSync(filename, JSON.stringify(JSON.parse(json_template),null,2));
}
