[mdbook](https://github.com/rust-lang/mdBook)  is awesome tool to publish your books online. It offers five themes 
- Light
- Ayu
- Navy
- Coal
- Rust

They are all awesome but if you are individual publisher, it gets hard to test your published work in four different themes , given a multitude of browser/device combinations. And it becomes even more important if you want to deliver your work in a specific theme. 

Yellow theme, makes all the theme choice point to a single theme with yellow back-ground with black standard book fonts. 

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

