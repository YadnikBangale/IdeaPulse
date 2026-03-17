import React from "react"

function ResultCards({result}){

const noveltyWidth = result.novelty_score * 100

return(

    <div className="mt-5">

        <div className="row">

            <div className="col-md-6">

                <div className="glass-card p-4">

                    <h5>Novelty Score</h5>

                    <div className="novelty-bar">

                        <div
                        className="novelty-fill"
                        style={{width:`${noveltyWidth}%`}}
                        >

                        </div>

                    </div>

                    <p className="mt-2">
                        {result.novelty_score.toFixed(2)}
                    </p>

                </div>

            </div>

        <div className="col-md-6">

            <div className="glass-card p-4">

                <h5>Innovation Distance</h5>

                <h3>
                    {result.innovation_distance.toFixed(2)}
                </h3>

            </div>

        </div>

    </div>

        <h3 className="mt-4 text-white text-center">
            Similar Ideas
        </h3>

        <div className="row">

            {result.similar_ideas.map((idea,index)=>(

                <div className="col-md-4 mb-4" key={index}>

                    <div className="glass-card p-3 h-100">

                        <h5>{idea.title}</h5>

                        <p>{idea.description}</p>

                            <span className="badge bg-info">
                                {idea.domain}
                            </span>

                    </div>

                </div>

))}

</div>

    </div>

)

}

export default ResultCards