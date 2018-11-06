
### AvatarRow
Render an overlapping list of avatars with an overflow count. The maxmimum number
of avatars to render can be configred with the `max` prop.

#### Default AvatarRow

```js
<AvatarRow
  memberList={[
    { name: "member mcmemberton", src: "https://placeimg.com/40/41/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/41/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/42/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/40/42/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/43/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/40/43/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/44/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/40/44/animals" },
  ]}
/>
```

#### AvatarRow with higher `max`

```js
<AvatarRow
  max={6}
  memberList={[
    { name: "member mcmemberton", src: "https://placeimg.com/40/41/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/41/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/42/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/40/42/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/43/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/40/43/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/44/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/40/44/animals" },
  ]}
/>
```

#### `max` exceeds list length

```js
<AvatarRow
  max={99}
  memberList={[
    { name: "member mcmemberton", src: "https://placeimg.com/40/41/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/41/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/42/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/40/42/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/43/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/40/43/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/44/40/animals" },
    { name: "member mcmemberton", src: "https://placeimg.com/40/44/animals" },
  ]}
/>
```
