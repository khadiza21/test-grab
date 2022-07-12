import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './Wheel4.css'

const Wheel4 = () => {

    const data = [
        { option: "0" },
        { option: "2" },
        { option: "3" },
        { option: "5" },
        { option: "10" },
        { option: "15" },
        { option: "20" },
        { option: "25" },
        { option: "30" },
        { option: "50" },
        { option: "90" },
        { option: "100" },
    ];


    const [winner, setWinner] = useState(0);
    // const [message, setMessage] = useState('');
    // const isAnonymous = true;

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    // const [x, sx] = React.useState(false);
    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        const item = data[newPrizeNumber];
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)
        setWinner(item);
    }
    // function stopSpin(e) {
    //     console.log("stoppppppppp", e);
    //     sx(false);
    // }
    return (
        <div className="container max-w-[1080] mx-auto my-16">
            <div className="wheel-decider">
                <div>
                    <h1 className="font-bold lg:text-4xl ">Check your discount with wheel decider!!!</h1>
                    <h2 className="font-bold lg:text-xl pt-5 pb-16">Spin Left {4}!</h2>
                </div>
            </div>

            <div className="wheel-decider pb-5" >
                <Wheel className="flex justify-center "
                    backgroundColors={["#081135", "#570C31"]}
                    textColors={["#ffffff"]}
                    // onStopSpinning={stopSpin}
                    radiusLineWidth={2}
                    outerBorderWidth={10}
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    onStopSpinning={() => {
                        setMustSpin(false);
                    }}

                />

            </div>
            <div className="wheel-decider">
                {/* <button onClick={() => sx(true)}>start</button> */}
                <button className="btn btn-success" onClick={handleSpinClick}>SPIN</button>
            </div>
            {/* <button disabled={true}>Click</button>
            <button disabled={isAnonymous ? true : false}>Click</button> */}
            <div className="wheel-decider">
                <div >
                    {console.log(mustSpin)}

                    <h2 className="text-2xl font-bold py-8">You win
                        {mustSpin == true
                            ? (<span className="pl-2">0</span>)
                            : (<span className="pl-2"> {winner.option}</span>)
                        }</h2>

                    <p className="lg:px-5  md:px-5 px-3 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem dicta eius vero ex nesciunt a excepturi unde, non omnis harum similique odit ut, velit architecto distinctio quia molestiae, eligendi ea quibusdam laboriosam. Nesciunt iste, et totam a, corrupti delectus hic molestias, repudiandae saepe atque tempore fuga praesentium nobis commodi in quisquam qui facere minus. Eveniet dignissimos pariatur libero provident, itaque nostrum. Atque alias recusandae quos nihil labore distinctio sunt quo odio aspernatur accusantium debitis perferendis incidunt aliquam culpa ducimus adipisci numquam cupiditate saepe odit, in voluptas, veniam quam. Dolorum enim officia reiciendis, voluptate quibusdam voluptatibus esse voluptatum fugiat quisquam ea!</p>
                </div>
            </div>



        </div>
    );
};

export default Wheel4;