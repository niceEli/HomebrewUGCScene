import gameInfo from "./bios/globalThis";
import k from "./bios/kaplay";

k.scene("UGC_Init", () => {
  k.onUpdate(() => k.addKaboom(k.rand(k.vec2(k.width(), k.height()))));
  console.log(gameInfo);
});
