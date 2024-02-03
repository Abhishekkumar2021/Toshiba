// import csv data from public folder
import fs from "fs"
import path from "path"
import ApiResponse from "../utils/ApiResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js"

const __dirname = path.resolve();
const csvPath = `${__dirname}/public/dataset.csv`

// CSV has headers: timestamp, profit

const csvToJson = async (path) => {
    try {
        const data = fs.readFileSync(path, "utf8")
        const rows = data.split("\n")
        const json = rows.slice(1).map(row => {
            const values = row.split(",")
            return {
                timestamp: values[0],
                profit: values[1]
            }
        })
        
        // Remove all undefined values
        const filteredJson = json.filter(row => row.timestamp && row.profit)
        return filteredJson
    } catch (error) {
        throw error
    }
}

export const getSampleData = AsyncHandler(async (req, res, next) => {
    const json = await csvToJson(csvPath)
    res.status(200).json(new ApiResponse(200, "OK", json.slice(0, 1000)))
})

//  Drill down to day level i.e whatever transactions are there 
// in a day sum them up and create another onject for them as 
// {timestamp, profit}, timestamp will be the day's timestamp 
// and profit will be the sum of all the transactions in that 
// day. the transactions are already sorted by timestamp so you 
// can use that to your advantage.
export const getDayLevel = AsyncHandler(async (req, res) => {
    const json = await csvToJson(csvPath)
    const dayLevel = json.reduce((acc, curr) => {
        const day = new Date(curr.timestamp).setHours(0, 0, 0, 0)
        if (!acc[day]) {
            acc[day] = {
                timestamp: day,
                profit: 0
            }
        }
        acc[day].profit += parseFloat(curr.profit)
        return acc
    }, {})
    const dayLevelArray = Object.values(dayLevel)
    res.status(200).json(new ApiResponse(200, "OK", dayLevelArray))
})


export const getMonthLevel = AsyncHandler(async (req, res) => {
    const json = await csvToJson(csvPath)
    const monthLevel = json.reduce((acc, curr) => {
        // Make month level with day as 1
        const date = new Date(curr.timestamp).setDate(1)
        const month = new Date(date).setHours(0, 0, 0, 0)
        if (!acc[month]) {
            acc[month] = {
                timestamp: month,
                profit: 0
            }
        }
        acc[month].profit += parseFloat(curr.profit)
        return acc
    }, {})
    const monthLevelArray = Object.values(monthLevel)
    res.status(200).json(new ApiResponse(200, "OK", monthLevelArray))
})

export const getYearLevel = AsyncHandler(async (req, res) => {
    const json = await csvToJson(csvPath)
    const yearLevel = json.reduce((acc, curr) => {
        // Make month level with day as 1
        const date = new Date(curr.timestamp).setMonth(0, 1)
        const year = new Date(date).setHours(0, 0, 0, 0)
        if (!acc[year]) {
            acc[year] = {
                timestamp: year,
                profit: 0
            }
        }
        acc[year].profit += parseFloat(curr.profit)
        return acc
    }, {})
    const yearLevelArray = Object.values(yearLevel)
    res.status(200).json(new ApiResponse(200, "OK", yearLevelArray))
})
