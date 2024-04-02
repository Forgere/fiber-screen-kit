# fiber-screen-kit

Encapsulate commonly used components for building digital scenes, aiming to construct three-dimensional scenes faster, at a lower cost, and more efficiently.

## install

```bash
pnpm install fiber-screen-kit
```

1. init scene
```
<Scene>
  ...other code
</Scene>
```

2. load glb with bvh

``` javascript
<Model scale={[0.01, 0.01, 0.01]} url="/LittlestTokyo-transformed.glb"/>
```

3. move obj with gsap
```
  const animations = [{
    property: "position",
    from: [1, 1, 1],
    to: [2, 2, 2],
    duration: 2,
    start: 1,
    delay: 0,
  }]

  <Box position={[1, 1, 1]} animations={animations}/>
```

## tools

  translate .glb with pmndrs's tool

    https://github.com/pmndrs/gltfjsx

  ```
    npx gltfjsx public/LittlestTokyo.glb --transform
  ``` 