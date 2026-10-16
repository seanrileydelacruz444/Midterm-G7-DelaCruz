import { useState } from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import StatCard from "./components/StatCard";
import Profile from "./components/Profile";
import RepoCard from "./components/RepoCard";
import Footer from "./components/Footer";

function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

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

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />

      <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">

        <Profile>
          <Bio name = "Sean Riley Dela Cruz" username = "seanrileydelacruz444" />

          <div className="mt-6 flex gap-6">
            
            <StatCard value={followers} label="Followers" />

            <StatCard value={rate} label="PHP per hour" />
            
          </div>
        </Profile>

        <div className="flex gap-4">
          <button
            className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
            onClick={handleFollow}
          >
            Follow
          </button>
          <button
            className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
            onClick={handleAddRate}
          >
            Add rate
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      <main className="grid grid-cols-3 gap-8 px-20 pt-8">

        <RepoCard
          name="portfolio"
          description="My personal portfolio website."
          language="JavaScript"
          commits= {42}>
          <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarPortfolio}
            >
              ★ {portfolioStars}
          </button>

        </RepoCard>

        <RepoCard
          name="todo-api"
          description="A small REST API for a to-do list."
          language="Java"
          commits= {31} >

            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarTodo}
            >
              ★ {todoStars}
            </button>
        </RepoCard>
        
        <RepoCard
          name="dotfiles"
          description="My terminal and editor settings."
          language="Shell"
          commits= {12} >

            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarDotfiles}
            >
              ★ {dotfilesStars}
            </button>
        </RepoCard>    

        
      </main>

      <Footer />

    </div>
  );
}

export default App;
