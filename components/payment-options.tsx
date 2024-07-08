import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const PaymentOptions = () => {
    return (



        <RadioGroup className="gap-y-[48px]" defaultValue="card">
            <div className="flex  space-x-2">
                <RadioGroupItem className="text-[#720439] " value="card" id="r1" />
                <div className="flex flex-col justify-start gap-y-1 pl-[43px] ">
                    <Label className="text-[20px] leading-[27px] font-openSans font-bold text-black " htmlFor="r1">Card</Label>
                    <p className="font-normal font-openSans text-[16px] leading-[21px] text-[#4B4C52] " >Pay via your credit or debit card</p>
                    <p className="text-[#720439] text-[13px] leading-[17px] font-openSans font-normal ">Recommended</p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem className="text-[#720439] " value="transfer" id="r2" />
                <div className="flex flex-col justify-start gap-y-1 pl-[43px] ">
                    <Label className="text-[20px] leading-[27px] font-openSans font-bold text-black " htmlFor="r2">Bank transfer</Label>
                    <p className="font-normal font-openSans text-[16px] leading-[21px] text-[#4B4C52] w-[500px] " >Transfer to the companies bank account. You will be required to confirm transaction.</p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem className="text-[#720439] " value="delivery" id="r3" />
                <div className="flex flex-col justify-start gap-y-1 pl-[43px] ">
                    <Label className="text-[20px] leading-[27px] font-openSans font-bold text-black " htmlFor="r3">Payment on delivery</Label>
                    <p className="font-normal font-openSans text-[16px] leading-[21px] text-[#4B4C52] w-[500px] " >Pay our distributors with cash once they deliver to you.</p>
                </div>
            </div>
        </RadioGroup>
    )
}


export default PaymentOptions;