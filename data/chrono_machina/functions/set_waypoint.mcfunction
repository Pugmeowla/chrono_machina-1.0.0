kill @e[type=minecraft:armor_stand,tag=clock_point]
summon armor_stand ~ ~ ~ {Tags:["clock_point"],NoGravity:1b,Marker:1b,Invisible:1b}
tellraw @s {"text":"Clockpoint Set","color":"green","bold":true,"italic":true}

