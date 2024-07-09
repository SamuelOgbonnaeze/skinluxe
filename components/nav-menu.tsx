import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";


const NavMenu = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <GiHamburgerMenu className="w-[16px] h-[16px] " />
                </SheetTrigger>
                <SheetContent className="w-[250px] ">
                    <SheetHeader>
                        <SheetTitle>Skinluxe</SheetTitle>
                    </SheetHeader>
                    <div className=" flex flex-col items-center gap-y-[40px] mt-12 ">
                    <Link href="/">
                        <p className="font-openSans font-medium text-[16px] leading-[22px] ">Home</p>
                    </Link>
                    <Link href="#natural">
                        <p className="font-openSans font-medium text-[16px] leading-[22px] ">Natural</p>
                    </Link>
                    <Link href="#bodyoil">
                        <p className="font-openSans font-medium text-[16px] leading-[22px] ">Body Oil</p>
                    </Link>
                    <Link href="#moisturizer">
                        <p className="font-openSans font-medium text-[16px] leading-[22px] ">Moisturizer</p>
                    </Link>
                    
                    <Link href="/cart">
                        <p className="font-openSans font-medium text-[16px] leading-[22px] ">Cart</p>
                    </Link>
                </div> 
                </SheetContent>
            </Sheet>
        </div>

    );
}

export default NavMenu;


  