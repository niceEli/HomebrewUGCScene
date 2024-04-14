import k from "./kaboom";

k.scene("UGC_Init", () => {
  k.onUpdate(() => k.addKaboom(k.rand(k.vec2(k.width(), k.height()))));
});