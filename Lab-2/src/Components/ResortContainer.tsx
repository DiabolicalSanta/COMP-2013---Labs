import type { ResortListing } from "../data/data";
import ResortCard from "./ResortCard";

interface ResortContainerProps {
    data: ResortListing[];
}

export default function ResortContainer({data}: ResortContainerProps){

    

    return <div className="ResortContainer">
        {data.map((listing) => (

            <ResortCard key={listing.id} {...listing}
        
            />
        ))}
    </div>
}