# FavMusicList App

## Finished Task

- T1: Create App View
- T2: Toggling List View
- T3: Adding Albums
- T4: Removing Albums
- T5: Marking Albums
- T6: Sorting
- T7: Language Switch
- T8: Adding Tests

## Tech Stack

**Technologies:**

- **FE Stack:** React, TypeScript, Context API, CSS Modules
- **For Testing:** JEST, React Testing Library
- **Other Libraries:** i18n for translation
- **Boilerplate:** Create React App

## How to run app locally

Clone project code and then open your terminal and use

```
npm install
```

command. Then you can use

```
npm start
```

to start a development server.

## Running Tests

To run tests, run the following command

```
  npm test
```

## What can be done next

- Aliases - unfortunately, I don't know how to add them in Create React App, but they could be used to avoid long imports, for example (`import { useAlbums } from "../../../../context/albumsList.context"`).
- Improve the deletion SVG animation for list items. I'm not satisfied with the current animation. It seems that to make it smooth, we should refine the path responsible for the "body" of the icon.
- Some icons were straightforward to implement using pure CSS, so not all icons were obtained from Figman (e.g., `CloseIcon`, `ListIcon`).
- In case the album list is expected to grow significantly, it might be worth considering the addition of the react-window library, which enables lazy loading of list items.
- Organize imports - you can install the appropriate eslint plugins and configure them in the eslint configuration file.
