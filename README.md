# react-soundcloud-embedded

Fork of Embedded SoundCloud widget, with TypeScript typings.

![https://raw.githubusercontent.com/keske/react-soundcloud/c0ef115f6539120088079793eb45186b45d899af/example/images/visualTrue.png](https://raw.githubusercontent.com/keske/react-soundcloud/c0ef115f6539120088079793eb45186b45d899af/example/images/visualTrue.png)

![https://raw.githubusercontent.com/keske/react-soundcloud/c0ef115f6539120088079793eb45186b45d899af/example/images/visualFalse.png](https://raw.githubusercontent.com/keske/react-soundcloud/c0ef115f6539120088079793eb45186b45d899af/example/images/visualFalse.png)

## Installation

`npm install react-soundcloud-embedded`

or

`yarn add react-soundcloud-embedded`

## Usage
`import ReactSoundcloud from 'react-soundcloud-embedded';`

Simple usage:

```tsx
import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import ReactSoundCloud from 'react-soundcloud-embedded'
import MyTrackURL from './somewhere'

const Page = (): FC => (
  <div>
    <label>My SoundCloud:</label>
    <ReactSoundCloud url={MyTrackURL} />
  </div>
)

ReactDOM.render(<Page />, document.getElementById('root'))
```

### Props
- `width` _(String)_ - widget width, default: `100%`
- `height` _(String)_ - widget height, default: `450px`
- `url` _(String)_ - URL to track, default: `https://api.soundcloud.com/tracks/210785280`,
- `autoPlay` _(Boolean)_ - auto play track, default: `false`,
- `hideRelated` _(Boolean)_ - hide related, default: `false`,
- `showComments` _(Boolean)_ - show comments, default: `true`,
- `showUser` _(Boolean)_ - show users, default: `true`,
- `showReposts` _(Boolean)_ - show reposts, default: `false`,
- `visual` _(Boolean)_ - `true` for background image, default: `true`,
- `color` _(String)_ - play button color, default: `ff5500`
