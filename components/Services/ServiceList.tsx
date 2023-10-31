import { services } from "@/./public/assets/data/services"; // Adjust the path to your services data file
import ServiceCard from "./ServiceCard";

const ServiceList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {services.map((item, index) => <ServiceCard item={item} index={index} key={index} />
            )}
        </div>
    );
};

export default ServiceList;
