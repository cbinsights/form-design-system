
### AvatarRow
Render an overlapping list of avatars with an overflow count. The maxmimum number
of avatars to render can be configred with the `max` prop.

#### Default AvatarRow

```js
<AvatarRow
  memberList={[
    { name: "member mcmemberton", src: "https://placeimg.com/80/81/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/81/80/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/82/80/animals" },
    { name: "member mcmemberton" },
    { name: "member mcmemberton", src: "https://placeimg.com/83/80/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/80/83/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/84/80/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/80/84/animals" },
  ]}
/>
```

#### AvatarRow with higher `max` and larger size

```js
<AvatarRow
  max={6}
  size='l'
  memberList={[
    { name: "member mcmemberton", src: "https://placeimg.com/80/81/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/81/80/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/82/80/animals" },
    { name: "member mcmemberton" },
    { name: "member mcmemberton", src: "https://placeimg.com/83/80/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/80/83/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/84/80/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/80/84/animals" },
  ]}
/>
```

#### `max` exceeds list length

```js
<AvatarRow
  max={99}
  memberList={[
    { name: "member mcmemberton", src: "https://placeimg.com/80/81/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/81/80/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/82/80/animals" },
    { name: "member mcmemberton" },
    { name: "member mcmemberton", src: "https://placeimg.com/83/80/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/80/83/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/84/80/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/80/84/animals" },
  ]}
/>
```
