import React from "react";

import { Tabs } from "@/libs/design-system";

const items = [
  { name: "index", title: "Home", iconName: "home" },
  { name: "explore", title: "Explore", iconName: "code-slash" },
  { name: "settings", title: "Settings", iconName: "settings" },
];

export default function TabLayout() {
  return <Tabs items={items} />;
}
