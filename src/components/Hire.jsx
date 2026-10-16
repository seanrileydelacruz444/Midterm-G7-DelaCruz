import { useState } from "react";

export default function Hire({rate})
{
    const [hours, setHours] = useState(0);

    function handleAddHour()
    {
        setHours(hours + 1);
    }

    function handleClear()
    {
        setHours(0);
    }

    return(
        <>
            <div className ="mx-20 mt-8 flex items-center justify-between rounded-x1 bg-[#222222] p- text-[#FAF3E1]">
                <div>
                    <h3 className="text-2xl font-bold"> Hire me for {hours} hours</h3>
                    <p className="font-bold text-[#FA8112]">PHP {hours * rate}</p>
                </div>
            </div>

            <div className="flex gap-4">

                <button className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]" 
                onClick={handleAddHour}> Add hour </button>

                <button className="curor-pointer rounded-lg border-2 border-[#FAF3E1] px-8 py-3 text-xl font-bold" 
                onClick={handleClear}> Clear </button>

            </div>
        </>
    )
}