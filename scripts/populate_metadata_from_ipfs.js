/** Only used for prototyping and testing. */
import {getLinks} from '../web3/src/utils/ipfs.mjs'
import * as fs from 'fs';
import {homedir} from 'os';
import {join} from 'path';

const links = await getLinks("QmRqcTyPLu2PCfAwQEZN121myWEYpb5E5udKLygBYYUVVL", "https://dweb.link/api/v0")

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

    const out_dir = join(homedir(), "metadata-out");
    if (fs.existsSync(out_dir)) {
        fs.rmSync(out_dir, {recursive: true})
    }
    fs.mkdirSync(out_dir)
    const filename = join(homedir(), "metadata-out", `${name}_metadata.json`)
    try {
        fs.unlinkSync(filename);
    } catch (e) {}

    fs.writeFileSync(filename, JSON.stringify(JSON.parse(json_template), null, 2));
}
