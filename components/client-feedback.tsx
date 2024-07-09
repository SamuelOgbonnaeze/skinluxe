import ClientCard from "./client-card";

const ClientFeedback = () => {
    return (
        <div className="py-8">
            <div className="flex lg:w-[450px] mx-auto items-center justify-center mb-[75px]">
                <h2 className="font-oldenburg text-[16px] mb:text-[24px] lg:text-4xl font-normal leading-[22px] lg:leading-[50px]  ">What Our Clients Say</h2>
            </div>
            <div className="overflow-hidden">
                <div className="flex items-center justify-start animate-scroll gap-x-14 mb-32">
                    {[...Array(2)].map((_, idx) => (
                        <div key={idx} className="flex gap-x-14">
                            <ClientCard
                                imgString="clientimg.png"
                                name="ESTHER AJAYI"
                                title="SKIN REVOLUTION"
                                description="For over a year, I have been suffering from useless and unattractive skin disease but quite appreciate I found out about skinluxe the best skincare in Uyo"
                            />
                            <ClientCard
                                imgString="clientimg.png"
                                name="ESTHER AJAYI"
                                title="SKIN REVOLUTION"
                                description="For over a year, I have been suffering from useless and unattractive skin disease but quite appreciate I found out about skinluxe the best skincare in Uyo"
                            />
                            <ClientCard
                                imgString="clientimg.png"
                                name="ESTHER AJAYI"
                                title="SKIN REVOLUTION"
                                description="For over a year, I have been suffering from useless and unattractive skin disease but quite appreciate I found out about skinluxe the best skincare in Uyo"
                            />
                            <ClientCard
                                imgString="clientimg.png"
                                name="ESTHER AJAYI"
                                title="SKIN REVOLUTION"
                                description="For over a year, I have been suffering from useless and unattractive skin disease but quite appreciate I found out about skinluxe the best skincare in Uyo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientFeedback;
