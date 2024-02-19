import React from "react";
import "./Team.css";
import Eb from "./Eb";
import Core from "./Core";
function Team(){
    const presidents = [
        {
          key: 1,
          img: null,
          name: null,
          position: null,
          url: null
        },
        {
          key: 2,
          img: null,
          name: null,
          position: null,
          url: null
        }
      ];
      const vicePresidents = [
        {
          key: 1,
          img: null,
          name: null,
          position: null,
          url: null
        }
    ];
    const directors = [
        {
          key: 1,
          img: null,
          name: null,
          position: null,
          url: null
        },
        {
          key: 2,
          img: null,
          name: null,
          position: null,
          url: null
        },
        {
          key: 3,
          img: null,
          name: null,
          position: null,
          url: null
        },
        {
          key: 4,
          img: null,
          name: null,
          position: null,
          url: null
        },
        {
          key: 5,
          img: null,
          name: null,
          position: null,
          url: null
        }
      ];
        const presi_list = presidents.map((item)=>{
            return(
                <Eb img={item.img} name={item.name} position={item.position} link={item.url}/>
            )
        })
        const vice_list = vicePresidents.map((item)=>{
        return(
            <Eb img={item.img} name={item.name} position={item.position} link={item.url}/>
        )
        })
        const director_list = directors.map((item)=>{
            return(
                <Eb img={item.img} name={item.name} position={item.position} link={item.url}/>
            )
        })
        const core_list = core.map((item)=>{
            return(
                <Core  name={item.name}  link={item.url}/>
            )
        })
    return(        
        <div className="container">
            <h1 className="team-head">Our Team <br/> 2023-24</h1>
            <div className="eb">
                <div className="presidents">
                    {presi_list}
                </div>
                <div className="v-presidents">
                    {vice_list}
                </div>
                <div className="director">
                    {director_list}
                </div>
            </div>
            <div className="core">
                {core_list}
            </div>
            <div className="member">

            </div>
        </div>
    );
}

export default Team;