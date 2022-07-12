import React from 'react';
import Countdown from 'react-countdown';

import './Deposite.css';


const Deposite = () => {


    const Completionist = () => <span>Your time ended!</span>;

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };

    return (
        <div className="container max-w-[1080] mx-auto pb-10 ">
            <header className="p-3">
                <div class="navbar bg-base-100 shadow-xl rounded-2xl">
                    <a href className="font-bold lg:text-3xl md:text-2xl  btn btn-ghost normal-case text-xl"><i className="text-cyan-200 fa-solid fa-angle-left pr-3"></i> <span className="text-white">Back</span></a>
                </div>
            </header>

            <div className="m-3">
                <div class="card w-100 bg-white text-black shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-base md:text-xl  lg:text-2xl font-bold">Tether Payment!</h2>
                        <h3 className="font-bold"><span>2000.00</span><span className="text-red-600"> USDT</span></h3>
                        <h4 className="font-bold"><span>1990.00</span><span className="text-red-600"> <sup>$</sup></span> </h4>
                        <div className="flex ">
                            <h5 className=" font-bold text-green-700 text-sm md:text-base lg:text-xl">Wallet Address : <span className="fontRestyleItalic">&ctrhyoenlfo$dowj</span> </h5>
                           <h5 className=" font-bold text-gray-400 text-base md:text-xl lg:text-xl ml-3 bg-slate-200 p-2 rounded-3xl">  <i class="fa-solid fa-copy"></i></h5>  
                        </div>
                        
                        <div>
                            <h2 className="font-bold text-base md:text-xl  lg:text-xl"><i class="fa-solid fa-clock"></i> Time left to pay :  <span className="text-sky-600">  <Countdown
                                date={Date.now() + 3600000}
                                renderer={renderer}
                            /></span> </h2>

                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>


            <div className="m-3">
                <div class="card w-100 bg-white text-black shadow-xl">

                    <div class="card-body">
                        <h2 class=" card-title  text-xl md:text-xl  lg:text-2xl font-bold">Instructions & Notices!</h2>
                        <p className="text-slate-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi necessitatibus dolor molestiae a accusamus, consequuntur culpa aut inventore, eaque quasi perferendis ipsam natus, laudantium temporibus commodi doloremque est sed quaerat? Recusandae facere tenetur quas beatae! Expedita alias praesentium doloremque similique quasi deleniti aliquid mollitia. Ipsam nobis nihil eveniet blanditiis hic porro suscipit et quod necessitatibus provident? Eaque, qui ex alias nobis dolores eveniet veniam voluptatem sint ducimus ea repellat quis, accusamus sed minima beatae dolor nihil illo iste. Eos aliquam quidem, tenetur deserunt placeat ducimus architecto, iste ut nam, dolore atque quo. Natus vitae illum repellat perferendis vero pariatur recusandae?</p>

                    </div>
                </div>
            </div>

            <section></section>
            <section></section>
        </div>
    );
};

export default Deposite;