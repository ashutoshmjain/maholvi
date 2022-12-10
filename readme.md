[mdbook](https://github.com/rust-lang/mdBook)  is awesome tool to publish your books online. It offers five themes 
- Light
- Ayu
- Navy
- Coal
- Rust

They are all great but if you are an individual publisher, it gets hard to test your published work in five different themes . Given a multitude of browser/device combinations, it is a lot of work for a writer to review her work in five different themes and to fine-tune them to suit the needs of the publication. Too much choice :-)

Yellow theme, makes all the theme choices point to a single theme with yellow `#f9ce00` back-ground, with black `Gentium Book Basic` from Google fonts. 

You can view a usage of this theme at https://gita.shutri.com

How to install - 

- Download the yellow theme folder in `src` folder of your book --> you may git clone this repo and copy paste.
- Point your book.toml to this new theme
```
[output.html]
theme = "src/theme"

```

- Test with `mdbook serve` on local host.

# Credits
- The color choice is inspired from https://demo.diasporamemory.com/
- The fonts and cover page is inspired from https://ipythonbook.com/

