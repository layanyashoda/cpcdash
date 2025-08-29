"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// You will need to import your chart components here, for example:
// import { LineChart, BarChart, PieChart, ... } from "recharts"

const summaryData = {
  // Data for the 'Total Sales' card
  totalSales: {
    value: "844,414,048",
    description: "Total for the year 2025",
    subText: "Cumulative sales from January to May",
    chartData: [
      { "Month": "January", "Sales": 89902456 },
      { "Month": "February", "Sales": 89541239 },
      { "Month": "March", "Sales": 74589632 },
      { "Month": "April", "Sales": 89632458 },
      { "Month": "May", "Sales": 78541239 }
    ]
  },
  // Data for the 'Top Airline Sales' card
  topAirline: {
    value: "10,698",
    description: "Sales to Singapore Airlines",
    subText: "Total sales from January to May",
    chartData: [
      { "Airline": "Singapore Airlines", "Total Sales": 10698 },
      { "Airline": "Air India", "Total Sales": 9974 },
      { "Airline": "National Airlines", "Total Sales": 8037 },
      { "Airline": "Emirates Airlines", "Total Sales": 7248 },
      { "Airline": "Turkish Airlines", "Total Sales": 6731 }
    ]
  },
  // Data for the 'Average Monthly Sales' card (can be a line chart of monthly sales)
  avgMonthlySales: {
    value: "140,735,674",
    description: "Monthly average for 2025",
    subText: "Average sales from January to May",
    chartData: [
      { "Month": "January", "Sales": 89902456 },
      { "Month": "February", "Sales": 89541239 },
      { "Month": "March", "Sales": 74589632 },
      { "Month": "April", "Sales": 89632458 },
      { "Month": "May", "Sales": 78541239 }
    ]
  },
  // Data for the 'Year-over-Year Change' card
  yoyChange: {
    value: "0.73%",
    description: "Vs. last year (Jan-May)",
    subText: "Sales are up compared to 2024",
    chartData: [
      { "Month": "January", "Total_2024": 78546932, "Total_2025": 89902456 },
      { "Month": "February", "Total_2024": 78546932, "Total_2025": 89541239 },
      { "Month": "March", "Total_2024": 547884655, "Total_2025": 74589632 },
      { "Month": "April", "Total_2024": 78546932, "Total_2025": 89632458 },
      { "Month": "May", "Total_2024": 54785352, "Total_2025": 78541239 }
    ]
  }
}

export function ChartAreaInteractive() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Total Jet A-1 Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summaryData.totalSales.value}</div>
          <p className="text-xs text-muted-foreground pt-1">{summaryData.totalSales.subText}</p>
          <div className="mt-4">
            {/* Insert your chart component here, e.g., a LineChart using summaryData.totalSales.chartData */}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Top Airline Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summaryData.topAirline.value}</div>
          <p className="text-xs text-muted-foreground pt-1">{summaryData.topAirline.subText}</p>
          <div className="mt-4">
            {/* Insert your chart component here, e.g., a PieChart using summaryData.topAirline.chartData */}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Average Monthly Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summaryData.avgMonthlySales.value}</div>
          <p className="text-xs text-muted-foreground pt-1">{summaryData.avgMonthlySales.subText}</p>
          <div className="mt-4">
            {/* Insert your chart component here, e.g., a LineChart using summaryData.avgMonthlySales.chartData */}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">YoY Sales Change</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summaryData.yoyChange.value}</div>
          <p className="text-xs text-muted-foreground pt-1">{summaryData.yoyChange.subText}</p>
          <div className="mt-4">
            {/* Insert your chart component here, e.g., a LineChart comparing summaryData.yoyChange.chartData */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}