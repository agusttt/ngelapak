import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
function ShortData() {
    return (
        <div className="flex items-center gap-4">
            Short:
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="low">Low Price</SelectItem>
                    <SelectItem value="hight">Hight Price</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default ShortData
