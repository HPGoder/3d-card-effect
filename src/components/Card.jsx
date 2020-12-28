import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Card extends Component {
    render() {
        function OnHover(e){
            let xAxis = (window.innerWidth / 2 -e.clientX)/25;
            let yAxis = (window.innerHeight / 2 -e.clientY)/25;
            const card = document.getElementsByClassName('card');
            const title = document.getElementsByClassName('title');
            const sneaker = document.getElementsByClassName('sneaker');
            const purchase = document.getElementsByClassName('purchase');
            const info = document.getElementsByClassName('info');
            const active = document.getElementsByClassName('active');
            // console.log(sneaker[0].children[1])
            card[0].style.transition = 'none';
            title[0].style.transition= "0.5s ease";
            sneaker[0].children[1].style.transition= "0.5s ease";
            purchase[0].style.transition= "0.5s ease";
            info[0].style.transition= "0.5s ease";

            card[0].style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
            title[0].style.transform = "translateZ(200px)"
            sneaker[0].children[1].style.transform = "translateZ(150px) rotateZ(-45deg)"
            purchase[0].style.transform = "translateZ(100px)"
            purchase[0].children[0].style.background = "#f54642"
            info[0].style.transform = "translateZ(100px)"
            active[0].style.background ='linear-gradient(to right, rgba(245, 70, 66, 0.75), rgba(8, 83, 156, 0.75))'
        }
        function onDisHover(){
            const card = document.getElementsByClassName('card');
            const title = document.getElementsByClassName('title');
            const sneaker = document.getElementsByClassName('sneaker');
            const purchase = document.getElementsByClassName('purchase');
            const info = document.getElementsByClassName('info');
            const active = document.getElementsByClassName('active');
            card[0].style.transform = `rotateX(0deg) rotateY(0deg)`
            title[0].style.transform = "translateZ(0px)"
            sneaker[0].children[1].style.transform = ""
            purchase[0].style.transform = "translateZ(0px)"
            info[0].style.transform = "translateZ(0px)"
            active[0].style.background ='#585858'
            purchase[0].children[0].style.background = "#585858"
        }
        return (
            <div className="container"  onMouseMove={OnHover} onMouseOut={onDisHover}>
                <div className="card">
                    <div className="sneaker" id="sneaker">
                        <div className="circle"></div>
                        <img src={`${process.env.PUBLIC_URL}/images/adidas.png`} alt="adidas"/>
                    </div>
                    <div className="info">
                        <h1 className="title"> Adidas ZX</h1>
                        <h3> FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXPETION COMFORT.</h3>
                        <div className="sizes">
                            <button> 39 </button>
                            <button> 40 </button>
                            <button className="active"> 41 </button>
                            <button> 42 </button>
                        </div>
                        <div className="purchase">
                            <button> Purchase </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
