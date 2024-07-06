import ClientCard from "./client-card";

const ClientFeedback = () => {
    return (
        <div className="">
            <div className="flex w-[450px] mx-auto items-center justify-center mb-[75px]">
                <h2 className="font-oldenburg text-[36px] leading-[50px] ">What Our Clients Says</h2>
            </div>
            <div className="flex gap-x-14 mb-32">
                <ClientCard
                    imgString="clientimg.png"
                    name="ESTHER AJAYI"
                    title="SKIN REVOLUTION"
                    description='For over a year, i have been suffering from useless and unattractive skin disease but quite appreciate i found out about skinluxe the best skincare in Uyo'
                />
            </div>
        </div>
    );
}

export default ClientFeedback;