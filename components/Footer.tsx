export default function Footer(){
    return <div className="pt-10 px-5 md:px-20 w-full h-[200px] md:h-[250px] bg-custom-gray flex justify-between">
        <div>
            <h3 className="text-xl font-bold">Koficenti's Blog</h3>
            <p>Just another tech blog.</p>
            <p className="font-bold mt-[3.5rem] md:mt-10">© 2023 All rights reserved</p>
        </div>
        <div className="flex flex-col text-right gap-3">
            <a>FAQs</a>
            <a className="font-bold">Github</a>
            <a>Contact me</a>
            <a className="font-bold">Support me!</a>
        </div>
    </div>
}