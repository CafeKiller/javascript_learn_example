let app = new PIXI.Application();
app.init({ 
    // width: 640, 
    // height: 360,
    resizeTo: window,
    background: "#1f1f1f",
}).then(async () => {
    document.body.appendChild(app.canvas);
    const texture = await PIXI.Assets.load(
        "https://pixijs.com/assets/bunny.png"
    );
    const sprite = PIXI.Sprite.from(texture);
    sprite.texture.source.scaleMode = "nearest";
    sprite.anchor.set(0.5);
    sprite.scale.set(3);
    sprite.position.set(
        app.renderer.screen.width / 2,
        app.renderer.screen.height / 2
    );

    sprite.on('pointerdown', (event) => { alert('clicked!'); });
    sprite.eventMode = 'static';

    app.stage.addChild(sprite);        
    console.log(sprite);
    app.ticker.add((time) => {
        // console.log(time);
        // console.log(sprite);
        
        
        // sprite.x += 0.1  * time.deltaTime;
        sprite.rotation += 0.001 * time.deltaTime;
        // console.log(sprite);
        
        // sprite.position.x += 0.01 * time.deltaTime;
    })
})