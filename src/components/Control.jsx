export default function Controls({button1, button2, button3})
{
    <div className="flex gap-4">
        <button
            className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
            onClick={button1}
        >
            Follow
        </button>
        <button
            className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
            onClick={button2}
        >
            Add rate
        </button>
        <button
            className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
            onClick={button3}
        >
            Reset
        </button>
    </div>
}