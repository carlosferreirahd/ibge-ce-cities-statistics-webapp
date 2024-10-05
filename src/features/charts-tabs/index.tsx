import { useState } from "react";
import { Tabs } from "@/components/tabs";
import { PopulationChart } from "./components/population-chart";
import { LiteracyChart } from "./components/literacy-chart";

interface ChartsTabsProps {
  cityId: number;
}

type TabNames = "population-tab" | "literacy-tab" | "gdp-tab";

export function ChartsTabs({
  cityId
}: ChartsTabsProps) {

  const [currentTab, setCurrentTab] = useState<TabNames>("population-tab");

  return (
    <Tabs>
      <Tabs.Tab
        title="População"
        isActive={currentTab === "population-tab"}
        onTabClick={() => setCurrentTab("population-tab")}
      >
        <PopulationChart cityId={cityId} />
      </Tabs.Tab>
      <Tabs.Tab
        title="Alfabetização"
        isActive={currentTab === "literacy-tab"}
        onTabClick={() => setCurrentTab("literacy-tab")}
      >
        <LiteracyChart cityId={cityId} />
      </Tabs.Tab>
      <Tabs.Tab
        title="PIB"
        isActive={currentTab === "gdp-tab"}
        onTabClick={() => setCurrentTab("gdp-tab")}
      >
        PIB
      </Tabs.Tab>
    </Tabs>
  );
}
