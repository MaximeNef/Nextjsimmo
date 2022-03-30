import Link from "next/link";

const Header =() => { 
    return ( 
        <div> 
            <div className="flex justify-center text-[42px] font-semibold">Archybald</div>
            <div>
                <div className="flex justify-center">Découvrez nos biens de prestiges</div>
                <div className="flex justify-center">A &nbsp;<p className="font-bold">vendre</p>&nbsp;et à<p className="font-bold">&nbsp;louer</p></div>
            </div>
            <div className="flex justify-center my-14"><input className="bg-[#3B3C3E] border-black border rounded-3xl pl-4" placeholder="Par référence" /></div>
            <div className="flex justify-center space-x-2.5">
                <Link href="/">Tous</Link>
                <p>|</p>
                <Link href="/maisons">Maisons</Link>
                <Link href="/appartements">Appartements</Link>
                
            </div>
            <div className="flex justify-center mt-8"><Link href="/contact">Nous contacter</Link></div>
        </div>
    );
};
export default Header; 