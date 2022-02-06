import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import "./css/Quiz.css"


function Continue(props, setSelected, setChecked){
    if(props.step < props.steps-1){
        props.setStep(props.step+1)
        setSelected()
        setChecked(false)
    }

    
}

function Next(props){
    if(props.step < props.steps-1){
        props.setStep(props.step+1)
    }
    else{
        props.setInQuiz(false)
        props.setStep(0)     
    }
    
}



function borderColor(selected, index, checked, imagesOrder,testOrder,currentStep){
    if(selected==index){ // Se foi Selecionado
        if(checked){ // Se a validação ja foi ativada
            if(imagesOrder[index]==testOrder[currentStep]) //Se está correto
            {
                return "right-choice"
            }
            else{ //Se estiver incorreto
                return "wrong-choice"
            }
        }
        else{
            return "active"
        }
    }
    else{
        return "border"
    }
}


function checkButton(selected,checked,props,setSelected,setChecked){

    if(selected != undefined){
        if(checked){
            if(props.step==2){
                window.location.href="/reward";
            }
            else{
                Continue(props,setSelected,setChecked)
            }
        }
        else{
            setChecked(true)
        }
    }

}


function Challange(props){
    const [selected, setSelected] = useState();
    const [checked, setChecked] = useState(false);
    

    return <div className="main">
    <Navbar nickname={props.nickname} wallet={props.wallet} setWallet={props.setWallet}/>
    <div className="challange">
        <div className="block">
            <div className="name">Which is {props.images[props.testOrder[props.step]].caption}</div>
            <div className="options">
            <div className="image" onClick={checked ? {} : ()=>setSelected(0)}>
                <div className={borderColor(selected,0,checked,props.order,props.testOrder,props.step)}>
                <img src={props.images[props.order[0]].image}/>
                </div>
                
                <div className="response"></div>
            </div>
            <div className="image" onClick={checked ? {} : ()=>setSelected(1)}>
            <div className={borderColor(selected,1,checked,props.order,props.testOrder,props.step)}>
            <img src={props.images[props.order[1]].image}/>
            </div>
                
                <div className="response"></div>
            </div>
            <div className="image" onClick={checked ? {} : ()=>setSelected(2)}>
            <div className={borderColor(selected,2,checked,props.order,props.testOrder,props.step)}>
            <img src={props.images[props.order[2]].image}/>
            </div>
                
                <div className="response"></div>
            </div>
            </div>
            <button className={selected === undefined ? "button-disabled" : "button-active"} 
            onClick={()=> checkButton(selected,checked,props,setSelected,setChecked)}>
                {checked ? "Continue" :"Check"}
            </button>
        </div>
    </div>
</div>;
}

function Teach(props){
return <div className="main">
        <Navbar nickname={props.nickname} wallet={props.wallet} setWallet={props.setWallet}/>
        <div className="quiz">
            <div className="block">
                <div className="name">{props.images[props.step].caption}</div>
                <div className="image">
                    <img src={props.images[props.step].image}/>
                    </div>
                <button onClick={()=>Next(props)}>{props.step == props.steps-1 ? "Start Challenge" : "Next"}</button>
            </div>
        </div>
    </div>;
}

function Quiz() {
    const [wallet,setWallet] = useState();
	const [nickname,setNickname] = useState("Nickname")
    const [images,setImages] = useState([
        {"image":"https://images.unsplash.com/photo-1629567508174-f59400e6d329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80","caption":"コーヒー"},
        {"image":"https://images.unsplash.com/photo-1612506266679-606568a33215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","caption":"アボカド"},
        {"image":"https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80","caption":"ココナッツ"},
    ]);
    const [inQuiz, setInQuiz] = useState(true);
    const [step,setStep] = useState(0);
    const maxSteps = 3;
    const imagesOrder = [0,1,2]
    const testOrder = [0,1,2]
    //Shuffle
    for(var i = imagesOrder.length-1; i > 0; i--){
        var n = Math.floor(Math.random() * (i + 1));
        var tmp = imagesOrder[i]
        imagesOrder[i] = imagesOrder[n];
        imagesOrder[n] = tmp;
    }

    for(var i = testOrder.length-1; i > 0; i--){
        var n = Math.floor(Math.random() * (i + 1));
        var tmp = testOrder[i]
        testOrder[i] = testOrder[n];
        testOrder[n] = tmp;
    }
  return inQuiz ? <Teach wallet={wallet} nickname={nickname} images={images} setWallet={setWallet} setNickname={setNickname} inQuiz={inQuiz} step={step} setStep={setStep} setInQuiz={setInQuiz} steps={maxSteps}/> : <Challange wallet={wallet} nickname={nickname} images={images} setWallet={setWallet} setNickname={setNickname} inQuiz={inQuiz} step={step} setStep={setStep} setInQuiz={setInQuiz} steps={maxSteps} order={imagesOrder} testOrder={testOrder}/>
}

export default Quiz;
