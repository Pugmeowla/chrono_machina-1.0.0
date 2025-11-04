ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(
        Commands.literal("chronosapien_time_set")
            .then(Commands.argument('chronosapien_time_set', Arguments.STRING.create(event))
                
                        .executes(ctx => {
                            let chronosapien_time_set = Arguments.STRING.getResult(ctx, "chronosapien_time_set")
                            

                            let server = ctx.source.getServer()
                            let player = ctx.source.player
                            let dim = player.getLevel().getDimension()

                            let username = player.getGameProfile().getName();

                            if (abilityUtil.isEnabled(player, 'timewalker:chronosapien', 'ticking')) {
                                server.runCommandSilent(`execute as ${username} at @s in ${dim} run time set ${chronosapien_time_set}`)
                                
                            
                }
            
                return 1;
            })
            
    ));
})