import Bio from "./Bio";
import StatCard from "./StatCard";
import { useState } from "react";
import Hire from "./Hire";
import Controls from "./Controls";

export default function Profile()
{
    const [followers, setFollowers] = useState(0);
    const [rate, setRate] = useState(500);

    function handleFollow() {
    setFollowers(followers + 1);
    }

    function handleAddRate() {
        setRate(rate + 100);
    }

    function handleReset() {
        setFollowers(0);
        setRate(500);
    }

    return(
        <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
            <div>
                <header>
                    <Bio name = "Sean Riley Dela Cruz" username = "seanrileydelacruz444" />
                </header>
                

                <div className="mt-6 flex gap-6">
                    <StatCard value={followers} label="Followers" />
                    <StatCard value={rate} label="PHP per hour" />
                </div>
            </div>
            
            <Controls button1={handleFollow} button2={handleAddRate} button3={handleReset} />

            <Hire rate={rate} />
            
        </div>
    )
}