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

Use the same options as [hexo-generator-index]:

```yml
index_generator:
  per_page: 10
  order_by: -date
```

- **per_page**: Posts displayed per page. (0 = disable pagination)
- **order_by**: Posts order. (Order by date descending by default)

## License

MIT

[hexo-generator-index]: https://github.com/hexojs/hexo-generator-index
