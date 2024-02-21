import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
function FilterData() {
    return (
        <div className="flex items-center gap-4">
            Catregory:
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="man">Man</SelectItem>
                    <SelectItem value="woman">Woman</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default FilterData
