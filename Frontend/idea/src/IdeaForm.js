import React,{useState} from "react";
import axios from "axios";
import ResultCards from "./ResultCards";

function IdeaForm(){

const [idea,setIdea]=useState("")
const [result,setResult]=useState(null)

const analyzeIdea = async ()=>{

const response = await axios.post(
"http://127.0.0.1:8000/analyze",
{idea:idea}
)

setResult(response.data)

}

return(

<div className="container">

<div className="glass-card p-4 shadow-lg">

<textarea
className="form-control idea-input mb-3"
rows="3"
placeholder="Describe your startup idea..."
value={idea}
onChange={(e)=>setIdea(e.target.value)}
/>

<button
className="btn btn-info w-100"
onClick={analyzeIdea}
>

Analyze Idea

</button>

</div>

{result && <ResultCards result={result}/>}

</div>

)

}

export default IdeaForm