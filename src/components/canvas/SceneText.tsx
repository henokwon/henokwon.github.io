import type { ComponentProps } from "react";
import { Text } from "@react-three/drei";
import { configureTextBuilder } from "troika-three-text";

// Serve Latin and mathematical glyphs locally so CDN failures cannot stall scenes.
configureTextBuilder({
  defaultFontURL: `${import.meta.env.BASE_URL}fonts/NotoSansMath-Regular.ttf`,
});

export default function SceneText(props: ComponentProps<typeof Text>) {
  return <Text {...props} font={`${import.meta.env.BASE_URL}fonts/NotoSans-Regular.ttf`} />;
}
