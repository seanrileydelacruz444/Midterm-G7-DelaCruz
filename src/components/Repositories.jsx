export default function Repositories({children}) 
{
    return(
        <main className="grid grid-cols-3 gap-8 px-20 pt-8">
            {children}
        </main>
    )
}