[mdbook](https://github.com/rust-lang/mdBook)  is awesome tool to publish your books online. It offers five themes 
- Light
- Ayu
- Navy
- Coal
- Rust

They are all great but if you are an individual publisher, it gets hard to test your published work in five different themes . Given a multitude of browser/device combinations, it is a lot of work for a single writer to review her work in five different typographies and to fine-tune them to suit the needs of the publication. Too much choice :-)

Yellow theme, makes all the theme choices point to a single theme with yellow `#f9ce00` back-ground, with black `Kalam` fonts from `Indian Type Foundry`. Fonts are available for free download or direct embed at [google Fonts](https://fonts.google.com/specimen/Kalam?query=Indian+Type+Foundry&noto.script=Deva)

The `Kalam` fonts are hybrid of a normal and italics. A carefree font that is good for both English and Hindi — particularly so if you have a mix of both in your publication. Very suitable for poetic quotes common to most of the books !

You can view a usage of this theme at https://gita.shutri.com

How to install - 

```
/ clone repo
gh repo clone ashutoshmjain/maholvi
/ Replace the favicon.png in `theme` folder with yours.
/ Copy theme and fonts to your mdbook src folder
cp -rp maholvi/*  <yourBook>/src/

```
Point your book.toml to this new theme

```
[output.html]
theme = "src/theme"
```

- Test with `mdbook serve` on local host.

# Credits
- The color choice is inspired from https://demo.diasporamemory.com/
- The cover page and the general css design is inspired from https://ipythonbook.com/
- "Indian Fonts Foundry" and Google fonts for awesome `Kamal` font

### Note
Since fonts and back ground image is already supplied , addition of this theme should not need any additional cookies or trackers on user side.
