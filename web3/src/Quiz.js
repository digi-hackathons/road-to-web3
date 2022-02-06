import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import "./css/Quiz.css"
import iota from "iota-array";
import Web3 from 'web3';
import LoadLingoStorage from "./contracts/lingostorage";
import { getIpfsImagesWithCaptions, getMockImages } from "./utils/ipfs.mjs"
import { shuffleArray } from "./utils/array_utils"

function Continue(props, setSelected, setChecked) {
    if (props.step < props.steps - 1) {
        props.setStep(props.step + 1)
        setSelected()
        setChecked(false)
    }


}

function Next(props) {
    if (props.step < props.steps - 1) {
        props.setStep(props.step + 1)
    } else {
        props.setInQuiz(false)
        props.setStep(0)
    }

}


function borderColor(selected, index, checked, imagesOrder, testOrder, currentStep) {
    if (selected === index) { // Se foi Selecionado
        if (checked) { // Se a validação ja foi ativada
            if (imagesOrder[index] === testOrder[currentStep]) //Se está correto
            {
                return "right-choice"
            } else { //Se estiver incorreto
                return "wrong-choice"
            }
        } else {
            return "active"
        }
    } else {
        return "border"
    }
}


function checkButton(selected, checked, props, setSelected, setChecked) {

    if (selected !== undefined) {
        if (checked) {
            if (props.step === 2) {
                window.location.href = "/reward";
            } else {
                Continue(props, setSelected, setChecked)
            }
        } else {
            setChecked(true)
        }
    }

}


function Challange(props) {
    const [selected, setSelected] = useState();
    const [checked, setChecked] = useState(false);


    return <div className="main">
        <Navbar nickname={props.nickname} wallet={props.wallet} setWallet={props.setWallet}/>
        <div className="challange">
            <div className="block">
                <div className="name">Which is {props.images[props.testOrder[props.step]].caption}</div>
                <div className="options">
                    <div className="image" onClick={checked ? {} : () => setSelected(0)}>
                        <div className={borderColor(selected, 0, checked, props.order, props.testOrder, props.step)}>
                            <img src={props.images[props.order[0]].image}/>
                        </div>

                        <div className="response"></div>
                    </div>
                    <div className="image" onClick={checked ? {} : () => setSelected(1)}>
                        <div className={borderColor(selected, 1, checked, props.order, props.testOrder, props.step)}>
                            <img src={props.images[props.order[1]].image}/>
                        </div>

                        <div className="response"></div>
                    </div>
                    <div className="image" onClick={checked ? {} : () => setSelected(2)}>
                        <div className={borderColor(selected, 2, checked, props.order, props.testOrder, props.step)}>
                            <img src={props.images[props.order[2]].image}/>
                        </div>

                        <div className="response"></div>
                    </div>
                </div>
                <button className={selected === undefined ? "button-disabled" : "button-active"}
                        onClick={() => checkButton(selected, checked, props, setSelected, setChecked)}>
                    {checked ? "Continue" : "Check"}
                </button>
            </div>
        </div>
    </div>;
}

function Teach(props) {

    if(props.images != undefined){
    }
    
        console.log(props)
        return <div className="main">
        <Navbar nickname={props.nickname} wallet={props.wallet} setWallet={props.setWallet}/>
        <div className="quiz">
            <div className="block">
                <div className="name">{props.images[props.step].caption}</div>
                <div className="image">
                    <img src={props.images[props.step].image}/>
                </div>
                <button
                    onClick={() => Next(props)}>{props.step === props.steps - 1 ? "Start Challenge" : "Next"}</button>
            </div>
        </div>
    </div>;
 
    
}

function retrieveImagesMetadataCid() {
    const contract = LoadLingoStorage();
    return contract.methods.get_images_dir_cid().call();
}



function Quiz() {
    const [wallet, setWallet] = useState();
    const [nickname, setNickname] = useState("Nickname")

    const [inQuiz, setInQuiz] = useState(true);
    const [step, setStep] = useState(0);
    const [isImagesSet, setIsImagesSet] = useState(false)

    // TODO: need to read it from nav bar
    const root_cid = retrieveImagesMetadataCid();
    const SELECTED_LANGUAGE = "japanese";
    const [images, setImages] = useState(getIpfsImagesWithCaptions(root_cid, SELECTED_LANGUAGE));

   if(!isImagesSet){
    var downloaded = getIpfsImagesWithCaptions(root_cid, SELECTED_LANGUAGE)
    shuffleArray(downloaded)
    setImages(downloaded.slice(0, 3));
    setIsImagesSet(true);
   }

    const imagesOrder = iota(images.length);
    console.log(imagesOrder)
    shuffleArray(imagesOrder);
    const testOrder = iota(images.length);
    shuffleArray(testOrder);
    
    
    const maxSteps = 3;

    return inQuiz ?
        <Teach wallet={wallet} nickname={nickname} images={images} setWallet={setWallet} setNickname={setNickname}
               inQuiz={inQuiz} step={step} setStep={setStep} setInQuiz={setInQuiz} steps={maxSteps}/> :
        <Challange wallet={wallet} nickname={nickname} images={images} setWallet={setWallet} setNickname={setNickname}
                   inQuiz={inQuiz} step={step} setStep={setStep} setInQuiz={setInQuiz} steps={maxSteps}
                   order={imagesOrder} testOrder={testOrder}/>
}

export default Quiz;
