// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070d070d070d07070707070707070707070707070707070d070d070707070707070707070707070707070707070707070707070707070707070707090707070707070707070707070707070a070707070707070707070707070907070707070707070707070c080b070a07070707070707070707070a0a0a07070707070707070707070707070707070707070707070304040404040404040404040404040201050505050505050505050505050506`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . 2 . 2 . . . . . . . . . 
. . . . . . . . 2 . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles17,sprites.builtin.forestTiles26,sprites.builtin.forestTiles24,sprites.builtin.forestTiles25,sprites.builtin.forestTiles18,sprites.builtin.forestTiles19,sprites.builtin.forestTiles10,sprites.builtin.forestTiles2,sprites.builtin.forestTiles4,sprites.builtin.forestTiles6,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1,sprites.builtin.forestTiles12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
