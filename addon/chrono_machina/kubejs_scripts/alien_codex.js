global.alienevo_alien_88 = ['chrono_machina:chronosapien']; // Register your alien. Use an index value between 102 and 88
global.alienevo_randomization_88 = [false]; // Determine if you want your alien to be unlocked through mistransformation.

// INTERFACE VALUES
global.alienevo_regen_88 = [0]; // A faux regen value to represent your alien's healing capability. Values 0 thru 10. Does not effect gameplay.
global.alienevo_scale_88 = [55]; // Scale of the alien preview render. 55 is default
global.alienevo_textcolor_88 = [0xa8865a]; // Text color of the alien species name
global.alienevo_background_88 = ['minecraft:textures/block/dirt.png']; // Tiled texture that appears behind the alien preview render

// COLOR PALETTES
// This is where you will define the default colors your model will use to support color customization.

// The "_uniforms" entries allow you to disable Glow, Primary, or Secondary tabs from appearing when editing the colors of your alien, dependent on uniform type.
global.alienevo_88_10k_uniforms = [true, false, false]; // Glow (enabled), Primary (enabled), Secondary (enabled)
global.alienevo_88_default_uniforms = [true, false, false]; // Glow (enabled), Primary (disabled), Secondary (disabled)
global.alienevo_88_prototype_uniforms = [true, true, true];

// Make sure your colors are listed from BRIGHTEST TO DARKEST. You can use as many or as few colors in a palette as you'd like.
global.alienevo_88_10k_skincolor_palette_1 = ["a8865a", "9c784d", "86623f", "6c4a2d", "513622"];
global.alienevo_88_10k_skincolor_palette_2 = ["e7daca", "d9c9b8", "cab6a4", "b19885", "9b7e6c"];
global.alienevo_88_10k_skincolor_palette_3 = ["453c34", "352d27", "2d2520", "231c19", "191412"];
global.alienevo_88_10k_skincolor_palette_4 = ["4e7d84", "426e78", "315764", "274756", "1a3648"];

global.alienevo_88_default_skincolor_palette_1 = ["a8865a", "9c784d", "86623f", "6c4a2d", "513622"];
global.alienevo_88_default_skincolor_palette_2 = ["e7daca", "d9c9b8", "cab6a4", "b19885", "9b7e6c"];
global.alienevo_88_default_skincolor_palette_3 = ["453c34", "352d27", "2d2520", "231c19", "191412"];

global.alienevo_88_prototype_skincolor_palette_1 = ["a8865a", "9c784d", "86623f", "6c4a2d", "513622"];
global.alienevo_88_prototype_skincolor_palette_2 = ["e7daca", "d9c9b8", "cab6a4", "b19885", "9b7e6c"];
global.alienevo_88_prototype_skincolor_palette_3 = ["453c34", "352d27", "2d2520", "231c19", "191412"];

// GLOW COLOR PALETTES

// Glow color also accepts palettes of as many or as few colors as you choose.
// In this instance, I am using a single color instead of multiple shades.
global.alienevo_88_10k_glowcolor_1 = ["b3ff40", "a7f72e", "8ed721", "64a306", "365b00"];
global.alienevo_88_default_glowcolor_1 = ["b3ff40", "a7f72e", "8ed721", "64a306", "365b00"];
global.alienevo_88_prototype_glowcolor_1 = ["b3ff40", "a7f72e", "8ed721", "64a306", "365b00"];
// If your alien has more than one glow color, like XLR8 or Ripjaws, define it like this:
// global.alienevo_88_10k_glowcolor_2 = ["ffc833", "f1891f"];
// global.alienevo_88_default_glowcolor_2 = ["ffc833", "f1891f"];
// global.alienevo_88_prototype_glowcolor_2 = ["ffc833", "f1891f"];