import { useState } from "react";
import RepoCard from "./RepoCard";

export default function Repositories({children}) 
{
    const [portfolioStars, setPortfolioStars] = useState(0);
      const [todoStars, setTodoStars] = useState(0);
      const [dotfilesStars, setDotfilesStars] = useState(0);
    
      function handleStarPortfolio() {
        setPortfolioStars(portfolioStars + 1);
      }
    
      function handleStarTodo() {
        setTodoStars(todoStars + 1);
      }
    
      function handleStarDotfiles() {
        setDotfilesStars(dotfilesStars + 1);
      }

    return(
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
    )
}