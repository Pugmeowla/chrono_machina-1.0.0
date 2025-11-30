// kubejs/client_scripts/chrono_tint.js

PalladiumEvents.registerGuiOverlays(event => {
    event.register(
        "chrono_machina:screen_tint",
        (minecraft, gui, poseStack, partialTick, screenWidth, screenHeight) => {
            const tex = "chrono_machina:textures/gui/tint.png";

            // Stretch the 16x16 texture across the whole screen
            guiUtil.blit(
                tex,
                gui,
                0,                  // x position on screen
                0,                  // y position on screen
                0,                  // u start (texture X)
                0,                  // v start (texture Y)
                screenWidth,        // draw width (full screen)
                screenHeight,       // draw height (full screen)
                16,                 // actual texture width
                16                  // actual texture height
            );
        }
    );
});
