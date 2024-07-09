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
import { ShoppingCart } from 'lucide-react';



const NavMenu = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <GiHamburgerMenu className="w-[16px] h-[16px] " />
                </SheetTrigger>
                <SheetContent className="w-[250px] ">
                    <SheetHeader>
                        <SheetTitle className="text-xl text-[#720439]">Skinluxe</SheetTitle>
                    </SheetHeader>
                    <div className=" flex flex-col items-center gap-y-[40px] mt-12 ">
                        <Link href="/">
                            <p className="font-openSans font-medium text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Home</p>
                        </Link>
                        <Link href="#natural">
                            <p className="font-openSans font-medium text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Natural</p>
                        </Link>
                        <Link href="#bodyoil">
                            <p className="font-openSans font-medium text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Body Oil</p>
                        </Link>
                        <Link href="#moisturizer">
                            <p className="font-openSans font-medium text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Moisturizer</p>
                        </Link>
                        <Link href="#faceoil">
                            <p className="font-openSans font-medium text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Face Oil</p>
                        </Link>
                        <Link href="#nightcream">
                            <p className="font-openSans font-medium text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Night Cream</p>
                        </Link>
                        <Link href="/cart">
                            <div className="flex items-center justify-between gap-x-2 text-[#D3B1C2] hover:text-[#720439]">
                                <ShoppingCart className="w-[24px] h-[24px]" />
                                <p className="font-openSans font-medium text-[16px] leading-[22px] ">Cart</p>
                            </div>
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>

    );
}

export default NavMenu;


