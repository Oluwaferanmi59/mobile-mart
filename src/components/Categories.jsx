function Categories(){
    return(
        <div>
            <div className=" mt-6 ml-[5rem]">
                <div className=" grid grid-cols-2 ">
                    <h2 className="font-bold text-3xl">Categories </h2>
                    <p className="ml-[30rem] mt-4">View all</p>
                </div>
                <div>
                    <ul className="flex gap-7 mt-6">
                        <li><a href="">All</a></li>
                        <li><a href="">Devices</a></li>
                        <li><a href="">Laptop</a></li>
                        <li><a href="">Phones</a></li>
                        <li><a href="">Earpods</a></li>
                        <li><a href="">Air pods</a></li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Categories