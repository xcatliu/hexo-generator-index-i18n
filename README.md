# hexo-generator-index-i18n

I18n index generator plugin for Hexo.

It will generate a `:lang/index.html` for each language.

> Impressed by [hexo-generator-index] and [hexo-generator-i18n](https://github.com/Jamling/hexo-generator-i18n).

A live site using this plugin: http://js-index.com/

And the GitHub repo for that site: https://github.com/xcatliu/js-index

## Installation

```shell
$ npm install hexo-generator-index-i18n --save
```

## Options

The plugin uses the same options as [hexo-generator-index] plus one additional property. This section has to be added or modified to the root _config.yml file:

```yml
index_generator:
  path: ''
  per_page: 10
  order_by: -date
  single_language_index: false
```

- **path**: Root path for your blogs index page. (default = '')
- **per_page**: Posts displayed per page. (0 = disable pagination)
- **order_by**: Posts order. (Order by date descending by default)
- **single_language_index**: Show only default language posts at home page. By default is `false`. This means that home page can contain posts written on any language.

### How to show only one specific language at root index (home)?

1. Uninstall `hexo-generator-index` package:

    ```shell
    $ npm uninstall hexo-generator-index --save
    ```

1. Set `index_generator.single_language_index` property to `true` in config.

1. Put homepage language at the first place in `language` array in config.

## License

MIT

[hexo-generator-index]: https://github.com/hexojs/hexo-generator-index
