import { Tabs as TabsExpoRouter } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/libs/design-system/icons";
import { componentsName, useThemeStyles } from "@/libs/theme";

type Item = {
  name: string;
  title: string;
  iconName: string;
};

type TabLayoutProps = {
  items: Item[];
};

export default function Tabs(props: TabLayoutProps) {
  const { items } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.tabs);

  const { COLOR } = stylesPropertiesName;

  return (
    <TabsExpoRouter
      screenOptions={{
        tabBarActiveTintColor: styles[COLOR],
        headerShown: false,
      }}
    >
      {items.map((item) => {
        const { name, title, iconName } = item;

        const iconNameFocused = iconName;
        const iconNameOutline: any = `${item.iconName}-outline`;

        return (
          <TabsExpoRouter.Screen
            key={name}
            name={name}
            options={{
              title: title,
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? iconNameFocused : iconNameOutline}
                  color={color}
                />
              ),
            }}
          />
        );
      })}
    </TabsExpoRouter>
  );
}
