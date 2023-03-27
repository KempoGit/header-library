# NPM Link

https://www.npmjs.com/package/kempo-header-library

# Github Link

https://github.com/KempoGit/header-library

# Header library

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

# How to use it

You must first add it in the `module` you want to use it

```
import { HeaderLibraryModule } from 'kempo-header-library';

imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderLibraryModule
  ],
```

Then create the links you want to see in the `.ts` file

```
links = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Shop',
            url: '/'
        },
        {
            title: 'Login',
            url: '/',
            highlight: true
        }
    ];
```

Finally you can use it with the required inputs

```
<lib-header-library
    [logo]="'../assets/logo.svg'"
    [links]="links"
    [color_1]="'white'"
    [color_2]="'black'"
    [background_color]="'black'"
    [shadow]="true">
</lib-header-library>
```

The input `[logo]` is `string` and must indicate the url where the logo is located.

The input `[links]` It is an object array and must contain the items that will be seen in the Header.
The `title` is the text of each item.
The property `url` indicates where the redirection will do each item.
The `highlight` property will make item look like a button.

The input `[color_1]` is `string` and indicates the primary color of the text, accepts any color that can be used in CSS.

The input `[color_2]` is `string` and indicates the secondary color of the text, accepts any color that can be used in CSS.

The input `[background_color]` is `string` and indicates the color of the header, accepts any color that can be used in CSS. By default this value is 'transparent'.

The input `[shadow]` is `boolean` and indicates if the header will show a shadow below. By default this value is false.

# Result

<h1 align="center">
	<br>
	<br>
	<img width="320" src="assets/screenshot.png" alt="header-library">
	<br>
	<br>
	<br>
</h1>
