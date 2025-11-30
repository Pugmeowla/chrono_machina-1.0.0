PalladiumEvents.registerAnimations((event) => {
    event.register('alienevo/tposeactivation', 200, (builder) => {

        // Check the Chronosapien T-pose ability
        let activation = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'chrono_machina:chronosapien', 't-pose', builder.getPartialTicks()
        );

        if (activation > 0 && !builder.isFirstPerson()) {
            // Third-person T-pose
            builder.get('right_arm')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(90)
                .setX(-2)
                .setY(2)
                .setZ(0)
                .animate('easeOutBack', activation);

            builder.get('left_arm')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(-90)
                .setX(2)
                .setY(2)
                .setZ(0)
                .animate('easeOutBack', activation);

            // Force head forward
            builder.get('head')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .animate('linear', activation);

        }

        if (activation > 0 && builder.isFirstPerson()) {
            // First-person T-pose
            builder.get('right_arm')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(90)
                .setX(-8)
                .setY(6)
                .setZ(4)
                .animate('easeOutBack', activation);

            builder.get('left_arm')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(-90)
                .setX(8)
                .setY(6)
                .setZ(4)
                .animate('easeOutBack', activation);

            // Force head forward
            builder.get('head')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .animate('linear', activation);
        }
    });
});
