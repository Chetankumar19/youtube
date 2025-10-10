import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setGolbelRegion } from "./utils/regionSlice";

const Region = () => {
    const dispatch = useDispatch();
    const [region, setRegion] = useState("no");
    // const regionValue = useSelector(state => state.region)

    return (
        <div className="flex items-center">
            <select
                name="region"
                value={region}
                onChange={(e) => {
                    setRegion(e.target.value)
                    dispatch(setGolbelRegion(e.target.value));
                    }
                }
            className="text-xs px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400 hover:border-gray-400 transition-all"
      >
            <option value="">Region</option>
            <option value="IN">IN</option>
            <option value="US">US</option>
        </select>
    </div >
  );
};

export default Region;
