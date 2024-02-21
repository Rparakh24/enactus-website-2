import React from "react";
import "./Team.css";
import Eb from "./Eb";
import Core from "./Core";
import corelist from './corelist';
import kshitij from './assets/kshitij.png';
import prachi from './assets/prachi.png'; 
import dhairya from './assets/dhairya.png';
import aryan from './assets/aryan.png';
import khushi from './assets/khushi.png';
import kush from './assets/kush.png';
import vartika from './assets/vartika.png';
import gaurav from './assets/guarav.png';
import atirek from './assets/atirek.png';
import gaggu from './assets/gaggu.jpeg';
import ashish from './assets/ashish.jpeg';
function Team(){
    const presidents = [
        {
          key: 1,
          img: {kshitij},
          name: "Kshitij Gupta",
          position: "President",
          url: "https://www.linkedin.com/in/kshitijgupta12/"
        },
        {
          key: 2,
          img: {prachi},
          name: "Prachi Garg",
          position: "President",
          url: "https://www.linkedin.com/in/prachigarg040803/"
        }
      ];
      const vicePresidents = [
        {
          key: 1,
          img: {dhairya},
          name: "Dhairya Singla",
          position: "Vice President",
          url: "https://www.linkedin.com/in/dhairya-singla/"
        }
    ];
    const directors1 = [
        {
          key: 1,
          img: {khushi},
          name: "Khushi Attri",
          position: "Team Director",
          url: "https://www.linkedin.com/in/khushi-attri/"
        },
        {
          key: 2,
          img: {aryan},
          name: "Aryan Julka",
          position: "Team Director",
          url: "https://www.linkedin.com/in/aryan-julka/"
        },
        {
          key: 3,
          img: {kush},
          name: "Kush Gupta",
          position: "Project Director",
          url: "https://www.linkedin.com/in/kush-gupta-275b94221/"
        },
      ];
      const directors2=[
        {
        key: 1,
        img: {vartika},
        name: "Vartika Gautam",
        position: "Director of Communication and External Affairs",
        url: "https://www.linkedin.com/in/vartika-gautam-3aa8a1226/"
      },
      {
        key: 2,
        img: {gaurav},
        name: "Guarav Singh",
        position: "Director of Communication and External Affairs",
        url: "https://www.linkedin.com/in/gaurav-singh-51a07a235/"
      },
      {
        key: 3,
        img: {atirek},
        name: "Atirek Katiyar",
        position: "Board Advisor",
        url: "https://www.linkedin.com/in/atirek-katiyar-22014022a/"
      }];
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
        const director_list1 = directors1.map((item)=>{
            return(
                <Eb img={item.img} name={item.name} position={item.position} link={item.url}/>
            )
        })
        const director_list2 = directors2.map((item)=>{
          return(
              <Eb img={item.img} name={item.name} position={item.position} link={item.url}/>
          )
      })
        const core_list = corelist.map((item)=>{
            return(
                <Core  name={item.name}  link={item.url}/>
            )
        })
    return(        
        <div className="container">
            <h1 className="team-head">Our Team <br/> 2023-24</h1>
            <div className="team">
                <div className="presidents eb-flex">
                    {presi_list}
                </div>
                <div className="v-presidents eb-flex">
                    {vice_list}
                </div>
                <div className="director eb-flex">
                    {director_list1}
                </div>
                <div className="director eb-flex">
                    {director_list2}
                </div>
             </div>
            <div className="core-main">
            <h1>CORE</h1>
            <div className="core">
                {core_list}
            </div>
            </div>
            <div className="faculty-box">
                <h1>Faculty Advisors</h1>
                <div className="faculty">
                <div className="f1 f-box">
                  <img className="eb-img" src={gaggu}></img>
                  <p className="eb-head">Gagandeep Kaur</p>
                  <p className="eb-pos">faculty Advisor</p>
                </div>
                <div className="f2 f-box">
                  <img className="eb-img" src={ashish}></img>
                  <p className="eb-head">Ashish Kumar Gupta</p>
                  <p className="eb-pos">faculty Advisor</p>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Team;